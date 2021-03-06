import React, {useState} from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import {LoginPage} from "../../pages/LoginPage/LoginPage";
import {SplashPage} from '../../pages/OnBoardingPage/SplashPage/SplashPage';
import {OnBoardingPage} from '../../pages/OnBoardingPage/OnBoardingPage';
import {AdoptionsPage} from '../../pages/AdoptionsPage/AdoptionsPage';
import {AdoptionsDeatilPage} from '../../pages/AdoptionsPage/pages/AdoptionsDetailsPage/AdoptionsDetailPage';
import PetsPage from '../../pages/PetsPage/PetsPage';
import {ProfilePage} from '../../pages/ProfilePage/ProfilePage';
import PetsDetailPage from '../../pages/PetsPage/pages/PetsDetailPage';
import {RegisterFormPage} from "../../pages/LoginPage/pages/RegisterFormPage/RegisterFormPage";

import {LoginFormPage} from "../../pages/LoginPage/pages/LoginFormPage/LoginFormPage";
import HomePage from "../../pages/HomePage/HomePage";
import HomeCard from '../../pages/HomePage/HomeCard/HomeCard';
import {AdoptionForm} from "../../pages/AdoptionsPage/components/AdoptionForm/AdoptionForm";
import {MapsPage} from "../../pages/MapsPage/MapsPage";
import Page404 from '../../shared/Page404/Page404';
import {SplashContext} from '../../pages/OnBoardingPage/SplashContext/SplashContext';
import PetsFilterPage from '../../pages/PetsPage/pages/PetsFilterPage';
import PetsFavPage from '../../pages/PetsPage/pages/PetsFavPage';

export function Routes() {

    const [isSplash, setSplash] = useState(false);

    return (
        <Switch>
            <Route path="/pets/filter">
                <PetsFilterPage/>
            </Route>
            <Route path="/pet/:id">
                <PetsDetailPage/>
            </Route>
            <Route path="/pets/fav">
                <PetsFavPage/>
            </Route>
            <Route path="/pets">
                <PetsPage/>
            </Route>
            <Route path="/profile">
                <ProfilePage/>
            </Route>
            <Route path={"/maps"}>
                <MapsPage/>
            </Route>
            <Route path="/adoption-form/:petId">
                <AdoptionForm/>
            </Route>
            <Route exact path="/adoptions/pet/:id">
                <AdoptionsDeatilPage/>
            </Route>
            <Route path="/adoptions">
                <AdoptionsPage/>
            </Route>
            <Route exact path="/boarding">
                <OnBoardingPage/>
            </Route>
            <Route path={"/login"}>
                <LoginPage/>
            </Route>
            <Route path={"/register"}>
                <RegisterFormPage/>
            </Route>
            <Route path={"/login-form"}>
                <LoginFormPage/>
            </Route>
            <Route path={"/menu"}>
                <HomeCard/>
            </Route>
            <Route exact path="/home">
                <HomePage/>
            </Route>
            <Route exact path={"/"}>
                <SplashContext.Provider value={{isSplash, setSplash}}>
                    <SplashPage/>
                    <OnBoardingPage/>
                </SplashContext.Provider>
            </Route>
            <Route path="*">
                <Page404/>
            </Route>
        </Switch>
    );
}