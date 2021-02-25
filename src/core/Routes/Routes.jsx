import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import { SplashPage } from '../../pages/OnBoardingPage/SplashPage/SplashPage';
import { OnBoardingPage } from '../../pages/OnBoardingPage/OnBoardingPage';
import { AdoptionsPage } from '../../pages/AdoptionsPage/AdoptionsPage';
import PetsPage from '../../pages/PetsPage/PetsPage';
import { AdoptionsDeatilPage } from '../../pages/AdoptionsPage/pages/AdoptionsDetailPage';

import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';
import PetsDetailPage from '../../pages/PetsPage/pages/PetsDetailPage';

export function Routes() {
    return (
        <Switch>
        <Route path="/pets/:name">
         <PetsDetailPage></PetsDetailPage>
          </Route>
            <Route path="/pets">
                <PetsPage></PetsPage>
            </Route>
            <Route path="/profile">
                <ProfilePage></ProfilePage>
            </Route>
            <Route path="/adoptions/:id">
                <AdoptionsDeatilPage></AdoptionsDeatilPage>
            </Route>
            <Route path="/adoptions">
                <AdoptionsPage></AdoptionsPage>
            </Route>
            <Route exact path="/boarding">
                <OnBoardingPage />
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