import React from 'react'
import image from '../../../assets/img/chinchilla.jpg';


export default function PetsGallery() {

    const cards = [
        {name: 'Kiwi', img: image, location: 'Madrid', km: '1.3km', like: false},
        {name: 'Blue', img: image, location: 'Madrid', km: '1.5km', like: false},
        {name: 'Charlie', img: image, location: 'Madrid', km: '13km', like: false},
        
    ];
    return (
        <div className="c-galleryPets">
        {cards.map((item, i)=>
            <div className="c-galleryPets__card" key={i}>
            <div className="c-galleryPets__img">
                <img src={item.img}></img>
            </div>
            <div className="c-galleryPets__name">
                <h3>{item.name}</h3>
            </div>
            <div className="c-galleryPets__location">
                <p>{item.location}</p>
                <p>{item.km}</p>
            </div>
            </div>
        )}
            
        </div>
    )
}
