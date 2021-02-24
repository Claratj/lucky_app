import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";

import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';

export function Routes() {
    return(
        <Switch>
            <Route path="/profile">
         <ProfilePage></ProfilePage>
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