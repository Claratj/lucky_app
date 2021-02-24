import React from 'react';
import { NavLink } from 'react-router-dom';

import './Menu.scss';

export function Menu(){
    return(
        <nav>
            <NavLink to="/">HOME</NavLink>
            <NavLink to='/profile'>PROFILE</NavLink>
            {/* <NavLink to=""></NavLink>
            <NavLink to=""></NavLink> */}
        </nav>
    );
}