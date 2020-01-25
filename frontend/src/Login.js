import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    let history = useHistory();
    const [user, setUser] = useState({
        email: 'lupe@gmail.com',
        password: 'thisisapass'
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
        let apiBaseUrl = 'http://localhost:8080';
        axios.post(apiBaseUrl + '/login', user)
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    console.log('Login successfull');
                    localStorage.setItem('_TOKEN', response.data.token)
                    localStorage.setItem('username', response.data.username)
                    history.push('/muro')
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
        <div className="App">
            <h2>Email:</h2>
            <input value={user.email} onChange={e=> setEmail(e.target.value)} type="text" /><br />
            <h2>Password:</h2>
            <input value={user.password} type="password" onChange={e=> setPassword(e.target.value)} /><br />
            <input type="button" onClick={login} value="Login" />
        </div>
    );
}

export default Login;
