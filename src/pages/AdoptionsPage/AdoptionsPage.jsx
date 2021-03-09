import React, { useContext, useEffect, useState } from 'react';

import SearchBar from '../../shared/SearchBar/SearchBar';
import { AdoptionCard } from './components/AdoptionCard';
import { PopUpFilter } from './components/PopUpFilter/PopUpFilter';

import { LoadingContext } from '../../core/Loading/contexts/LoadingContext';
import { PopUpContext } from '../../shared/Context/PopUpContext';

import { API } from '../../shared/consts/api.consts';

import './AdoptionsPage.scss';

let allApps = [];

export function AdoptionsPage() {
    const [search, setSearch] = useState(null);
    const [pop, setPop] = useState(false);
    const [filter, setFilter] = useState({});
    const [applications, setApplications] = useState([
        {
            pet: {
                images:[]
            }
        }
    ]);

    const {setIsLoading} = useContext(LoadingContext);

    const user = (JSON.parse(localStorage.getItem('userData')));

    const newFilter = (e) => {
        const value = e.target.value;
        setFilter({
            ...filter,
            'filter': value});
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
                input.disabled = true;
        });
    }

    const click = () => {
        setPop(true);
    }

    const close = () => {
        setPop(false);
    }
  
    const getApplications = () =>{
        setIsLoading(true);
        API.get('/application/user/' + user._id).then((results)=> {
            setIsLoading(false);
            allApps = results.data.results;
            setApplications(results.data.results);            
        });
    }

    const searchItem = ()=>{
        const filterApps = allApps.filter((app)=>{
            if (app.pet.name.toLowerCase().includes(search.toLowerCase())) {
                return app;
            }
        })
        setApplications(filterApps);
    }

    const submitFilter = () => {
        if(filter !== null) {
                    const filterApps = allApps.filter((app)=>{
            if (app.status === filter.filter) {
                return app;
            }
        })
            setApplications(filterApps); 
        }
        close();  
    }
    
    const clearFilter = () => {
        const inputs = document.querySelectorAll('input')
        inputs.forEach(input => {
            input.disabled = false;
            input.checked = false;
        });
        setApplications(allApps);
        setFilter(null);
    }

    useEffect(getApplications, []);
    useEffect(() => {
        if (search) {
            searchItem();
        }else{
            getApplications()
        }
    }, [search]);
    
    return(
        <PopUpContext.Provider value={{pop, setPop}}>
        <div className="p-adoptions">
            <SearchBar handleChange={(i)=> setSearch(i.value)} click={click}></SearchBar>
            <div className="p-adoptions__main">
            {applications.map((app, i)=>
            <AdoptionCard name={app.pet.name} city={app.pet.city} gender={app.pet.gender} img={app.pet.images[0]} status={app.status} id={app.pet._id}></AdoptionCard>
            )}
            </div>
                <PopUpFilter onClose={close} show={pop} filter={newFilter} submit={submitFilter} clear={clearFilter}></PopUpFilter>
        </div>
        </PopUpContext.Provider>
    );
}
