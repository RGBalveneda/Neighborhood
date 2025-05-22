import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import icono from '../assets/icon.png';
import usuario from '../assets/usuario.png';
import cerrar from '../assets/cerrar.png';



const Header = () => {
 
  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start', // Alinea los elementos al inicio (arriba)
  };

  const imgIconoStyle = { // Estilo para la imagen de la izquierda
    height: '130px',       // Ajusta según el tamaño de tu icono/logo
    width: 'auto',
    display: 'block', // Para asegurar que el Link no añada espacio extra
  };

  const rightIconsContainerStyle = { // Estilo para el contenedor de iconos de la derecha
    display: 'flex',
    alignItems: 'center', // Centra los iconos verticalmente si tienen alturas ligeramente diferentes
    gap: '15px',          // Espacio entre los iconos de la derecha
  };

  const img3Style = { // Estilo para las imágenes de la derecha
    height: '50px',     // Ajusta según el tamaño de tus iconos
    width: '50px',
    display: 'block', // Para asegurar que el Link no añada espacio extra
  };

  return (
    <header style={headerStyle}>
      <Link to="/">
        <img src={icono} alt="Logo" style={imgIconoStyle} className="imgIcono" />
      </Link>

      <div style={rightIconsContainerStyle} className="right-icons"> {/* Contenedor para los iconos de la derecha */}
        <Link to="/perfil">
          <img src={usuario} alt="Usuario" style={img3Style} className="img3" />
        </Link>

        <Link to="/">
          <img src={cerrar} alt="Cerrar" style={img3Style} className="img3" />
        </Link>
      </div>
    </header>
  );
};



export default Header;
