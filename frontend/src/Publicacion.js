import React, { useState, useEffect } from 'react'
import './App.css';

const Publicacion = (props) => {
    const confirmarEliminar = (event) => {
        if (window.confirm('Estas seguro de que quieres eliminar este post?')) {
            console.log('eliminado')
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