import React from 'react'
import './App.css';

const Publicacion = props => (
    <div style={style}>
        <p>{props.publicacion.content}</p>
        <div style={styleLinks}>
            <a className="App-link" href=''>Editar</a>&nbsp;
            <a className="App-link" href=''>Eliminar</a>
        </div>
    </div>
)
const style = {
    borderStyle: 'solid',
    margin: 15
}
const styleLinks = {
  textAlign: 'left'
}
export default Publicacion