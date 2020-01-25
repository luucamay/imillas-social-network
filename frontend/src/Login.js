import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    const setEmail = (newValue) => {
        setUser({
            email: newValue,
            ...user
        })
    }

    const setPassword = (newValue) => {
        setUser({
            password: newValue,
            ...user
        })
    }

    const login = () => {
        let apiBaseUrl = "http://localhost:8080";
        axios.post(apiBaseUrl + '/login', user)
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    console.log("Login successfull");
                    localStorage.setItem('_TOKEN', response.data.token)
                    localStorage.setItem('username', response.data.username)
                    // redirect to social media page! Or load social media page!!!
                }
                else if (response.status === 204) {
                    console.log("El usuario y la contrasenia no coinciden");
                    alert("El usuario y la contrasenia no coinciden") // change this
                }
                else {
                    console.log("El usuario no existe");
                    alert("El usuario no existe"); // change this
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <form onSubmit={login}>
            <h1>Login</h1>
            <input type="text" username="username" placeholder="enter you username" /><br />
            <input type="password" password="password" placeholder="enter password" /><br />

            <input type="submit" value="Login" />
        </form>
    );
}

export default Login;
