import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Publicacion from './Publicacion.js'

const Muro = () => {
  let history = useHistory();
  useEffect(() => {
    if (!localStorage.getItem('_TOKEN')) {
      history.push('/login')
    }
  });

  const [publicaciones, setPublicaciones] = useState([])

  useEffect(() => {
    getPublicaciones()
  }, [])

  const getPublicaciones = async () => {
    await axios.get('http://localhost:8080/posts')
      .then(response => {
        console.log(response.data)
        setPublicaciones(response.data)
      }).catch(error => {
        console.error(error)
      })
  }

  return (
    <div className="App">
      <header className="App-header">
        Hola <strong>{localStorage.getItem('username')}</strong>
        <h2>Publicaciones</h2>
        <div className="flex-row">
          <div className="flex-large">
            <Publicacion publicacion={null}/>
            {publicaciones.length > 0 ? (
              publicaciones.map(publicacion => (
                <Publicacion publicacion={publicacion} />))
            ) : (
                <p>No hay publicaciones</p>
              )}
          </div>
        </div>
      </header>
    </div>
  );
};
export default Muro;
