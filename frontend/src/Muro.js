import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Publicacion from './Publicacion.js';
import NuevaPublicacion from './NuevaPublicacion.js';

const Muro = () => {
  let history = useHistory();
  let apiBaseUrl = 'http://64.225.127.76/api';
  useEffect(() => {
    if (!localStorage.getItem('_TOKEN')) {
      history.push('/login')
    }
  }, []);

  const [publicaciones, setPublicaciones] = useState([])

  useEffect(() => {
    getPublicaciones()
  }, [])

  const getPublicaciones = async () => {
    await axios.get(apiBaseUrl + '/posts/')
      .then(response => {
        console.log(response.data)
        setPublicaciones(response.data)
      }).catch(error => {
        console.error(error)
      })
  }

  const getPublicacionesType = (type) => (event) => {
    event.preventDefault();
    axios.get(apiBaseUrl + '/posts/' + type)
      .then(function (response) {
        console.log(response);
        setPublicaciones(response.data)
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="App">
      <header className="App-header">
        Hola <strong>{localStorage.getItem('username')}</strong>
        <h2>Tus publicaciones</h2>
        <div className="flex-row">
          <div className="flex-large">
            <NuevaPublicacion getPublicaciones={getPublicaciones} />
            <div>
              <button style={buttonStyle} onClick={getPublicacionesType('publico')}>P&uacute;blico</button>&nbsp;
              <button style={buttonStyle} onClick={getPublicacionesType('amigos')}>Amigos</button>
            </div>
            {publicaciones.length > 0 ? (
              publicaciones.map(publicacion => (
                <Publicacion publicacion={publicacion} getPublicaciones={getPublicaciones} />))
            ) : (
                <p>No hay publicaciones</p>
              )}
          </div>
        </div>
      </header>
    </div>
  );
};

const buttonStyle = {
  background: 'none',
  border: 'none',
  padding: '0',
  color: '#069',
  textDecoration: 'underline'
}

export default Muro;
