import React from 'react';
import styled from 'styled-components';

const Card1 = () => {
  return (
    <StyledWrapper>
      <div className="card">
        
        <div className="content">
          
            <span className="title">
              Mazatlan Sinaloa ‼️ 
OFICINA DE LA SECRETARÍA DE SEGURIDAD PÚBLICA DEL GOBIERNO MUNICIPAL DE MAZATLÁN, COMUNICACIÓN SOCIAL 2024-2027, BOLETÍN DE PRENSA 260
            </span>
         
          <p className="desc">
            *Rescate múltiple en Isla de la Piedra activa protocolos de salvavidas en Mazatlán*
_– Las personas puestas a salvo son valoradas en el lugar de la emergencia; una de ellas fue llevada a un hospital_
Mazatlán, Sinaloa, 13 de mayo de 2025.– El reporte de un rescate múltiple en las playas de la Isla de la Piedra, activó la tarde de este martes los protocolos de apoyo y búsqueda de rescate de los elementos de la Secretaría de Seguridad Pública Municipal, a través del Escuadrón de Salvamento Acuático y personal de ENSAR de la Secretaría de Marina.
Gustavo Espinoza Bastidas, titular del grupo acuático, informó que una corriente marina formada cerca de un barco hundido en los límites del Hotel Estrella Del Mar, jaló a 11 personas, quienes se encontraban en una zona no apta para bañistas, por lo que la oportuna respuesta de los salvavidas logró poner a 10 de ellos en tierra firme, quienes recibieron valoración médica, pero por desgracia uno se perdió en el oleaje.
Ante la situación, elementos de las diversas dependencias de auxilio y seguridad, en punto de las 14:20 horas, activaron los protocolos de búsqueda de quien identificaron como Brayan "N", de 17 años, en tanto Arely "N", de 18 años, fue trasladada al embarcadero para ser llevada a un hospital, mientras que el resto permaneció en el lugar
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

export default Card1;
