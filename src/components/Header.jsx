import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import icono from '../assets/icon.png';
import usuario from '../assets/usuario.png';
import cerrar from '../assets/cerrar.png';



const Header = () => {
  return (
    <StyledWrapper>
      <div className="nav">

             
      <Link to="/"  >
        <img src={icono} alt="Logo" className="imgIcono" />
      </Link>
              <div className="right-icons"> {/* Nuevo div contenedor */}
          <Link to="/">
            <img src={usuario} alt="Usuario" className="img3" />
          </Link>

          <Link to="/">
            <img src={cerrar} alt="Cerrar" className="img3" />
          </Link>
        </div>


        </div>
      
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .nav {
    width: auto;
    height: 100px;
    background:rgb(70, 209, 52);
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }

  .container {
    display: flex;
    gap: 10px;
    padding: 1em 2em;
    position: relative;
  }

  .btn {
    position: relative;
    display: flex;
    align-items: left;
    padding: 1em 1.5em;
    color: #fff;
    cursor: pointer;
    transition: background 0.3s, transform 0.2s;
    font-weight: 500;
    border-radius: 34px;
  }

  .btn::before {
    content: "";
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    border-radius: 34px;
    transition: all 0.4s ease;
    pointer-events: none;
  }
    
  .right-icons {
    display: flex; /* Convierte este contenedor en flex para alinear sus hijos (los Links) */
    gap: 0em; /* Espacio entre los iconos de usuario y cerrar */
    margin-left: auto; /* <-- ESTO empuja este div (y su contenido) a la derecha */
    padding: 0; /* Asegura que este div no tenga padding */
   
  }

  .btn:hover::before {
    border-color: #f5c518;
    box-shadow: 0 0 10px rgba(245, 197, 24, 0.4);
    transform: scale(1.05);
  }

  .btn:hover {
    background: rgba(245, 197, 24, 0.1); /* dorado translúcido */
    transform: translateY(-2px);
  }
`;



export default Header;
