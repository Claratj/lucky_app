import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import { AdoptionsPage } from '../../pages/AdoptionsPage/AdoptionsPage';
import HomeCard from '../../pages/HomePage/HomeCard/HomeCard';
import { HomePage } from '../../pages/HomePage/HomePage';

import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';



export function Routes() {
    return(
        <Switch>
            <Route path="/profile">
         <ProfilePage></ProfilePage>
          </Route>
          <Route path="/adoptions">
         <AdoptionsPage></AdoptionsPage>
          </Route>
            <Route exact path="/">
                <HomePage />
            </Route>
            <Route path="/HomeCard">
                <HomeCard></HomeCard>
            </Route>
            <Route path="*">
                <h1>ERROR</h1>
            </Route>
            
        </Switch> 
    );
}