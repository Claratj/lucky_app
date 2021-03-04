import React, { useEffect, useState } from 'react';
import './FilterPets.scss';
import { ReactComponent as Dog } from '../../../../assets/img/icons-fixed/svg/dog.svg';
// import { ReactComponent as Spider } from '../../../../assets/img/imgInput/spider-01.svg';

// import imgSnake from '../../../../assets/img/snake-a.svg';
// import imgSpider from '../../../../assets/img/imgInput/spider-01.svg';
import InputImg from '../../../../shared/InputImg/InputImg';




export function FilterPets(props) {

    const [selected, setSelected] = useState(false);


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




    const deleteFilters = () => {


    }

    const aplyFilters = () => {
        setSelected(true);
    }



    return (
        <div className="fig-c">
            <div>
                <h5 className="fig-c__filter-title">Filtros</h5>

            </div>
            <div className="p-filter">
                <p className="p-filter__title">Ciudad</p>
                <select class="p-filter__select">
                    <option value="1">Madrid</option>
                    <option value="2">Barcelona</option>
                    <option value="3">Valencia</option>
                    <option value="4">Sevilla</option>
                    <option value="5">Zaragoza</option>
                    <option value="6">Málaga</option>
                    <option value="7">Murcia</option>
                    <option value="8">Palma</option>
                    <option value="9">Gran Canaria</option>
                    <option value="10">Bilbao</option>
                    <option value="11">Alicante</option>
                    <option value="12">Córdoba</option>
                    <option value="13">Valladolid</option>
                    <option value="14">Vitoria</option>
                    <option value="15">La Coruña</option>
                    <option value="16">Granada</option>
                    <option value="17">Oviedo</option>
                </select>
            </div>
            <div className="p-filter-especie">
                <p className="p-filter__title">Especie</p>
                <div className="p-input-wrap">
                    <InputImg label={'Perro'} >
                        <Dog />
                    </InputImg>
                    {/* <InputImg img={imgSnake} label={'Gato'} /> */}
                    <InputImg label={'Conejo'} />
                    <InputImg label={'Cobaya'} />
                    <InputImg label={'Pequeño mamífero'} />
                    <InputImg label={'Hurón'} />
                    <InputImg label={'Pez'} />
                    <InputImg label={'Reptil'} />
                    <InputImg label={'Anfibio'} />
                    {/* <InputImg label={'Spider'} >
                        <Spider />
                    </InputImg> */}
                    <InputImg label={'Ave'} />
                </div>
                <div className="p-filter">
                    <p className="p-filter__title">Tipo</p>
                    <select class="p-filter__select">
                        <option value="1">Golden</option>
                        <option value="2">Podenco</option>
                        <option value="3">Pastor Belga</option>
                    </select>
                </div>
            </div>
            <div className="p-filter">
                <p className="p-filter__title">Edad</p>
                <select class="p-filter__select">
                    <option value="1">Cachorro</option>
                    <option value="2">Joven</option>
                    <option value="3">Adulto</option>
                </select>
            </div>
            <div className="p-filter">
                <p className="p-filter__title">Sexo</p>
                <div className="d-flex p-input-center">
                    <InputImg label={'Hembra'} />
                    <InputImg label={'Macho'} />
                </div>
            </div>
            <div className="p-filter">
                <p className="p-filter__title">Tamaño</p>
                <div className="d-flex p-input-center">
                    <InputImg label={'Pequeño'} />
                    <InputImg label={'Mediano'} />
                    <InputImg label={'Grande'} />
                </div>

            </div>
            <div className="p-filter-btn-box">
                <button className="c-button c-button__pink-border" onClick={deleteFilters}>Borrar filtros</button>
                <button className="c-button c-button__pink" onClick={aplyFilters}>Aplicar</button>
            </div>

        </div>
    )
}