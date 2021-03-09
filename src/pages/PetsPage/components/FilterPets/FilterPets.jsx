import React, { useContext } from 'react';
import { MenuItem, TextField } from '@material-ui/core';
import './FilterPets.scss';
import { FilterContext } from '../../../../shared/Context/FilterContext';
import PopUp from '../../../../shared/PopUp/PopUp';

export function FilterPets(props) {
    const { show, setShow } = useContext(FilterContext);


    const inputSelected = (e) => {
        const name = e.target.name;
        const inputsName = document.getElementsByName(name);

        for (let i = 0; i < inputsName.length; i++) {
            const input = inputsName[i];
            if (input.checked === false) {
                input.disabled = true;
            }
        }

    }




    const species = {
        perro: ['Beagle', 'Bóxer', 'Bulldog inglés', 'Caniche', 'Chihuahua', 'Dálmata', 'Golden retirever', 'Husky siberiano', 'Pastor alemán', 'Yorkshire terrier', 'Mestizo', 'Otro'],
        gato: ['Azul ruso', 'Bobtail americano', 'Burmés', 'Maine Coon', 'Manés', 'Persa', 'Ragdoll', 'Siamés', 'Siberiano', 'Somalí', 'Mestizo', 'Otro'],
        conejo: ['Belier', 'Blanco de Hotot', 'Cabeza de León', 'English Angora', 'Gigante de Flandes', 'Rex', 'Tan', 'Toy', 'Otro'],
        cobaya: ['Americana', 'Crestada', 'Satinada', 'Otros'],
        pez: ['Luchadores de Siam', 'Guppys', 'Guramis', 'Pez disco', 'Tetras', 'Otros'],
        reptil: ['Anolis', 'Camaleón', 'Chuckwalla', 'Iguana marina', 'Lagarto azul', 'Monstruo de Gila', 'Otros'],
        anfibio: ['Rana arborícola', 'Rana punta de flecha', 'Salamandra', 'Tritón', 'Otros'],
        aracnido: ['Araña pollito', 'Hormiga', 'Insecto palo', 'Milpiés gigante', 'Tarántula mexicana', 'Otros'],
        ave: ['Agaporni', 'Cacatúa', 'Jilguero', 'Loro', 'Ninfa', 'Periquito', 'Otros']
    }

    let selected = props.data.species;
    // selected.toLowerCase();
    console.log(selected);
    let listType = []

    switch (selected !== null) {
        case (selected === 'perro'):
            listType = species.perro.map((type, i) =>
                <MenuItem key={i} value={type}>{type}</MenuItem>
            );
            break;

        case (selected === 'gato'):
            listType = species.gato.map((type, i) =>
                <MenuItem key={i} value={type}>{type}</MenuItem>
            );
            break;
        case (selected === 'conejo'):
            listType = species.conejo.map((type, i) =>
                <MenuItem key={i} value={type}>{type}</MenuItem>
            );
            break;
        case (selected === 'cobaya'):
            listType = species.cobaya.map((type, i) =>
                <MenuItem key={i} value={type}>{type}</MenuItem>
            );
            break;
        case (selected === 'pez'):
            listType = species.pez.map((type, i) =>
                <MenuItem key={i} value={type}>{type}</MenuItem>
            );
            break;
        case (selected === 'reptil'):
            listType = species.reptil.map((type, i) =>
                <MenuItem key={i} value={type}>{type}</MenuItem>
            );
            break;
        case (selected === 'anfibio'):
            listType = species.anfibio.map((type, i) =>
                <MenuItem key={i} value={type}>{type}</MenuItem>
            );
            break;
        case (selected === 'aracnido'):
            listType = species.aracnido.map((type, i) =>
                <MenuItem key={i} value={type}>{type}</MenuItem>
            );
            break;
        case (selected === 'ave'):
            listType = species.ave.map((type, i) =>
                <MenuItem key={i} value={type}>{type}</MenuItem>
            );
            break;

    }
    // console.log(show);


    return (
        <div className="fig-c">
            <PopUp onClose={() => setShow(false)} show={show} >
                {/* <NavLink to={"/pets"}>
                    <div className="close">x</div>
                </NavLink> */}
                <div>
                    <h5 className="fig-c__filter-title">Filtros</h5>
                </div>

                <div className="p-filter">
                    <p className="p-filter__title">Ciudad</p>
                    <TextField name="city" select onChange={props.handleInputChange} >
                        <MenuItem value="Madrid">Madrid</MenuItem>
                        <MenuItem value="Barcelona">Barcelona</MenuItem>
                        <MenuItem value="Valencia">Valencia</MenuItem>
                        <MenuItem value="Sevilla">Sevilla</MenuItem>
                        <MenuItem value="Zaragoza">Zaragoza</MenuItem>
                        <MenuItem value="Málaga">Málaga</MenuItem>
                        <MenuItem value="Murcia">Murcia</MenuItem>
                        <MenuItem value="Palma">Palma</MenuItem>
                        <MenuItem value="Gran Canaria">Gran Canaria</MenuItem>
                        <MenuItem value="Bilbao">Bilbao</MenuItem>
                        <MenuItem value="Alicante">Alicante</MenuItem>
                        <MenuItem value="Córdoba">Córdoba</MenuItem>
                        <MenuItem value="Valladolid">Valladolid</MenuItem>
                        <MenuItem value="Vitoria">Vitoria</MenuItem>
                        <MenuItem value="La Coruña">La Coruña</MenuItem>
                        <MenuItem value="Granada">Granada</MenuItem>
                        <MenuItem value="Oviedo">Oviedo</MenuItem>
                    </TextField>
                </div>
                <div className="p-filter-especie">
                    <p className="p-filter__title">Especie</p>
                    <div className="p-input-wrap c-input-img">
                        <input id='perro' className="c-input-img__input" name="species" value='perro' onChange={props.handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='perro' className="c-input-img__label" >
                            <span className="icon-dog size" /> Perro
                        </label>

                        <input id='gato' className="c-input-img__input" name="species" value='gato' onChange={props.handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='gato' className="c-input-img__label" >
                            <span className="icon-happy size" /> Gato
                        </label>

                        <input id='conejo' className="c-input-img__input" name="species" value='conejo' onChange={props.handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='conejo' className="c-input-img__label" >
                            <span className="icon-rabbit size" /> Conejo

                        </label>

                        <input id='cobaya' className="c-input-img__input" name="species" value='cobaya' onChange={props.handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='cobaya' className="c-input-img__label" >
                            <span className="icon-mouse size" /> Cobaya
                        </label>

                        <input id='pequeñoMamifero' className="c-input-img__input" name="species" value='Pequeño mamífero' onChange={props.handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='pequeñoMamifero' className="c-input-img__label" >
                            <span className="icon-hedgehog size" /> Pequeño mamífero
                        </label>

                        <input id='huron' className="c-input-img__input" name="species" value='huron' onChange={props.handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='huron' className="c-input-img__label" >
                            <span className="icon-ferret size" /> Hurón
                        </label>

                        <input id='pez' className="c-input-img__input" name="species" value='pez' onChange={props.handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='pez' className="c-input-img__label" >
                            <span className="icon-tropical-fish size" /> Pez
                        </label>

                        <input id='reptil' className="c-input-img__input" name="species" value='reptil' onChange={props.handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='reptil' className="c-input-img__label" >
                            <span className="icon-snake size" /> Reptil
                        </label>

                        <input id='anfibio' className="c-input-img__input" name="species" value='anfibio' onChange={props.handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='anfibio' className="c-input-img__label" >
                            <span className="icon-frog size" /> Anfibio
                        </label>

                        <input id='aracnido' className="c-input-img__input" name="species" value='aracnido' onChange={props.handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='aracnido' className="c-input-img__label" >
                            <span className="icon-spider size" /> Arácnido o insecto
                        </label>

                        <input id='ave' className="c-input-img__input" name="species" value='bird' onChange={props.handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='ave' className="c-input-img__label" >
                            <span className="icon-parrot size" /> Ave
                        </label>

                    </div>

                    {selected && selected !== 'huron' && selected !== 'Pequeño mamífero' &&
                        < div className="p-filter">
                            <p className="p-filter__title">Tipo</p>
                            <TextField name="typePet" select onChange={props.handleInputChange}>
                                {listType}
                            </TextField>
                        </div>
                    }
                </div>
                <div className="p-filter">
                    <p className="p-filter__title">Edad</p>
                    <TextField name="age" select onChange={props.handleInputChange}>
                        <MenuItem value="Cachorro">Cachorro</MenuItem>
                        <MenuItem value="Joven">Joven</MenuItem>
                        <MenuItem value="Adulto">Adulto</MenuItem>
                    </TextField>
                </div>
                <div className="p-filter">
                    <p className="p-filter__title">Sexo</p>
                    <div className="d-flex p-input-center c-input-img">

                        <input id='hembra' className="c-input-img__input" name="gender" value="hembra" onChange={props.handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='hembra' className="c-input-img__label" >                    <span className="icon-femenine-1 size" /></label>
                        <input id='macho' className="c-input-img__input" name="gender" value="macho" onChange={props.handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='macho' className="c-input-img__label" >                    <span className="icon-masculine size" /></label>

                    </div>

                </div>
                <div className="p-filter">
                    <p className="p-filter__title">Tamaño</p>
                    <div className="d-flex p-input-center c-input-img">

                        <input id="pequeño" className="c-input-img__input" name="size" value="pequeño" onChange={props.handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='pequeño' className="c-input-img__label" >
                            <span className="icon-dog size" />
                        </label>

                        <input id="mediano" className="c-input-img__input" name="size" value="mediano" onChange={props.handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='mediano' className="c-input-img__label" >
                            <span className="icon-dog size" />
                        </label>

                        <input id="grande" className="c-input-img__input" name="size" value="grande" onChange={props.handleInputChange
                        } onClick={inputSelected} type="checkbox" alt="Submit" />
                        <label htmlFor='grande' className="c-input-img__label" >
                            <span className="icon-dog size" />
                        </label>

                    </div>

                </div>
                <div className="p-filter-btn-box">
                    <button className="c-button c-button__pink" type="reset" onClick={props.clear}>Borrar filtros</button>
                    <button className="c-button c-button__pink" type="submit" onClick={props.submitFilter}>Aplicar</button>
                </div>
            </PopUp>
        </div>
    )
}
