import React from 'react';
import styled from 'styled-components';
import Perfil from '../assets/perfil.svg';

const Button2 = () => {
  return (
    <StyledWrapper>
      <button className="Btn">
        <div className="svgWrapper">
          <img src={Perfil} alt="Icono de perfil" className="svgIcon" />
            <path strokeWidth={5} stroke="#fff" d="M9.14073 2.5H32.8593C33.3608 2.5 33.8291 2.75065 34.1073 3.16795L39.0801 10.6271C39.3539 11.0378 39.5 11.5203 39.5 12.0139V21V37C39.5 38.3807 38.3807 39.5 37 39.5H5C3.61929 39.5 2.5 38.3807 2.5 37V21V12.0139C2.5 11.5203 2.6461 11.0378 2.91987 10.6271L7.89266 3.16795C8.17086 2.75065 8.63921 2.5 9.14073 2.5Z" />
            <rect strokeWidth={3} stroke="#fff" rx={2} height={4} width={11} y="18.5" x="15.5" />
            <path strokeWidth={5} stroke="#fff" d="M1 12L41 12" />
        
          <div className="text">Perfil</div>
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .Btn {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 55px;
    height: 55px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    transition-duration: 0.3s;
    box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.199);
    background-color: rgb(53, 53, 53);
  }

  /* plus sign */
  .svgWrapper {
    width: 100%;
    transition-duration: 0.3s;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .svgIcon {
    width: 20px;
  }

  /* text */
  .text {
    position: absolute;
    right: 0%;
    width: 0%;
    opacity: 0;
    color: white;
    font-size: 1.2em;
    font-weight: 600;
    transition-duration: 0.3s;
  }
  /* hover effect on button width */
  .Btn:hover {
    width: 125px;
    border-radius: 5px;
    transition-duration: 0.3s;
  }

  .Btn:hover .svgWrapper {
    width: 30%;
    transition-duration: 0.3s;
    padding-left: 10px;
    
  }
  /* hover effect button's text */
  .Btn:hover .text {
    opacity: 1;
    width: 70%;
    transition-duration: 0.3s;
    padding-right: 10px;
  }
  /* button click effect*/
  .Btn:active {
    transform: translate(2px, 2px);
  }`;

export default Button2;
// 