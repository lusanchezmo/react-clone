import React from 'react';
import '../hojas-de-estilo/Testimonios.css';

function Testimonio(props) {
  return (
    <div className='contenedor-testimonio'>
      <img
        className='imagen-testimonio' 
        src={require(`../imagenes/${props.imagen}.jpg`)}
        width='400px'
        alt='foto de juana'/>
      <div className='texto-testimonio'>
        <p className='nombre-testimonio'> {props.nombre} en {props.pais}</p>
        <p className='cargo-testimonio'>{props.cargo} en {props.empresa}</p>
        <p className='texto-testimonio'>{props.testimonio}</p>
      </div>
    </div>
  );  
}

export default Testimonio;