import React, { useContext, useEffect, useState } from 'react';
import SearchBar from '../../shared/SearchBar/SearchBar';

import './AdoptionsPage.scss';
import { AdoptionCard } from './components/AdoptionCard';
import { API } from '../../shared/consts/api.consts';
import { LoadingContext } from '../../core/Loading/contexts/LoadingContext';

let allApps = [];

export function AdoptionsPage() {
    const [search, setSearch] = useState(null);

    const {setIsLoading} = useContext(LoadingContext);

    const [applications, setApplications] = useState([
        {
            pet: {
                images:[]
            }
        }
    ]);

 
    const user = (JSON.parse(localStorage.getItem('userData')));
  
    const getApplications = () =>{
        setIsLoading(true);
        API.get('/application/user/' + user._id).then((results)=> {
            setIsLoading(false);
            allApps = results.data.results;
            setApplications(results.data.results);            
        });
    }

    const filterItem = ()=>{
        const filterApps = allApps.filter((app)=>{
            if (app.pet.name.toLowerCase().includes(search.toLowerCase())) {
                return app;
            }
        })
        setApplications(filterApps);
    }

    useEffect(getApplications, []);
    useEffect(() => {
        if (search) {
            filterItem();
        }else{
            getApplications()
        }
    }, [search]);
    
    return(
        <div className="p-adoptions">
            <SearchBar handleChange={(i)=> setSearch(i.value)}></SearchBar>
            <div className="p-adoptions__main">
            {applications.map((app, i)=>
            <AdoptionCard name={app.pet.name} city={app.pet.city} gender={app.pet.gender} img={app.pet.images[0]} status={app.status} id={app.pet._id}></AdoptionCard>
            )}
            </div>
        </div>
    );
}
