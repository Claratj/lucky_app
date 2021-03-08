import React, {useState} from "react";
import {FormControl, IconButton, Input, InputAdornment, InputLabel, TextField} from "@material-ui/core";
import {Link, Redirect} from "react-router-dom";
import { API } from '../../../../shared/consts/api.consts';

import './LoginFormPage.scss';
import logo from "../../../../assets/img/logo@3x.png";

export function LoginFormPage() {


    const [showPassword, setShowPassword] = useState(false);
    const [formValues, setFormValues] = useState({
        'email': '',
        'password': '',
    });
 
    const handleClickShowPassword = () => {
        showPassword ? setShowPassword(false) : setShowPassword(true);
        console.log(showPassword);
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        API.post('login', formValues).then((res)=>{
            console.log(res);
            localStorage.setItem('userData', JSON.stringify(res.data.userData));
            localStorage.setItem('token', res.data.token);
            let user = localStorage.getItem('userData');
    
            if(user){
                window.location.href = "/home";

            }

        });
    }
    let userToken = localStorage.getItem('token');
 

    return (
        <div className={"p-login-form"}>

        {userToken && 
            <Redirect to="/home"/>

        }
            <img src={logo} alt={"Lucky"} className={"p-login-form__logo"}/>
            <p className={"s-text-style"}>¡Hola! para continuar, inicia sesión o crea una cuenta</p>
            <form onSubmit={handleSubmit}>
                <FormControl className={"p-login-form__input"}>
                    <InputLabel htmlFor="email">Correo electrónico</InputLabel>
                    <Input
                        id={"email"}
                        name={"email"}
                        onChange={handleChange}>
                    </Input>
                </FormControl>


                <FormControl className={"p-login-form__input"}>
                    <InputLabel htmlFor="password">Contraseña</InputLabel>
                    <Input
                        id={"password"}
                        name={"password"}
                        onChange={handleChange}
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
            
            <button type="submit" className={"c-button c-button__dark"}>Iniciar sesión</button>
         
            </form>
            <Link to="/register">
                <button className={"c-button c-button__light"}>Crear cuenta</button>
            </Link>


      

        </div>
    )
}