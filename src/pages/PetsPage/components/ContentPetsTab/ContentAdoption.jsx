import React from 'react';
import './ContentAdoption.scss';




export default function ContentAdoption() {

    return (
        <div className="p-detailAdoption">
        <div className="p-detailAdoption__require">
        <h3 className="p-detailAdoption__title">Requisitos adopción</h3>
        <p className="p-detailAdoption__person">No hay requisitos para adoptar</p>
        </div> 
        <div className="p-detailAdoption__tax">
        <h3 className="p-detailAdoption__title">Tasa de adopción</h3>  
        <p className="p-detailAdoption__itemtax">125€</p>
        </div>
        <div className="p-detailAdoption__send">
        <h3 className="p-detailAdoption__title">¿Se envía a otra ciudad?</h3>  
        <p className="p-detailAdoption__itemsend">No se envía a otra ciudad</p>
        </div>
        
        </div>
    )
}
