import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import favIcon from '../../../../assets/img/favoritos.png';
import { API } from '../../../../shared/consts/api.consts';
import './PetsGallery.scss';

export default function PetsGallery() {
    const [pets, setPets] = useState([]);

    const getPets = ()=>{
        API.get('/pet').then((res)=>{
            setPets(res.data.results)
        })
    }

    useEffect(getPets, []);


    
    return (
        <div className="c-galleryPets">
        {pets.map((item, i)=>
        <Link to={"/pets/" + item._id} className="c-galleryPets__link">
            <div className="c-galleryPets__card" key={i}>
            <div className="c-galleryPets__img">
                <img src={item.images[0]} className="c-galleryPets__pet"></img>
                <img src={favIcon} className="c-galleryPets__fav"></img>
            </div>
            <div className="c-galleryPets__text">
            <div className="c-galleryPets__name">
                <h3>{item.name}</h3>
            </div>
            <div className="c-galleryPets__location">
                <p>{item.city}</p>
                <p>{item.km}</p>
            </div>
            </div>
            </div>
        </Link>

        )}
            
        </div>
    )
}
