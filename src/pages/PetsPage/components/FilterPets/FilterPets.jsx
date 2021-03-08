import React, { useState } from 'react';
import './FilterPets.scss';
import InputImg from '../../../../shared/InputImg/InputImg';
import { Filter, FilterForm } from '../../../../shared/Filter/Filter';
// import { InputImgContext } from '../../../../shared/InputImg/InputImg';


/* const initialFilterValues = {
    city: '',
    species: '',
    type: '',
    age: '',
    gender: '',
    size: ''
} */


export function FilterPets(props) {

    const [data, setData] = useState({

    });

    const handleInputChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
        console.log(data)
    }





    // let disableFilters = (status) => {
    //     status = false;
    //     // console.log(status);
    //     return status
    // }

    // console.log(status);

    const aplyFilters = () => {
        // setSelected(true);
    }



    return (
        <div className="fig-c">
            <div>
                <h5 className="fig-c__filter-title">Filtros</h5>

            </div>
            <FilterForm>
                <div className="p-filter">
                    <p className="p-filter__title">Ciudad</p>
                    <select class="p-filter__select" value={data.city} onChange={handleInputChange} >
                        <option value="Madrid">Madrid</option>
                        <option value="Barcelona">Barcelona</option>
                        <option value="Valencia">Valencia</option>
                        <option value="Sevilla">Sevilla</option>
                        <option value="Zaragoza">Zaragoza</option>
                        <option value="Málaga">Málaga</option>
                        <option value="Murcia">Murcia</option>
                        <option value="Palma">Palma</option>
                        <option value="Gran Canaria">Gran Canaria</option>
                        <option value="Bilbao">Bilbao</option>
                        <option value="Alicante">Alicante</option>
                        <option value="Córdoba">Córdoba</option>
                        <option value="Valladolid">Valladolid</option>
                        <option value="Vitoria">Vitoria</option>
                        <option value="La Coruña">La Coruña</option>
                        <option value="Granada">Granada</option>
                        <option value="Oviedo">Oviedo</option>
                    </select>
                </div>
                <div className="p-filter-especie">
                    <p className="p-filter__title">Especie</p>
                    <div className="p-input-wrap c-input-img">
                        <input id='Perro' className="c-input-img__input" value={data.species} onChange={handleInputChange
                        } type="checkbox" alt="Submit" width="48" height="48" />
                        <label for='Perro' className="c-input-img__label" >                    <span className="icon-dog size" /></label>
                        <input id='Gato' className="c-input-img__input" value={data.species} onChange={handleInputChange
                        } type="checkbox" alt="Submit" width="48" height="48" />
                        <label for='Gato' className="c-input-img__label" >                    <span className="icon-happy size" /></label>
                        <input id='Conejo' className="c-input-img__input" value={data.species} onChange={handleInputChange
                        } type="checkbox" alt="Submit" width="48" height="48" />
                        <label for='Conejo' className="c-input-img__label" >                    <span className="icon-rabbit size" /></label>
                        <input id='Cobaya' className="c-input-img__input" value={data.species} onChange={handleInputChange
                        } type="checkbox" alt="Submit" width="48" height="48" />
                        <label for='Cobaya' className="c-input-img__label" >                    <span className="icon-mouse size" /></label>
                        <input id='Pequeño mamífero' className="c-input-img__input" value={data.species} onChange={handleInputChange
                        } type="checkbox" alt="Submit" width="48" height="48" />
                        <label for='Pequeño mamífero' className="c-input-img__label" >                    <span className="icon-hedgehog size" /></label>
                        <input id='Hurón' className="c-input-img__input" value={data.species} onChange={handleInputChange
                        } type="checkbox" alt="Submit" width="48" height="48" />
                        <label for='Hurón' className="c-input-img__label" >                    <span className="icon-ferret size" /></label>
                        <input id='Pez' className="c-input-img__input" value={data.species} onChange={handleInputChange
                        } type="checkbox" alt="Submit" width="48" height="48" />
                        <label for='Pez' className="c-input-img__label" >                    <span className="icon-tropical-fish size" /></label>
                        <input id='Reptil' className="c-input-img__input" value={data.species} onChange={handleInputChange
                        } type="checkbox" alt="Submit" width="48" height="48" />
                        <label for='Reptil' className="c-input-img__label" >                    <span className="icon-snake size" /></label>
                        <input id='Anfibio' className="c-input-img__input" value={data.species} onChange={handleInputChange
                        } type="checkbox" alt="Submit" width="48" height="48" />
                        <label for='Anfibio' className="c-input-img__label" >                    <span className="icon-frog size" /></label>
                        <input id='Arácnido o insecto' className="c-input-img__input" value={data.species} onChange={handleInputChange
                        } type="checkbox" alt="Submit" width="48" height="48" />
                        <label for='Arácnido o insecto' className="c-input-img__label" >                    <span className="icon-spider size" /></label>
                        <input id='Ave' className="c-input-img__input" value={data.species} onChange={handleInputChange
                        } type="checkbox" alt="Submit" width="48" height="48" />
                        <label for='Ave' className="c-input-img__label" >                    <span className="icon-parrot size" /></label>


                        {/* <InputImg label={'Perro'} name="perro" checked={data.perro} onChange={handleInputChange} />
                        <InputImg label={'Gato'} species='Gato' />
                        <InputImg label={'Conejo'} />
                        <InputImg label={'Cobaya'} />
                        <InputImg label={'Pequeño mamífero'} />
                        <InputImg label={'Hurón'} />
                        <InputImg label={'Pez'} />
                        <InputImg label={'Reptil'} />
                        <InputImg label={'Anfibio'} />
                        <InputImg label={'Arácnido o insecto'} />
                        <InputImg label={'Ave'} /> */}
                    </div>
                    <div className="p-filter">
                        <p className="p-filter__title">Tipo</p>
                        <select class="p-filter__select" value={data.type} onChange={handleInputChange}>
                            <option value="Golden">Golden</option>
                            <option value="Podenco">Podenco</option>
                            <option value="Pastor Belga">Pastor Belga</option>
                        </select>
                    </div>
                </div>
                <div className="p-filter">
                    <p className="p-filter__title">Edad</p>
                    <select class="p-filter__select" value={data.age} onChange={handleInputChange}>
                        <option value="Cachorro">Cachorro</option>
                        <option value="Joven">Joven</option>
                        <option value="Adulto">Adulto</option>
                    </select>
                </div>
                <div className="p-filter">
                    <p className="p-filter__title">Sexo</p>
                    {/* <FormControl> */}
                    <div className="d-flex p-input-center c-input-img">

                        <input id='Hembra' className="c-input-img__input" value={data.gender} onChange={handleInputChange
                        } type="checkbox" alt="Submit" width="48" height="48" />
                        <label for='Hembra' className="c-input-img__label" >                    <span className="icon-femenine-1 size" /></label>
                        <input id='Macho' className="c-input-img__input" value={data.gender} onChange={handleInputChange
                        } type="checkbox" alt="Submit" width="48" height="48" />
                        <label for='Macho' className="c-input-img__label" >                    <span className="icon-masculine size" /></label>



                        {/* <InputImg label={'Hembra'} gender='Hembra'checked={data.gender} onChange={handleInputChange} />
                        <InputImg label={'Macho'} checked={data.gender} onChange={handleInputChange} /> */}
                    </div>
                    {/* </FormControl> */}
                </div>
                <div className="p-filter">
                    <p className="p-filter__title">Tamaño</p>
                    <div className="d-flex p-input-center c-input-img">

                        <input id='Pequeño' className="c-input-img__input" value={data.size} onChange={handleInputChange
                        } type="checkbox" alt="Submit" width="48" height="48" />
                        <label for='Pequeño' className="c-input-img__label" >                    <span className="icon-dog size" /></label>
                        <input id='Mediano' className="c-input-img__input" value={data.size} onChange={handleInputChange
                        } type="checkbox" alt="Submit" width="48" height="48" />
                        <label for='Mediano' className="c-input-img__label" >                    <span className="icon-dog size" /></label>
                        <input id='Grande' className="c-input-img__input" value={data.size} onChange={handleInputChange
                        } type="checkbox" alt="Submit" width="48" height="48" />
                        <label for='Grande' className="c-input-img__label" >                    <span className="icon-dog size" /></label>




                        {/* <InputImg label={'Pequeño'} onChange={handleInputChange} />
                        <InputImg label={'Mediano'} onChange={handleInputChange} />
                        <InputImg label={'Grande'} onChange={handleInputChange} /> */}
                    </div>

                </div>
                <div className="p-filter-btn-box">
                    <button className="c-button c-button__pink" type="reset">Borrar filtros</button>
                    <button className="c-button c-button__pink" typye="submit">Aplicar</button>
                </div>
            </FilterForm>
        </div>
    )
}
