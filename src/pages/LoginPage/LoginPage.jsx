import React from "react";

import "./LoginPage.scss";
import {Link} from "react-router-dom";

export function LoginPage() {
    return(
        <div className={"p-login"}>
            <h3 className={"s-text-style-6"}>¿Cómo quieres entrar?</h3>
            <Link to={"#"} className={"p-login__button"}><button className={"c-button c-button__dark"}>Usuario</button></Link>
            <Link to={"#"} className={"p-login__button"}><button className={"c-button c-button__dark"}>Asociación protectora</button></Link>
            <Link to={"#"} className={"p-login__text"}><p className={"s-detail-1"}>Registrarse en otro momento</p></Link>
        </div>
    )
}