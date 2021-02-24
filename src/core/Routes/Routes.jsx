import React from 'react';
import {
    Switch,
    Route
} from "react-router-dom";
import {AdoptionsPage} from '../../pages/AdoptionsPage/AdoptionsPage';

import {ProfilePage} from '../../pages/ProfilePage/ProfilePage';
import {LoginPage} from "../../pages/LoginPage/LoginPage";

export function Routes() {
    return (
        <Switch>
            <Route path="/profile">
                <ProfilePage></ProfilePage>
            </Route>
            <Route path="/adoptions">
                <AdoptionsPage></AdoptionsPage>
            </Route>
            <Route path={"/login"}>
                <LoginPage/>
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