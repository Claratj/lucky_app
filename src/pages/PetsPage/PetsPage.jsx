import React, { useContext, useEffect, useState } from 'react';
import PetsGallery from './components/PetsGallery/PetsGallery';
import { Link } from 'react-router-dom';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import arrow from '../../assets/img/arrow-r.png';
import more from '../../assets/img/more.png';
import dog from '../../assets/img/perrop.png';
import bird from '../../assets/img/ave.png';
import iconFilter from '../../assets/img/filtros.png';
import SearchBarPets from './components/SearchBarPets/SearchBarPets';
import './PetsPage.scss';
import Footer from '../../core/Footer/Footer';
import { LoadingContext } from '../../core/Loading/contexts/LoadingContext';
import { FilterContext } from '../../shared/Context/FilterContext';
import { API } from '../../shared/consts/api.consts';
import { computeHeadingLevel } from '@testing-library/dom';
import { FilterPets } from './components/FilterPets/FilterPets';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);
let allPets = [];

export default function PetsPage() {
    const [search, setSearch] = useState(null);
    const [pets, setPets] = useState([{
        pet: {
            species: {}
        }
    }]);
    const { setIsLoading } = useContext(LoadingContext);
    const [show, setShow] = useState(false);
    const [data, setData] = useState({
        species: ""
    });


    const user = JSON.parse(localStorage.getItem('userData'));

    const handleInputChange = (e) => {
        console.log(e);
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });

        console.log(data);
    }
    const close = () => {
        setShow(false);
    }

    const submitFilter = () => {
        console.log(data);

        let filterPets = [];
        console.log(data);
        if (data.city) {
            filterPets = allPets.filter((pet) => {
                if (pet.city === data.city) {
                    return pet;
                }
            });
        }
        if (data.species !== "") {
            filterPets = filterPets.filter((pet) => {
                if (pet.species.species.toLowerCase() === data.species) {
                    return pet;
                }
            });
        }
        if (data.typePet) {
            filterPets = filterPets.filter((pet) => {
                if (pet.species.typePet === data.typePet) {
                    return pet;
                }
            });
        }

        // filterPets = filterPets.filter((pet) => {
        //     if (pet.age === data.age) {
        //         return pet;
        //     }
        // });
        if (data.gender) {
            filterPets = filterPets.filter((pet) => {
                if (pet.gender.toLowerCase() === data.gender) {
                    return pet;
                }
            });
        }
        if (data.size) {
            filterPets = filterPets.filter((pet) => {
                if (pet.size.toLowerCase() === data.size) {
                    return pet;
                }
            });
        }

        setPets(filterPets);
        console.log(filterPets);

        close();
    }



    const getPets = () => {
        setIsLoading(true);
        API.get('/pet').then((res) => {
            setIsLoading(false);
            console.log(res.data.results)
            allPets = res.data.results;
            setPets(res.data.results);

        })
    }


    const searchItem = () => {
        const filterPets = allPets.filter((pet) => {
            if (pet.name.toLowerCase().includes(search.toLowerCase())) {
                return pet;
            }
        })
        setPets(filterPets);
    }

    useEffect(getPets, []);
    useEffect(() => {
        if (search) {
            searchItem();
        } else {
            getPets()
        }
    }, [search]);


    const clickTrue = () => {
        // document.getElementsByClassName('c-pets-page').style.overflow = 'hidden';
        setShow(true);

    }

    const clearFilter = () => {

        const inputs = document.querySelectorAll('input');
        const inputsSelect = document.querySelectorAll("[id^='mui-component-select-']");


        inputs.forEach(input => {
            input.disabled = false;
            input.checked = false;
            // input.target.value = "";
        });

        inputsSelect.forEach(input => {
            input.innerHTML = '';
        })

        setData({ species: "" });
        setPets(allPets);
    }


    // console.log(search)
    return (
        <div className="c-pets-page">
            <SearchBarPets handleChange={(inp) => setSearch(inp.value)}></SearchBarPets>
            {user &&
                <div>
                    <Link to="" className="c-pets-page__link"><div className="c-pets-page__mypets"><h4>Mis mascotas</h4><img src={more} className="c-pets-page__more" alt="" /></div>  </Link>
                    <p className="c-pets-page__par">Accede al perfil de tus mascotas</p>

                    <Swiper className="pets"
                        spaceBetween={-110}
                        initialSlide={1}
                        slidesPerView={3}
                        centeredSlides={true}
                        pagination={{ clickable: true, clickableClass: 'swiper-pagination-clickable pets-page', bulletClass: 'swiper-pagination-bullet pets-page' }}>

                        <SwiperSlide className="pets">
                            <div className="c-pets-page__item">
                                <figure><img src={dog} alt="" className="c-pets-page__imgswiper"></img></figure>
                                <figcaption className="c-pets-page__figcap">Apolo</figcaption></div>
                        </SwiperSlide>

                        <SwiperSlide className="pets">
                            <div className="c-pets-page__item">
                                <figure><img src={bird} alt="" className="c-pets-page__imgswiper"></img></figure>
                                <figcaption className="c-pets-page__figcap">Kiko</figcaption></div>
                        </SwiperSlide>

                        <SwiperSlide className="pets">
                            <div className="c-pets-page__item">
                                <figure><img src={bird} alt="" className="c-pets-page__imgswiper"></img></figure>
                                <figcaption className="c-pets-page__figcap">Dali</figcaption></div>
                        </SwiperSlide>

                    </Swiper>

                    <Link to="/adoptions" className="c-pets-page__link">
                        <div className="c-pets-page__state">
                            <h4 className="c-pets-page__adoption">Estado de la adopción</h4>
                            <img src={arrow} alt="" className="c-pets-page__img" /></div>
                    </Link>
                </div>}
            <div className="c-pets-page__petsadop">
                <h4 className="c-pets-page__titleadop">Animales en adopción</h4>
                <FilterContext.Provider value={{ show, setShow }}>

                    <div onClick={clickTrue}>
                        <img className="c-pets-page__filter" src={iconFilter} alt="" />
                    </div>
                    <FilterPets show={show} handleInputChange={handleInputChange} submitFilter={submitFilter} clear={clearFilter} data={data}></FilterPets>
                </FilterContext.Provider>
            </div>

            <PetsGallery pets={pets}></PetsGallery>
            <Footer></Footer>
        </div>
    )
}
