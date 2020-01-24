import React from 'react';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleClick = this.handleClick.bind(this)
    }
    
    handleClick(event) {
        let apiBaseUrl = "http://localhost:8080/users/";
        // carga util, osea datos que vamos a enviar
        let payload = {
            "email": this.state.username,
            "password": this.state.password
        }
        //axios.post(apiBaseUrl + 'login', payload)
        axios.get(apiBaseUrl)
            .then(function (response) {
                console.log(response);
                if (response.data.code === 200) {
                    console.log("Login successfull");
                    // redirect to social media page! Or load social media page!!!
                }
                else if (response.data.code === 204) {
                    console.log("Username password do not match");
                    alert("username password do not match") // change this
                }
                else {
                    console.log("Username does not exists");
                    alert("Username does not exist"); // change this
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <form onSubmit={this.handleClick}>
                <h1>Login</h1>
                <input type="text" ref="username" placeholder="enter you username" /><br />
                <input type="password" ref="password" placeholder="enter password" /><br />
                <input type="submit" value="Login" />
            </form>
        );
    }
}

export default Login;
