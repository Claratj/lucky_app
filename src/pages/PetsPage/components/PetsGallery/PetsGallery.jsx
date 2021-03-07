import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import favIcon from '../../../../assets/img/favoritos.png';
import { LoadingContext } from '../../../../core/Loading/contexts/LoadingContext';
import { API } from '../../../../shared/consts/api.consts';
import './PetsGallery.scss';

export default function PetsGallery() {
    const [pets, setPets] = useState([]);

    const {setIsLoading} = useContext(LoadingContext);

    const getPets = ()=>{
        setIsLoading(true);
        API.get('/pet').then((res)=>{
            setIsLoading(false);
            setPets(res.data.results)
        })
    }

    useEffect(getPets, []);


    
    return (
        <div className="c-galleryPets">
        {pets.map((item, i)=>
        <Link to={"/pet/" + item._id} className="c-galleryPets__link" key={i}>
            <div className="c-galleryPets__card">
            <div className="c-galleryPets__img">
                <img src={item.images} className="c-galleryPets__pet"></img>
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
