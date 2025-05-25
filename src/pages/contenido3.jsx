import React from 'react';
import img1 from '../assets/gato2.jpg';
import '../styles/contendor.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contenido1() {
  return (
    <div className="fondo3">
    <>
      <div className="condiv condiv-header"><Header /></div>

      <div className="condiv condiv-titulo">Ha visto alguna vez usted a este gato?</div>

      <div className="condiv condiv-texto">
        <h3>
Pues ya lo vio, Felicidades!!
<br /><br />
<br /><br />       
        </h3>
      </div>

      <div className="condiv condiv-imagen">
        <img src={img1} alt="Imagen de la noticia" className="img-noticia" />
      </div>

      <div className="condiv condiv-footer"><Footer /></div>
    </>
    </div>
  );
}
