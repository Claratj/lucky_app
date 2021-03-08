import React, { useState } from 'react';

// export function Filter(initialFilterValues) {

//     const [values, setValues] = useState(initialFilterValues);

//     const handleInputChange = (e) => {
//         const { name, value } = e.target;
//         setValues({
//             ...values,
//             [name]: value,

//         });
//         // console.log(values);
//     }


//     return {
//         values,
//         setValues,
//         handleInputChange
//     }
// }

// export class FilterObject extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             species: props.species,
//             gender: props.gender
//         }
//     }
// }



export function FilterForm(props) {


    return (
        <form action="">
            {props.children}
        </form>
    )
}
