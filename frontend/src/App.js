import React, { useEffect } from 'react';
import './App.css';
import './Login.js'
import Login from './Login.js';
import Muro from './Muro.js';

const App = () => {
  
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
          <Login />
        }
      </header>
    </div>
  )

}

export default App;
