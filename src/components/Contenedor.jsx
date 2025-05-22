import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Card1 = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="image"></div>

        
        <div className="content">
          
            <span className="title">
              Mazatlan Sinaloa ‼️ 
            </span>
         
          <p className="desc">
            *Rescate múltiple en Isla de la Piedra activa protocolos de salvavidas en Mazatlán*
_– Las personas puestas a salvo son valoradas en el lugar de la emergencia; una de ellas fue llevada a un hospital_
 punto de las 14:20 horas, activaron los protocolos de búsqueda de quien identificaron como Brayan "N", de 17 años, en tanto Arely "N", de 18 años, fue trasladada al embarcadero para ser llevada a un hospital, mientras que el resto permaneció en el lugar
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
    padding: 1.1rem;
  }

  .image {
    object-fit: cover;
    border-radius: 2rem 2rem 0 0;
    width: 600px;
    height: 300px;
    background-color: rgba(90, 255, 13, 0.24);
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
