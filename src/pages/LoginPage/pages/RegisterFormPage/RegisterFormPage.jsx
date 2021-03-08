import React, {useState} from "react";
import {FormControl, IconButton, Input, InputAdornment, InputLabel, TextField} from "@material-ui/core";
import {Link, Redirect} from "react-router-dom";
import { API } from '../../../../shared/consts/api.consts';

import './RegisterFormPage.scss';
import logo from "../../../../assets/img/logo@3x.png";

export function RegisterFormPage() {


    const [showPassword, setShowPassword] = useState(false);

    const [showPassword2, setShowPassword2] = useState(false);
    const [formValues, setFormValues] = useState({
        'email': '',
        'password': '',
    });
 
    const handleClickShowPassword = () => {
        showPassword ? setShowPassword(false) : setShowPassword(true);
     
    }
    const handleClickShowPassword2 = () => {
        showPassword ? setShowPassword2(false) : setShowPassword2(true);
     
    }

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormValues({...formValues, [name]: value});
    }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        //console.log(formValues.email);
        
  
        if(formValues.password == formValues.password2){
            console.log("pass iguales");

            API.post('register', formValues).then((res)=>{
                if(res.data.saved){
                    window.location.href = "/login-form";
                }else if (res.data.error){
                    console.log("Email ya registrado");
                }

            });

      }


    }
    let userToken = localStorage.getItem('token');
 

    return (
        <div className={"p-login-form"}>

        {userToken && 
            <Redirect to="/home"/>

        };
            <img src={logo} alt={"Lucky"} className={"p-login-form__logo"}/>
            <p className={"s-text-style"}>Registrar usuario </p>
            <form onSubmit={handleSubmit}>
                <FormControl className={"p-login-form__input"}>
                    <InputLabel htmlFor="Nombre">Nombre</InputLabel>
                    <Input
                        id={"name"}
                        name={"name"}
                        onChange={handleChange}>
                    </Input>
                </FormControl>

                <FormControl className={"p-login-form__input"}>
                    <InputLabel htmlFor="Apellidos">Apellidos</InputLabel>
                    <Input
                        id={"lastname"}
                        name={"lastname"}
                        onChange={handleChange}>
                    </Input>
                </FormControl>

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
                <FormControl className={"p-login-form__input"}>
                    <InputLabel htmlFor="password">Repita Contraseña</InputLabel>
                    <Input
                        id={"password2"}
                        name={"password2"}
                        onChange={handleChange}
                        type={showPassword2 ? 'text' : 'password'}
                        endAdornment={
                            <InputAdornment position="end">
                                <IconButton
                                    onClick={handleClickShowPassword2}>
                                </IconButton>
                            </InputAdornment>
                        }
                    />


                </FormControl>

              <div> &nbsp;</div>
            
            <button type="submit" className={"c-button c-button__dark"}>Registrarse</button>
         
            </form>



      

        </div>
    )
}