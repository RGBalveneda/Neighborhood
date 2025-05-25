import React from 'react';
import styled from 'styled-components';
import img1 from '../assets/image.webp';
import { Link } from 'react-router-dom';

const Card2 = () => {
  return (
    <StyledWrapper>
      <div className="card">
        
        <img
          src={img1}
          className="image"
        />
        <div className="content">
         
            <span className="title">
              Asesinan a balazos a motociclista en el bulevar Agricultores en Culiacán 

            </span>
       
          <p className="desc">

Redacción / El Sol De Sinaloa

Culiacán, Sin.- Un vecino del sector Las coloradas, en la colonia Renato Vega Amador, fue asesinado la tarde de este sábado cuando circulaba a bordo de una motocicleta sobre el bulevar Agricultores, en la colonia Vista Hermosa, al oriente de la ciudad.
          </p>
          <Link to="/pagina1" className="action">
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
    padding: 1.5rem;
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

export default Card2;
