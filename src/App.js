import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Login</h1>
        <h2>Email:</h2>
        <input></input>
        <h2>Password:</h2>
        <input></input>
        <hr /> {/*remove this and customize css of the button*/}
        <button>Login</button>
      </header>
    </div>
  );
}

export default App;
