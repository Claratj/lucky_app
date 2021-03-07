import React, { useEffect } from 'react';
import './FilterPets.scss';
import InputImg from '../../../../shared/InputImg/InputImg';
import { Filter, FilterForm } from '../../../../shared/Filter/Filter';
// import { InputImgContext } from '../../../../shared/InputImg/InputImg';


const initialFilterValues = {
    city: '',
    species: '',
    type: '',
    age: '',
    gender: '',
    size: ''
}


export function FilterPets(props) {

    const {
        values,
        setValues,
        handleInputChange
    } = Filter(initialFilterValues);



    useEffect(() => {


    }, [])


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
                    <select class="p-filter__select" name="city" value={values.city} onChange={handleInputChange} >
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
                    <div className="p-input-wrap">
                        <InputImg label={'Perro'} name={'species'} value={values.species} onChange={handleInputChange} />
                        <InputImg label={'Gato'} name={'species'} value={values.species} onChange={handleInputChange}/>
                        <InputImg label={'Conejo'} name={'species'} value={values.species} onChange={handleInputChange}/>
                        <InputImg label={'Cobaya'} name={'species'} value={values.species} onChange={handleInputChange} />
                        <InputImg label={'Pequeño mamífero'} name={'species'} value={values.species} onChange={handleInputChange}/>
                        <InputImg label={'Hurón'} name={'species'} value={values.species} onChange={handleInputChange}/>
                        <InputImg label={'Pez'} name={'species'} value={values.species} onChange={handleInputChange}/>
                        <InputImg label={'Reptil'} name={'species'} value={values.species} onChange={handleInputChange}/>
                        <InputImg label={'Anfibio'} name={'species'} value={values.species} onChange={handleInputChange}/>
                        <InputImg label={'Arácnido o insecto'} name={'species'} value={values.species} onChange={handleInputChange}/>
                        <InputImg label={'Ave'} name={'species'} value={values.species} onChange={handleInputChange}/>
                    </div>
                    <div className="p-filter">
                        <p className="p-filter__title">Tipo</p>
                        <select class="p-filter__select" name="type" value={values.type} onChange={handleInputChange}>
                            <option value="Golden">Golden</option>
                            <option value="Podenco">Podenco</option>
                            <option value="Pastor Belga">Pastor Belga</option>
                        </select>
                    </div>
                </div>
                <div className="p-filter">
                    <p className="p-filter__title">Edad</p>
                    <select class="p-filter__select" name="age" value={values.age} onChange={handleInputChange}>
                        <option value="Cachorro">Cachorro</option>
                        <option value="Joven">Joven</option>
                        <option value="Adulto">Adulto</option>
                    </select>
                </div>
                <div className="p-filter">
                    <p className="p-filter__title">Sexo</p>
                    {/* <FormControl> */}
                    <div className="d-flex p-input-center">
                        <InputImg label={'Hembra'} name={'gender'} value={values.species} onChange={handleInputChange}/>
                        <InputImg label={'Macho'} name={'gender'} value={values.species} onChange={handleInputChange}/>
                    </div>
                    {/* </FormControl> */}
                </div>
                <div className="p-filter">
                    <p className="p-filter__title">Tamaño</p>
                    <div className="d-flex p-input-center">
                        <InputImg label={'Pequeño'} name={'size'} value={values.species} onChange={handleInputChange} />
                        <InputImg label={'Mediano'} name={'size'} value={values.species} onChange={handleInputChange}/>
                        <InputImg label={'Grande'} name={'size'} value={values.species} onChange={handleInputChange}/>
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