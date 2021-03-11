import React, { useEffect, useState } from 'react'
import { API } from '../../../shared/consts/api.consts';
import { FilterContext } from '../../../shared/Context/FilterContext';
import SearchBarFilter from '../../PetsPage/components/SearchBarFilter/SearchBarFilter';
import { FilterPets } from '../components/FilterPets/FilterPets';
import PetsGallery from '../components/PetsGallery/PetsGallery';
import moment from 'moment';


let allPets = [];

export default function PetsFilterPage() {
    const [search, setSearch] = useState(null);
    const [pets, setPets] = useState([{
        pet: {
            species: {}
        }
    }]);

    const [show, setShow] = useState(true);
    const [data, setData] = useState({
        species: ""
    });
    const [count, setCount] = useState(Object.keys(data).length - 1);
    const handleInputChange = (e) => {

        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });

        let number = Object.keys(data).length;

        setCount(number);

    }
    const close = () => {
        setShow(false);
    }






    const submitFilter = () => {


        let filterPets = allPets;

        if (data.city) {
            filterPets = filterPets.filter((pet) => {
                if (pet.city === data.city) {
                    return pet;
                }
            });
        }
        if (data.species !== "") {
            filterPets = filterPets.filter((pet) => {

                if (pet.species.species.toLowerCase() === data.species) {
                    console.log(data.species);
                    console.log(pet);
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
        if (data.age) {
            var d = new Date();
            var thisYear = d.getFullYear();
            // console.log(thisYear);
            let birthDate = 1;
            for (let i = 0; i < filterPets.length; i++) {
                const pet = filterPets[i];
                pet.birthDate = moment(pet.birthDate).format('YYYY');
                birthDate = parseInt(pet.birthDate);

                if (thisYear - birthDate <= 1) {
                    pet.birthDate = "Cachorro";

                } else if (thisYear - birthDate >= 2 && thisYear - birthDate <= 3) {
                    pet.birthDate = "Joven";

                } else {
                    pet.birthDate = "Adulto";
                }
                console.log(pet.birthDate);
            }

            filterPets = filterPets.filter((pet) => {
                if (pet.birthDate === data.age) {
                    return pet;
                }
            });
        }

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
        close();
    }





    const getPets = () => {

        API.get('/pet').then((res) => {

            // console.log(res.data.results);
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


    const clearFilter = () => {

        const inputs = document.querySelectorAll('input');
        const inputsSelect = document.querySelectorAll("[id^='mui-component-select-']");


        inputs.forEach(input => {
            input.disabled = false;
            input.checked = false;

        });

        inputsSelect.forEach(input => {
            input.innerHTML = '';
        })

        setData({ species: "" });
        setPets(allPets);
    }



    return (
        <div>
            <FilterContext.Provider value={{ show, setShow }}>
                <FilterPets show={show} handleInputChange={handleInputChange} submitFilter={submitFilter} clear={clearFilter} data={data}></FilterPets>
                <SearchBarFilter handleChange={(inp) => setSearch(inp.value)} count={count} clear={clearFilter} show={()=>{setShow(true)}}></SearchBarFilter>


                <PetsGallery pets={pets}></PetsGallery>
            </FilterContext.Provider>
        </div>
    )

}
