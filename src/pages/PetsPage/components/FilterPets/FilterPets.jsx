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
        // console.log(data)
    }


    const inputSelected = (e) => {
        // console.log(e);
        const name = e.target.name;
        const inputsName = document.getElementsByName(name);

        console.log(inputsName);
        for (let i = 0; i < inputsName.length; i++) {
            const input = inputsName[i];
            if (input.checked == false) {
                input.disabled = true;
                // console.log(input);
            }
        }

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
                        <input id='perro' className="c-input-img__input" name="species" value='perro' onChange={handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='perro' className="c-input-img__label" >
                            <span className="icon-dog size" /> Perro
                        </label>

                        <input id='gato' className="c-input-img__input" name="species" value='gato' onChange={handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='gato' className="c-input-img__label" >
                            <span className="icon-happy size" /> Gato
                        </label>

                        <input id='conejo' className="c-input-img__input" name="species" value='conejo' onChange={handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='conejo' className="c-input-img__label" >
                            <span className="icon-rabbit size" /> Conejo

                        </label>

                        <input id='cobaya' className="c-input-img__input" name="species" value='cobaya' onChange={handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='cobaya' className="c-input-img__label" >
                            <span className="icon-mouse size" /> Cobaya
                        </label>

                        <input id='pequeñoMamífero' className="c-input-img__input" name="species" value='Pequeño mamífero' onChange={handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='pequeñoMamífero' className="c-input-img__label" >
                            <span className="icon-hedgehog size" /> Pequeño mamífero
                        </label>

                        <input id='huron' className="c-input-img__input" name="species" value='huron' onChange={handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='huron' className="c-input-img__label" >
                            <span className="icon-ferret size" /> Hurón
                        </label>

                        <input id='pez' className="c-input-img__input" name="species" value='pez' onChange={handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='pez' className="c-input-img__label" >
                            <span className="icon-tropical-fish size" /> Pez
                        </label>

                        <input id='reptil' className="c-input-img__input" name="species" value='reptil' onChange={handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='reptil' className="c-input-img__label" >
                            <span className="icon-snake size" /> Reptil
                        </label>

                        <input id='anfibio' className="c-input-img__input" name="species" value='anfibio' onChange={handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='anfibio' className="c-input-img__label" >
                            <span className="icon-frog size" /> Anfibio
                        </label>

                        <input id='aracnido' className="c-input-img__input" name="species" value={data.species} onChange={handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='aracnido' className="c-input-img__label" >
                            <span className="icon-spider size" /> Arácnido o insecto
                        </label>

                        <input id='ave' className="c-input-img__input" name="species" value='bird' onChange={handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='ave' className="c-input-img__label" >
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
                    <select class="p-filter__select" name="age" value={data.age} onChange={handleInputChange}>
                        <option value="Cachorro">Cachorro</option>
                        <option value="Joven">Joven</option>
                        <option value="Adulto">Adulto</option>
                    </select>
                </div>
                <div className="p-filter">
                    <p className="p-filter__title">Sexo</p>
                    <div className="d-flex p-input-center c-input-img">

                        <input id='hembra' className="c-input-img__input" name="gender" value="hembra" onChange={handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='hembra' className="c-input-img__label" >                    <span className="icon-femenine-1 size" /></label>
                        <input id='macho' className="c-input-img__input" name="gender" value="macho" onChange={handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='macho' className="c-input-img__label" >                    <span className="icon-masculine size" /></label>

                    </div>

                </div>
                <div className="p-filter">
                    <p className="p-filter__title">Tamaño</p>
                    <div className="d-flex p-input-center c-input-img">

                        <input id="pequeño" className="c-input-img__input" name="size" value="pequeño" onChange={handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='pequeño' className="c-input-img__label" >
                            <span className="icon-dog size" />
                        </label>

                        <input id="mediano" className="c-input-img__input" name="size" value="mediano" onChange={handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='mediano' className="c-input-img__label" >
                            <span className="icon-dog size" />
                        </label>

                        <input id="grande" className="c-input-img__input" name="size" value="grande" onChange={handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='grande' className="c-input-img__label" >
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
