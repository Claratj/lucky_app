import React from 'react'
import { Link } from 'react-router-dom';
import image from '../../../../assets/img/chinchilla.jpg';
import favIcon from '../../../../assets/img/favoritos.png';
import './PetsGallery.scss';

export default function PetsGallery() {

    const pets = [
        {name: 'Kiwi', img: image, location: 'Madrid', km: '1.3km', like: false},
        {name: 'Blue', img: image, location: 'Madrid', km: '1.5km', like: false},
        {name: 'Charlie', img: image, location: 'Madrid', km: '13km', like: false},
        
    ];
    return (
        <div className="c-galleryPets">
        {pets.map((item, i)=>
        <Link to={"/pets/" + item.name} className="c-galleryPets__link">
            <div className="c-galleryPets__card" key={i}>
            <div className="c-galleryPets__img">
                <img src={item.img} className="c-galleryPets__pet"></img>
                <img src={favIcon} className="c-galleryPets__fav"></img>
            </div>
            <div className="c-galleryPets__text">
            <div className="c-galleryPets__name">
                <h3>{item.name}</h3>
            </div>
            <div className="c-galleryPets__location">
                <p>{item.location}</p>
                <p>{item.km}</p>
            </div>
            </div>
            </div>
        </Link>

        )}
            
        </div>
    )
}
