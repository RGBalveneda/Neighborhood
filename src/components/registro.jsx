import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


const Registro = () => {
  return (
    <StyledWrapper>
      <div className="form-box">
        <form className="form">
          <span className="title">Registro</span>
          <span className="subtitle">Crea una cuenta nueva rapidamente</span>
          <div className="form-container">
            <input type="text" className="input" placeholder="Nombre completo" />
            <input type="text" className="input" placeholder="Domicilio" />
            <input type="email" className="input" placeholder="Correo electronico" />
            <input type="password" className="input" placeholder="Contrasena" />
          </div>
          <Link to="/">
          <button>Registrarse</button>
          </Link>
        </form>
        <div className="form-section">
          <p>Ya tienes una cuenta? <Link to="/">Inicia sesion aqui</Link> </p>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .form-box {
    max-width: 600px;
    background: #f1f7fe;
    overflow: hidden;
    border-radius: 16px;
    color: #010101;
  }

  .form {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 32px 24px 24px;
    gap: 16px;
    text-align: center;
  }

  /*Form text*/
  .title {
    font-weight: bold;
    font-size: 1.6rem;
  }

  .subtitle {
    font-size: 1rem;
    color: #666;
  }

  /*Inputs box*/
  .form-container {
    overflow: hidden;
    border-radius: 8px;
    background-color: #fff;
    margin: 1rem 0 .5rem;
    width: 100%;
  }

  .input {
    background: none;
    border: 0;
    outline: 0;
    height: 40px;
    width: 100%;
    border-bottom: 1px solid #eee;
    font-size: .9rem;
    padding: 8px 15px;
  }

  .form-section {
    padding: 16px;
    font-size: .85rem;
    background-color: #e0ecfb;
    box-shadow: rgb(0 0 0 / 8%) 0 -1px;
  }

  .form-section a {
    font-weight: bold;
    color: #0066ff;
    transition: color .3s ease;
  }

  .form-section a:hover {
    color: #005ce6;
    text-decoration: underline;
  }

  /*Button*/
  .form button {
    background-color: rgb(112, 182, 1);
    color: #fff;
    border: 0;
    border-radius: 24px;
    padding: 10px 16px;
    font-size: 1rem;
    font-weight: 600;
    cursor: pointer;
    transition: background-color .3s ease;
  }

  .form button:hover {
    background-color: rgb(50, 177, 50);
  }`;

export default Registro;
