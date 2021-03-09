import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import favIcon from '../../../../assets/img/favoritos.png';
import { LoadingContext } from '../../../../core/Loading/contexts/LoadingContext';
import { API } from '../../../../shared/consts/api.consts';
import './PetsGallery.scss';

export default function PetsGallery(props) {
function addfav(idPet) {
    let user = JSON.parse(localStorage.getItem('userData'));
   
   let valuesFav = {
        userId: user._id,
        petId: idPet,

    }

   
   API.post('fav/list', valuesFav).then((res)=>{ //buscamos si ya existe el favorito en la bd

    if(res.data[0]){ //si existe se elimina
       
        API.get('fav/remove/'+res.data[0]._id).then((res)=>{
            console.log("eliminado favorito");

        });
    }else{ //sino se agrega

        API.post('fav/add', valuesFav).then((res)=>{
            console.log("agregado a favorito");

        });
    }



    });

 /* API.post('fav/add', valuesFav).then((res)=>{

    

    });*/
}
    
    return (
        <div className="c-galleryPets">
        {props.pets.map((item, i)=>
       
            <div className="c-galleryPets__card">
            <div className="c-galleryPets__img">
                <img src={item.images} className="c-galleryPets__pet"></img>
                <img src={favIcon}  onClick={() => addfav(item._id)} className="c-galleryPets__fav"></img>
            </div> 
            
        <Link to={"/pet/" + item._id} className="c-galleryPets__link" key={i}>
            <div className="c-galleryPets__text">
            <div className="c-galleryPets__name">
                <h3>{item.name}</h3>
            </div>
            <div className="c-galleryPets__location">
                <p>{item.city}</p>
                <p>{item.km}</p>
            </div>
            </div>
            </Link>
            </div>
       

        )}
            
        </div>
    )
}
