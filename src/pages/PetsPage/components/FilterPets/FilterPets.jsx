import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './FilterPets.scss';
// import RNPickerSelect from 'react-native-picker-select';
import imgDog from '../../../../assets/img/perrop-a.svg';
import imgSnake from '../../../../assets/img/snake-a.svg';
import imgSpider from '../../../../assets/img/imgInput/spider-01.svg';
import InputImg from '../../../../shared/InputImg/InputImg';




export function FilterPets(props) {

    // const [selected, setSelected] = useState(false);


    // useEffect(() => {
    //     setSelected(true);
    //     axios
    //         .get(/**Peticion a la api */)
    //         .then(res => {
    //             /**tendríamos que hacer un filter y después metérselo a setFilter */
    //             setFilter(res.data);
    //             setSelected(false);
    //         })
    //         .catch(err => {
    //             console.log(err);
    //         })
    // }, []);

    // const { showFilter, setShowFilter } = useContext(PopUpContext);


    return (
        <div className="fig-c">
            <div>
                <h5 className="fig-c__filter-title">Filtros</h5>

            </div>
            <div>
                <p className="p-filter-title-section">Ciudad</p>

                <select class="custom-select">
                    <option value="0">Select car:</option>
                    <option value="1">Audi</option>
                    <option value="2">BMW</option>
                    <option value="3">Citroen</option>
                    <option value="4">Ford</option>
                    <option value="5">Honda</option>
                    <option value="6">Jaguar</option>
                    <option value="7">Land Rover</option>
                    <option value="8">Mercedes</option>
                    <option value="9">Mini</option>
                    <option value="10">Nissan</option>
                    <option value="11">Toyota</option>
                    <option value="12">Volvo</option>
                </select>
            </div>
            <div>
                <p className="p-filter-title-section">Especie</p>
                <div className="p-input-container">
                    <InputImg img={imgDog} label={'Perro'} />
                    <InputImg img={imgSnake} label={'Gato'} />
                    <InputImg label={'Conejo'} />
                    <InputImg label={'Cobaya'} />
                    <InputImg label={'Pequeño mamífero'} />
                    <InputImg label={'Hurón'} />
                    <InputImg label={'Pez'} />
                    <InputImg label={'Reptil'} />
                    <InputImg label={'Anfibio'} />
                    <InputImg img={imgSpider} label={'Spider'} />
                    <InputImg label={'Ave'} />
                </div>
                <select class="custom-select">
                    llamada a la api de tipo
                </select>
            </div>
            <div>
                <p className="p-filter-title-section">Edad</p>
                <select class="custom-select">
                    <option value="0">Select car:</option>
                    <option value="1">Cachorro</option>
                    <option value="2">Joven</option>
                    <option value="3">Adulto</option>
                </select>
            </div>
            <div>
                <p className="p-filter-title-section">Sexo</p>
                <div className="p-input-container">
                    <InputImg label={'Hembra'} />
                    <InputImg label={'Macho'} />
                </div>
            </div>
            <div>
                <p className="p-filter-title-section">Tamaño</p>
                <div className="p-input-container">
                    <InputImg label={'Pequeño'} />
                    <InputImg label={'Mediano'} />
                    <InputImg label={'Grande'} />
                </div>

            </div>
            <button className="c-button c-button__pink">Aplicar</button>

        </div>
    )
}