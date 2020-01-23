import React from 'react';
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
        this.state ={
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
