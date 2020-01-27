import React, { useEffect } from 'react';
import './App.css';
import './Login.js'
import { useHistory } from "react-router-dom";

const App = () => {
  let history = useHistory();
  useEffect(() => {
    if(!localStorage.getItem('_TOKEN')){
      history.push('/login')
    } else {
      history.push('/muro')
    }
  }, [])
  return (
    <div className="App">
       <header className="App-header">
        Red Social
      </header>
    </div>
  )

}

export default App;
