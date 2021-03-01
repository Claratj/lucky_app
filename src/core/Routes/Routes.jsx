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

export function Routes() {
    return (
        <Switch>
            <Route path="/pets/:name">
                <PetsDetailPage />
            </Route>
            <Route path="/pets">
                <PetsPage />
            </Route>
            <Route path="/profile">
                <ProfilePage />
            </Route>
            <Route path="/adoptions/:id">
                <AdoptionsDeatilPage />
            </Route>
            <Route path="/adoptions">
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
            <Route exact path="/">
                <SplashPage />
            </Route>
            <Route path="*">
                <h1>ERROR</h1>
            </Route>
        </Switch>
    );
}