import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img from '../assets/Balatro.jpg'; // Import the image you want to use

const Card1 = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <img className='image' src={img} alt="Balatro" />

        
        <div className="content">
          
            <span className="title">
              Uno de los juegos más exitosos del 2024 vuelve a estar en problemas. Ahora es YouTube la que ha calificado injustamente a Balatros como un juego de "contenido para adultos"
            </span>
         
          <p className="desc">
LocalThunk ha vivido un periplo curioso con Balatro. Este título, que fue desarrollado por una sola persona, explotó en popularidad tras su lanzamiento en febrero de 2024 y ha reunido una cantidad ingente de fans. 
          </p>
          <Link to="/pagina2" className="action">
            Leer mas
            <span aria-hidden="true">
              →
            </span>
          </Link>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .card {
    max-width: 600px;
    border-radius: 2rem;
    background-color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
    border: 1px solid transparent;
  }

  .card a {
    text-decoration: none
  }

  .content {
    padding: 1.1rem;
  }

  .image {
    object-fit: cover;
    border-radius: 2rem 2rem 0 0;
    width: 600px;
    height: 300px;
    background-color: rgba(18, 212, 226, 0.62);
  }

  .title {
    color: #111827;
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 600;
  }

  .desc {
    margin-top: 1rem;
    color: #6B7280;
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .action {
    display: inline-flex;
    margin-top: 1rem;
    color: #ffffff;
    font-size: 0.875rem;
    line-height: 1.25rem;
    font-weight: 500;
    align-items: center;
    gap: 0.25rem;
    background-color: #2563EB;
    padding: 4px 8px;
    border-radius: 4px;
  }

  .action span {
    transition: .3s ease;
  }

  .action:hover span {
    transform: translateX(4px);
  }`;

export default Card1;
