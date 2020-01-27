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
            {(props.publicacion) ? (
                <p>{props.publicacion.content}</p>                
            ) : (
                <textarea name="content" />
            )}
            <div style={{ textAlign: 'left' }}>
                <button style={buttonStyle} onClick={editarPost}>Editar</button>&nbsp;
                <button style={buttonStyle} onClick={confirmarEliminar}>Eliminar</button>
            </div>
        </div>
    )
}
const style = {
    borderStyle: 'solid',
    margin: 15
}
const buttonStyle = {
    background: 'none',
    border: 'none',
    padding: '0',
    color: '#069',
    textDecoration: 'underline'
}
export default Publicacion