import React, { useState, useEffect } from 'react'
import './App.css';
import axios from 'axios';

const Publicacion = (props) => {
    const confirmarEliminar = (event) => {
        if (window.confirm('Estas seguro de que quieres eliminar este post?')) {
            console.log('eliminado')
            event.preventDefault();
            let apiBaseUrl = 'https://imillasocial.herokuapp.com/';
            axios.delete(apiBaseUrl + '/posts/'+ props.publicacion._id)
                .then(function (response) {
                    console.log(response);
                    if (response.status === 200){
                        props.getPublicaciones()
                        console.log('Publicacion eliminada')
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }

    const editarPost = () => {
        return
    }

    return (
        <div style={style}>
            <p>{props.publicacion.content}</p>
            <div style={{ textAlign: 'left' }}>
                <button style={buttonStyle} onClick={editarPost}>Editar</button>&nbsp;
                <button style={buttonStyle} onClick={confirmarEliminar}>Eliminar</button>
            </div>
        </div>
    )
}
const style = {
    textAlign: 'left',
    borderStyle: 'solid',
    margin: 15,
    padding: 15
}
const buttonStyle = {
    background: 'none',
    border: 'none',
    padding: '0',
    color: '#069',
    textDecoration: 'underline'
}
export default Publicacion