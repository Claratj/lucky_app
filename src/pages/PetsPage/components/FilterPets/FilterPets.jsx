import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import './FilterPets.scss';
// import RNPickerSelect from 'react-native-picker-select';




export function FilterPets() {

    const [filter, setFilter] = useState([]);
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

    // const { showFilter, setShowFilter } = useContext(PopUpContext);


    return (
        <div className="fig-c">
            <div>
                <h5 className="fig-c__filter-title">Filtros</h5>
            </div>
            <div>
                <label>Ciudad</label>

                {/* <select multiple name="drawfs" id="drawfs">
                    <option>Gruñón</option>
                    <option>Feliz</option>
                    <option>Dormilón</option>
                    <option>Tímido</option>
                    <option>Estornudo</option>
                    <option>Tontín</option>
                    <option>Doc</option>
                </select> */}
            </div>
            <div>
                <label>Especie</label>
                <div>
                    <input type="image" src="submit.gif" alt="Submit" style="float:right" width="48" height="48" />
                    <input type="image" src="submit.gif" alt="Submit" style="float:right" width="48" height="48" />
                    <input type="image" src="submit.gif" alt="Submit" style="float:right" width="48" height="48" />
                    <input type="image" src="submit.gif" alt="Submit" style="float:right" width="48" height="48" />
                    <input type="image" src="submit.gif" alt="Submit" style="float:right" width="48" height="48" />
                </div>
            </div>
            <div>
                Aquí iría como ciudad pero de edad
            </div>
            <div>
                Aquí iría despliegue botones -sexo
            </div>
            <div>
                Aquí iría despliegue botones -tamaño
            </div>
            <button className="c-button c-button__pink">Aplicar</button>

        </div>
    )
}