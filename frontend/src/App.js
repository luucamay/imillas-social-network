import React from 'react';
import './App.css';
import './Login.js'
import Login from './Login.js';
import Muro from './Login.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null
    }
  }
  logIn(username, password) {
    // This is where you would call Firebase, an API etc...
    // calling setState will re-render the entire app (efficiently!)
    this.setState({
      user: {
        username,
        password,
      }
    })
  }

  logOut() {
    this.setState({ user: null })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {
            (this.state.user) ?
              <Muro
                user={this.state.user}
                onSignOut={this.signOut}
              />
              :
              <Login
                onSignIn={this.signIn}
              />
          }
        </header>
      </div>
    )
  }
}

export default App;
