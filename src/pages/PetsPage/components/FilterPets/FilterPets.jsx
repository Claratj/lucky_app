import React, { useState } from 'react';
import './FilterPets.scss';


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
        // const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
        const value = e.target.value;
        setData({
            ...data,
            [e.target.name]: value
        });
        console.log(data)
    }






    const handleSubmit = () => {
        // setSelected(true);
    }



    return (
        <div className="fig-c">
            <div>
                <h5 className="fig-c__filter-title">Filtros</h5>

            </div>
            <form>
                <div className="p-filter">
                    <p className="p-filter__title">Ciudad</p>
                    <select class="p-filter__select" name="city" value={data.city} onChange={handleInputChange} >
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
                        <input id='Perro' className="c-input-img__input" name="species" value='perro' onChange={handleInputChange
                        } type="checkbox" alt="Submit" />
                        <label htmlFor='Perro' className="c-input-img__label" >
                            <span className="icon-dog size" /> Perro
                        </label>

                        <input id='Gato' className="c-input-img__input" name="species" value='gato' onChange={handleInputChange
                        } type="checkbox" alt="Submit" />
                        <label htmlFor='Gato' className="c-input-img__label" >
                            <span className="icon-happy size" /> Gato
                        </label>

                        <input id='Conejo' className="c-input-img__input" name="species" value='conejo' onChange={handleInputChange
                        } type="checkbox" alt="Submit" />
                        <label htmlFor='Conejo' className="c-input-img__label" >
                            <span className="icon-rabbit size" /> Conejo

                        </label>

                        <input id='Cobaya' className="c-input-img__input" name="species" value='cobaya' onChange={handleInputChange
                        } type="checkbox" alt="Submit" />
                        <label htmlFor='Cobaya' className="c-input-img__label" >
                            <span className="icon-mouse size" /> Cobaya
                        </label>

                        <input id='Pequeño mamífero' className="c-input-img__input" name="species" value={data.species} onChange={handleInputChange
                        } type="checkbox" alt="Submit" />
                        <label htmlFor='Pequeño mamífero' className="c-input-img__label" >
                            <span className="icon-hedgehog size" /> Pequeño mamífero
                        </label>

                        <input id='Hurón' className="c-input-img__input" name="species" value='huron' onChange={handleInputChange
                        } type="checkbox" alt="Submit" />
                        <label for='Hurón' className="c-input-img__label" >
                            <span className="icon-ferret size" /> Hurón
                        </label>

                        <input htmlFor='Pez' className="c-input-img__input" name="species" value='pez' onChange={handleInputChange
                        } type="checkbox" alt="Submit" />
                        <label htmlFor='Pez' className="c-input-img__label" >
                            <span className="icon-tropical-fish size" /> Pez
                        </label>

                        <input id='Reptil' className="c-input-img__input" name="species" value='reptil' onChange={handleInputChange
                        } type="checkbox" alt="Submit" />
                        <label htmlFor='Reptil' className="c-input-img__label" >
                            <span className="icon-snake size" /> Reptil
                        </label>

                        <input id='Anfibio' className="c-input-img__input" name="species" value='anfibio' onChange={handleInputChange
                        } type="checkbox" alt="Submit" />
                        <label htmlFor='Anfibio' className="c-input-img__label" >
                            <span className="icon-frog size" /> Anfibio
                        </label>

                        <input id='Arácnido o insecto' className="c-input-img__input" name="species" value={data.species} onChange={handleInputChange
                        } type="checkbox" alt="Submit" />
                        <label htmlFor='Arácnido o insecto' className="c-input-img__label" >
                            <span className="icon-spider size" /> Arácnido o insecto
                        </label>

                        <input id='Ave' className="c-input-img__input" name="species" value='bird' onChange={handleInputChange
                        } type="checkbox" alt="Submit" />
                        <label htmlFor='Ave' className="c-input-img__label" >
                            <span className="icon-parrot size" /> Ave
                        </label>

                    </div>
                    <div className="p-filter">
                        <p className="p-filter__title">Tipo</p>
                        <select class="p-filter__select" name="typePet" value={data.type} onChange={handleInputChange}>
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
                    <div className="d-flex p-input-center c-input-img">

                        <input id='Hembra' className="c-input-img__input" value={data.gender} onChange={handleInputChange
                        } type="checkbox" alt="Submit" />
                        <label htmlFor='Hembra' className="c-input-img__label" >                    <span className="icon-femenine-1 size" /></label>
                        <input id='Macho' className="c-input-img__input" value={data.gender} onChange={handleInputChange
                        } type="checkbox" alt="Submit" />
                        <label htmlFor='Macho' className="c-input-img__label" >                    <span className="icon-masculine size" /></label>

                    </div>

                </div>
                <div className="p-filter">
                    <p className="p-filter__title">Tamaño</p>
                    <div className="d-flex p-input-center c-input-img">

                        <input id='Pequeño' className="c-input-img__input" value={data.size} onChange={handleInputChange
                        } type="checkbox" alt="Submit" />
                        <label htmlFor='Pequeño' className="c-input-img__label" >
                            <span className="icon-dog size" />
                        </label>

                        <input id='Mediano' className="c-input-img__input" value={data.size} onChange={handleInputChange
                        } type="checkbox" alt="Submit" />
                        <label htmlFor='Mediano' className="c-input-img__label" >
                            <span className="icon-dog size" />
                        </label>

                        <input id='Grande' className="c-input-img__input" value={data.size} onChange={handleInputChange
                        } type="checkbox" alt="Submit" />
                        <label htmlFor='Grande' className="c-input-img__label" >
                            <span className="icon-dog size" />
                        </label>

                    </div>

                </div>
                <div className="p-filter-btn-box">
                    <button className="c-button c-button__pink" type="reset">Borrar filtros</button>
                    <button className="c-button c-button__pink" typye="submit">Aplicar</button>
                </div>
            </form>
        </div>
    )
}
