import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import { AdoptionsPage } from '../../pages/AdoptionsPage/AdoptionsPage';
import { AdoptionsDeatilPage } from '../../pages/AdoptionsPage/pages/AdoptionsDetailPage';

import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';

export function Routes() {
    return(
        <Switch>
            <Route path="/profile">
         <ProfilePage></ProfilePage>
          </Route>
          <Route path="/adoptions/:id">
         <AdoptionsDeatilPage></AdoptionsDeatilPage>
          </Route>
          <Route path="/adoptions">
         <AdoptionsPage></AdoptionsPage>
          </Route>
            {/* <Route exact path="/">
                <HomePage />
            </Route> */}
            <Route path="*">
                <h1>ERROR</h1>
            </Route>
        </Switch> 
    );
}