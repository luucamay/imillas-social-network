import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const Login = () => {
    let history = useHistory();
    const initialFormState = { email:'', password: '' }
    const [user, setUser] = useState(initialFormState);
    
    const handleInputChange = event => {
        const { name, value } = event.target
    
        setUser({ ...user, [name]: value })
    }
    

    const login = (event) => {
        event.preventDefault()
        if (!user.email || !user.password){
            console.log('email or password cant be empty')
            return
        }
        let apiBaseUrl = 'http://localhost:8080';
        axios.post(apiBaseUrl + '/login', user) 
            .then(function (response) {
                console.log(response);
                
                if (response.status === 200) {
                    console.log('Consulta exitosa');
                    if (response.data.token){
                        localStorage.setItem('_TOKEN', response.data.token)
                        localStorage.setItem('username', response.data.username)
                        history.push('/muro')
                    }
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
            <header className="App-header">
                <form
                    onSubmit={login}
                >
                    <label>Email</label><br />
                    <input type="email" name="email" value={user.email} onChange={handleInputChange} /><br />
                    <label>Password</label><br />
                    <input type="password" name="password" value={user.password} onChange={handleInputChange} /><br />
                    <button>Login</button>
                </form>
            </header>
        </div>
    );
}

export default Login;
