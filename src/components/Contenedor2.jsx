import React from 'react';
import styled from 'styled-components';

const Card2 = () => {
  return (
    <StyledWrapper>
      <div className="card">
        
        <div className="content">
          
            <span className="title">
              Mazatlán Sinaloa 
SERVICIO SOCIAL 
            </span>
       
          <p className="desc">
           Se pide la colaboración de la comunidad, para tratar de localizar a la motocicleta que aparece en la fotografía.
La última vez que se vio fue en olas altas al quitarla a mano armada.
Cualquier información al respecto, favor de comunicarse a este medio.
Se dará $10,000 de recompensa al que de el lugar exacto donde está.
          </p>
          <a className="action" href="#">
            Leer mas
            <span aria-hidden="true">
              →
            </span>
          </a>
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
    width: 100%;
    height: 150px;
    background-color: rgb(239, 205, 255);
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
