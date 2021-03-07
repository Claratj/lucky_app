import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";

import { LoginPage } from "../../pages/LoginPage/LoginPage";
import { SplashPage } from '../../pages/OnBoardingPage/SplashPage/SplashPage';
import { OnBoardingPage } from '../../pages/OnBoardingPage/OnBoardingPage';
import { AdoptionsPage } from '../../pages/AdoptionsPage/AdoptionsPage';
import { AdoptionsDeatilPage } from '../../pages/AdoptionsPage/pages/AdoptionsDetailsPage/AdoptionsDetailPage';
import PetsPage from '../../pages/PetsPage/PetsPage';
import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import PetsDetailPage from '../../pages/PetsPage/pages/PetsDetailPage';
import { LoginFormPage } from "../../pages/LoginPage/pages/LoginFormPage/LoginFormPage";
import HomePage from "../../pages/HomePage/HomePage";
import HomeCard from '../../pages/HomePage/HomeCard/HomeCard';
import { AdoptionForm } from "../../pages/AdoptionsPage/components/AdoptionForm/AdoptionForm";
import {FilterPets} from '../../pages/PetsPage/components/FilterPets/FilterPets';
import {MapsPage} from "../../pages/MapsPage/MapsPage";
import Page404 from '../../shared/Page404/Page404';

export function Routes() {
    return (
        <Switch>
            <Route path="/pet/filter">
                <FilterPets />
            </Route>
            <Route path="/pet/:id">
                <PetsDetailPage />
            </Route>
            <Route path="/pets">
                <PetsPage />
            </Route>
            <Route path="/profile">
                <ProfilePage />
            </Route>
            <Route path={"/maps"}>
                <MapsPage/>
            </Route>
            <Route path="/adoption-form/:petId">
                <AdoptionForm />
            </Route>
            <Route path="/adoptions/pet/:id">
                <AdoptionsDeatilPage />
            </Route>
            <Route path="/adoptions/:userId">
                <AdoptionsPage />
            </Route>
            <Route exact path="/boarding">
                <OnBoardingPage />
            </Route>
            <Route path={"/login"}>
                <LoginPage />
            </Route>
            <Route path={"/login-form"}>
                <LoginFormPage />
            </Route>
            <Route exact path={"/"}>
                <SplashPage />
            </Route>
            <Route path={"/menu"}>
                <HomeCard></HomeCard>
            </Route>
            <Route path="/home">
                <HomePage />
            </Route>
            <Route path="*">
                <Page404></Page404>
            </Route>
        </Switch>
    );
}