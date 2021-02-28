import React, {useState} from "react";
import {FormControl, IconButton, Input, InputAdornment, InputLabel, TextField} from "@material-ui/core";
import {Link} from "react-router-dom";

import './LoginFormPage.scss';
import logo from "../../../../assets/img/logo@3x.png";

export function LoginFormPage() {

    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => {
        showPassword ? setShowPassword(false) : setShowPassword(true);
        console.log(showPassword);
    }

    return (
        <div className={"p-login-form"}>
            <img src={logo} alt={"Lucky"} className={"p-login-form__logo"}/>
            <p className={"s-text-style"}>¡Hola! para continuar, inicia sesión o crea una cuenta</p>
            <form>
                <FormControl className={"p-login-form__input"}>
                    <InputLabel htmlFor="email">Correo electrónico</InputLabel>
                    <Input
                        id={"email"}>
                    </Input>
                </FormControl>


                <FormControl className={"p-login-form__input"}>
                    <InputLabel htmlFor="password">Contraseña</InputLabel>
                    <Input
                        id={"password"}
                        type={showPassword ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword}>
                                </IconButton>
                            </InputAdornment>
                        }
                    />


                </FormControl>

                <Link to={"#"} className={"p-login-form__forgot"}><p className={"s-detail-1"}>¿Has olvidado tu
                    contraseña?</p></Link>
            </form>
            <button className={"c-button c-button__dark"}>Iniciar sesión</button>
            <button className={"c-button c-button__light"}>Crear cuenta</button>
        </div>
    )
}