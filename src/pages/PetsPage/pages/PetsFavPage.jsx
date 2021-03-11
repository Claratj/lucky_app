import React, { useEffect, useState } from 'react'
import Footer from '../../../core/Footer/Footer';
import { API } from '../../../shared/consts/api.consts';
import './PetsFavPage.scss';
import fav from '../../../assets/img/favoritos@3x.png';
export default function PetsFavPage() {

    let user = JSON.parse(localStorage.getItem('userData'));
 
    const [favs, setFavs] = useState([{petId: {images:[]}}]);
    
    const getFavs = ()=>{
        API.get('fav/list/'+user._id).then((res)=>{
               setFavs(res.data.Favs)
        });

        
       
    }
    
    useEffect(getFavs, []);

    return (
        <div className="c-favsPets">
        <img className="c-favsPets__imgFav" src={fav} alt=""/>
        <h2 className="c-favsPets__title"><span className="c-favsPets__subtitle">{user.name}</span>, estas son tus mascotas favoritas</h2>
        {favs.map((item, i)=>
       
            <div className="c-favsPets__card">
            <div className="c-favsPets__img">
                <img src={item.petId.images[0]} className="c-favsPets__pet"></img>
            </div> 
            <div className="c-favsPets__text">
            <div className="c-favsPets__name">
                <h3>{item.petId.name}</h3>
            </div>
            <div className="c-favsPets__location">
                <p>{item.petId.city}</p>
                <p>{item.petId.km}</p>
            </div>
            </div>
       
            </div>
       

        )}
            <Footer></Footer>
        </div>
        
    )
}
