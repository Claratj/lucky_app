import React from 'react';
import {
  Switch,
  Route
} from "react-router-dom";
import { AdoptionsPage } from '../../pages/AdoptionsPage/AdoptionsPage';
<<<<<<< HEAD:src/core/Routes/Routes.jsx
import PetsPage from '../../pages/PetsPage/PetsPage';
=======
import { AdoptionsDeatilPage } from '../../pages/AdoptionsPage/pages/AdoptionsDetailPage';
>>>>>>> b0fdf7c05592e9034152901f9ee36ba977cf66e8:src/core/routes/Routes.jsx

import { ProfilePage } from '../../pages/ProfilePage/ProfilePage';

export function Routes() {
    return(
        <Switch>
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
            {/* <Route exact path="/">
                <HomePage />
            </Route> */}
            <Route path="*">
                <h1>ERROR</h1>
            </Route>
        </Switch> 
    );
}