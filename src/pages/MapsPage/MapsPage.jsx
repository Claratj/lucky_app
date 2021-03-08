import React, {useCallback, useEffect, useRef, useState} from 'react';

import './MapsPage.scss';
import Footer from "../../core/Footer/Footer";
import {MapsPageLocation} from "./components/MapsPageLocation/MapsPageLocation";
import {GoogleMap, InfoWindow, Marker, useLoadScript} from "@react-google-maps/api";
import {Combobox, ComboboxInput, ComboboxPopover, ComboboxOption, ComboboxList} from "@reach/combobox";
import usePlacesAutocomplete, {getGeocode, getLatLng} from 'use-places-autocomplete';
import MapStyles from './components/MapStyles';
import {API} from "../../shared/consts/api.consts";

export function MapsPage() {
    // const locations = [
    //     {
    //         name: 'Clínica Veterinaria Don Can',
    //         img: 'https://mivetclinicas.com/wp-content/uploads/2019/04/Don-Can-fachada.png',
    //         score: 4.45,
    //         address1: 'Calle de Cristóbal Bordiu, 27',
    //         address2: '28003 Madrid',
    //         lat: 40.443150,
    //         lng: -3.699470,
    //         opinions: [
    //             {
    //                 img: 'https://ak.picdn.net/shutterstock/videos/6977578/thumb/1.jpg',
    //                 text: "Cuidan de mis perros desde hace 25 años, increíbles, profesionales y cariñosos",
    //             },
    //             {
    //                 img: 'https://previews.123rf.com/images/madrolly/madrolly2007/madrolly200700045/150607838-person-looking-over-the-shoulder-straw-hat-on-a-girl-that-is-watching-behind-her-woman-turning-aroun.jpg',
    //                 text: "Excelente trato a los perros y a los dueños muy recomendable"
    //             }
    //         ]
    //     },
    //     {
    //         name: 'Hospital veterinario Retiro',
    //         img: 'https://t1.ea.ltmcdn.com/es/places/8/3/5/img_5538_hospital-veterinario-retiro_0_orig.jpg',
    //         score: 4.1,
    //         address1: 'Av. de Menéndez Pelayo, 9',
    //         address2: '28009 Madrid',
    //         lat: 40.421300,
    //         lng: -3.679600,
    //         opinions: []
    //     },
    //     {
    //         name: 'Centro Veterinario Los Sauces',
    //         img: 'https://cvsauces.com/nuevo/wp-content/uploads/2014/10/saucesss.jpg',
    //         score: 4.4,
    //         address1: 'Calle de Sta Engracia, 63',
    //         address2: '28010 Madrid',
    //         lat: 40.434080,
    //         lng: -3.698580,
    //         opinions: []
    //     }
    // ];

    const [locations, setLocations] = useState([]);

    const [center, setCenter] = useState({
        lat: 0,
        lng: 0,
    })
    const [selected, setSelected] = useState(null);

    const libraries = ['places'];

    const mapContainerStyle = {
        width: '100%',
        height: '33rem',
    }

    const options = {
        styles: MapStyles,
        disableDefaultUI: true,
    };

    const {isLoaded, loadError} = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_MAPS_API_KEY,
        libraries,
    });

    const getLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            setCenter({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
            })
            panTo({lat: position.coords.latitude, lng: position.coords.longitude});
        }, () => null);
    }

    const cleanLocations = async (data) => {
        let theseLocations = [];
        for (let i = 0; i < data.length; i++) {
            await API.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/details/json?place_id=${data[i].place_id}&fields=name,rating,geometry,reviews,address_component,photo&key=${process.env.REACT_APP_MAPS_API_KEY}`).then((r) => {
                const currentLocation = r.data.result;
                console.log(currentLocation);
                let fullInfo = {
                    name: currentLocation.name,
                    address1: '',
                    address2: '',
                    score: currentLocation.rating ? currentLocation.rating : 0,
                    lat: currentLocation.geometry.location.lat,
                    lng: currentLocation.geometry.location.lng,
                };

                const address = {
                    route: '',
                    street_number: '',
                    locality: '',
                    postal_code: '',
                };
                for (let i = 0; i < currentLocation.address_components.length; i++) {
                    if (currentLocation.address_components[i].types.contains('route')) {
                        address.route = currentLocation.address_components[i].long_name;
                    } else if (currentLocation.address_components[i].types.contains('street_number')) {
                        address.street_number = currentLocation.address_components[i].long_name;
                    } else if (currentLocation.address_components[i].types.contains('locality')) {
                        address.locality = currentLocation.address_components[i].long_name;
                    } else if (currentLocation.address_components[i].types.contains('postal_code')) {
                        address.postal_code = currentLocation.address_components[i].long_name;
                    }
                }
                fullInfo.address1 = `${address.route}, ${address.street_number}`;
                fullInfo.address2 = `${address.locality} ${address.postal_code}`;

                if (currentLocation.photos) {
                    API.get(`https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${currentLocation.photos[0].photo_reference}&key=${process.env.REACT_APP_MAPS_API_KEY}`)
                        .then((res) => fullInfo.img = res.headers['x-final-url']);
                }

                if (currentLocation.reviews) {
                    fullInfo.opinions = [
                        {
                            img: currentLocation.reviews[0].profile_photo_url,
                            text: currentLocation.reviews[0].text,
                        },
                        {
                            img: currentLocation.reviews[1].profile_photo_url,
                            text: currentLocation.reviews[1].text,
                        },
                    ]
                }
                theseLocations.push(fullInfo);
            });
        }

        setLocations(theseLocations);
    }

    const mapRef = useRef();
    const onMapLoad = useCallback((map) => {
        getLocation();
        mapRef.current = map;
    });

    const panTo = useCallback(({lat, lng}) => {
        mapRef.current.panTo({lat, lng});
        mapRef.current.setZoom(14);
    }, [])

    function Search() {
        const {ready, value, suggestions: {status, data}, setValue, clearSuggestions} = usePlacesAutocomplete({
            requestOptions: {
                location: {
                    lat: () => center.lat,
                    lng: () => center.lng
                },
                radius: 5 * 1000,
            }
        });

        return <Combobox onSelect={async (address) => {
            console.log(data);
            await cleanLocations(data);
            setValue(address, false);
            clearSuggestions();
            try {
                const results = await getGeocode({address});
                const {lat, lng} = await getLatLng(results[0]);
                panTo({lat, lng});
            } catch (e) {
                console.error(e.message);
            }
        }}>
            <ComboboxInput className={"p-maps-page__search-bar"} value={value} onChange={(e) => {
                setValue(e.target.value);
            }} disabled={!ready} placeholder={"¿Qué estás buscando?"}/>
            <ComboboxPopover className={"p-maps-page__popover"}>
                <ComboboxList>
                    {status === "OK" && data.map(({id, description}) => <ComboboxOption key={id}
                                                                                        value={description}/>)}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    }

    return (
        <div className={"p-maps-page"}>

            <div className={"container"}>

                <div className={"p-maps-page__search"}>
                    <Search panTo={panTo}/>
                    <p className={"p-maps-page__clear"}>x</p>
                </div>

                {isLoaded && <div className={"p-maps-page__map"}>
                    <GoogleMap mapContainerStyle={mapContainerStyle} center={center} zoom={14} options={options}
                               onLoad={onMapLoad}>

                        {locations.map((location, i) => <Marker key={i}
                                                                position={{lat: location.lat, lng: location.lng}}
                                                                icon={{
                                                                    url: 'https://cdn.zeplin.io/5e2888579d7785572934fb93/assets/F29C25E8-57BD-47CE-852F-0674F0EDD1D6.png',
                                                                    scaledSize: new window.google.maps.Size(32, 32),
                                                                    origin: new window.google.maps.Point(0, 0),
                                                                    anchor: new window.google.maps.Point(15, 15),
                                                                }}
                                                                onClick={() => {
                                                                    setSelected(location)
                                                                    window.location.href =
                                                                        `#locations-${i}`
                                                                    ;
                                                                }}/>)}


                        {selected ? (<InfoWindow position={{lat: selected.lat, lng: selected.lng}}
                                                 onCloseClick={() => setSelected(null)}>
                            <div>
                                <h2>{selected.name}</h2>
                            </div>
                        </InfoWindow>) : null}
                    </GoogleMap>
                </div>}

                <div className={"p-maps-page__response"}>
                    {locations.map((location, i) => <MapsPageLocation key={i} id={i} location={location}/>)}
                </div>
            </div>
            <Footer/>
        </div>
    )
}