import React, { useEffect, useState } from 'react';
import SearchBar from '../../shared/SearchBar/SearchBar';

import './AdoptionsPage.scss';
import { AdoptionCard } from './components/AdoptionCard';
import { API } from '../../shared/consts/api.consts';
import { useParams } from 'react-router-dom';

export function AdoptionsPage() {

    // aquí llamamos a la api de application y le pasamos el id del user, que recogemos por params de la ruta o del contexto al estar el usuario logeado
    // lo dejo así por ahora

    const [applications, setApplications] = useState([]);

    const param = useParams();
    const userId = param.userId;  
  
    const getApplications = () =>{
        API.get('/application/user/' + userId).then((results)=> {
        setApplications(results.data.results);
        console.log(results.data.results);
        });
    }

    useEffect(getApplications, []);
    
    return(
        <div className="p-adoptions">
            <SearchBar></SearchBar>
            <div className="p-adoptions__main">
            {applications.map((app, i)=>
            <AdoptionCard name={app.pet.name} city={app.pet.city} gender={app.pet.gender} img={app.pet.image} status={app.status} id={app.pet._id}></AdoptionCard>
            )}
            </div>
        </div>
    );
}
