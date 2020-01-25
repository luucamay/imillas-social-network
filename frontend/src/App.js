import React, { useState, useEffect } from 'react';
import './App.css';
import './Login.js'
import Login from './Login.js';
import Muro from './Muro.js';

const App = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    if(!localStorage.getItem('_TOKEN')){
      // redirect to login
    } else {
      // redirect to muro
    }
  }, [])
  return (
    <div className="App">
       <header className="App-header">
        {
          <p>Red Social</p>
        }
      </header>
    </div>
  )

}

export default App;
