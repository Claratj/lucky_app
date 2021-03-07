import React, { useState } from 'react';

export function Filter(initialFilterValues) {

    const [values, setValues] = useState(initialFilterValues);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setValues({
            ...values,
            [name]: value,

        });
        console.log(values);
    }


    return {
        values,
        setValues,
        handleInputChange
    }
}



export default function FilterForm() {


    return (
        <form action="">

            <div className="p-filter-btn-box">
                <button className="c-button c-button__pink" type="reset">Borrar filtros</button>
                <button className="c-button c-button__pink" typye="submit">Aplicar</button>
            </div>

        </form>
    )
}
