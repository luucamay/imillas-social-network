import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

const NuevaPublicacion = (props) => {
    const initialPostState = {
        content: '',
        type: 'amigos'
    }
    const [publicacion, setPublicacion] = useState(initialPostState);

    const handleInputChange = (event) => {
        const { name, value } = event.target
        setPublicacion({ ...publicacion, [name]: value })
    }
    const publicar = (event) => {
        event.preventDefault();
        if (publicacion.content === '') {
            console.log('no ha escrito nada');
            return;
        }
        let publicacionObj = publicacion;
        publicacionObj.user_id = localStorage.getItem('user_id');
        let apiBaseUrl = 'http://64.225.127.76/';
        axios.post(apiBaseUrl + '/posts/', publicacionObj)
            .then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    console.log('consulta exitosa');
                    props.getPublicaciones();
                    setPublicacion(initialPostState);
                } else {
                    console.log(response.status);
                }
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div>
            <textarea name="content" cols={40} rows={5} onChange={handleInputChange} />
            <div>
                <select name="type" onChange={handleInputChange}>
                    <option value="amigos">Amigos</option>
                    <option value="publico">Todo Publico</option>
                </select>
                <button onClick={publicar} disabled={!publicacion.content}>Publicar</button>
            </div>
        </div>
    )
}

export default NuevaPublicacion