import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import sha1 from 'sha1';

const Login = () => {
    let history = useHistory();
    const initialFormState = { email: '', password: '' }
    const [user, setUser] = useState(initialFormState);
    const [errorEmail, setErrorEmail] = useState('');
    const [errorPassword, setErrorPassword] = useState('');

    const handleInputChange = event => {
        const { name, value } = event.target
        setUser({ ...user, [name]: value })
    }

    const validateEmail = (value) => {
        let error = '';
            if (value === '') {
                error = 'El campo de usuario no puede estar vacio';
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                error = 'Introduzca un correo valido';
            }
        return error;
    };

    const validatePassword = (value) => {
        let error = '';
            if (value === '') {
                error = 'El campo de password no puede estar vacio';
            } 
        return error;
    };

    const onBlurEmail = (event) => {
        setErrorEmail(validateEmail(event.target.value));
    }
    const onBlurPassword = (event) => {
        setErrorPassword(validatePassword(event.target.value));
    }

    const login = (event) => {
        event.preventDefault()
        if (errorEmail !== '' || errorPassword !== ''){
            return
        }
        const encrypted_pass = sha1(user.password);
        let userObject = user;
        userObject.password = encrypted_pass;
        let apiBaseUrl = 'http://64.225.127.76';
        debugger
        axios.post(apiBaseUrl + '/users/login', userObject)
            .then(function (response) {
                console.log(response);

                if (response.status === 200) {
                    console.log('Consulta exitosa');
                    if (response.data.token) {
                        localStorage.setItem('_TOKEN', response.data.token)
                        localStorage.setItem('username', response.data.username)
                        localStorage.setItem('user_id', response.data.id)
                        history.push('/muro')
                    } else {
                        alert(response.data)
                    }
                }
                else {
                    console.log(response.status);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="App">
            <header className="App-header">
                <form
                    onSubmit={login}
                >
                    <label>Email</label><br />
                    <input type="email" name="email" value={user.email} onChange={handleInputChange} onBlur={onBlurEmail}/><br />
                    {errorEmail && <div style={errorStyle}>{errorEmail}</div>}
                    <label>Password</label><br />
                    <input type="password" name="password" value={user.password} onChange={handleInputChange} onBlur={onBlurPassword}/><br />
                    {errorPassword && <div style={errorStyle}>{errorPassword}</div>}
                    <button>Login</button>
                </form>
            </header>
        </div>
    );
}
const errorStyle = {
    color: "red",
    fontSize: 11
}
export default Login;
