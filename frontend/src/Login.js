import React from 'react';
import axios from 'axios'
class TextField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
            type: ''
        }
    }
    render() {
        return (
            <div>
                <input></input>
            </div>
        )
    }
}
class Button extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                <button>Login</button>
            </div>
        )
    }
}
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
        var apiBaseUrl = "http://localhost:4000/api/";
        var self = this;
        var payload = {
            "email": this.state.username,
            "password": this.state.password
        }
        axios.post(apiBaseUrl + 'login', payload)
            .then(function (response) {
                console.log(response);
                if (response.data.code == 200) {
                    console.log("Login successfull");
                    
                }
                else if (response.data.code == 204) {
                    console.log("Username password do not match");
                    alert("username password do not match")
                }
                else {
                    console.log("Username does not exists");
                    alert("Username does not exist");
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (
            <div>
                <h1>Login</h1>
                <TextField
                    onChange={(event, newValue) => this.setState({ username: newValue })}
                />
                <br />
                <TextField
                    type="password"
                    onChange={(event, newValue) => this.setState({ password: newValue })}
                />
                <br />
                <Button label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)} />
            </div>
        );
    }
}
const style = {
    margin: 15,
};
export default Login;
