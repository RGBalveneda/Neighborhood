import React from 'react';
import img1 from '../assets/Balatrez.jpg';
import '../styles/contendor.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contenido1() {
  return (
    <div className="fondo3">
    <>
      <div className="condiv condiv-header"><Header /></div>

      <div className="condiv condiv-titulo">Uno de los juegos más exitosos del 2024 vuelve a estar en problemas. Ahora es YouTube la que ha calificado injustamente a Balatro</div>

      <div className="condiv condiv-texto">
        <h3>
Los vídeos publicados en la plataforma ahora están clasificados como +18 porque el sistema considera que representa un juego de azar
<br /><br />    
LocalThunk ha vivido un periplo curioso con Balatro. Este título, que fue desarrollado por una sola persona, explotó en popularidad tras su lanzamiento en febrero de 2024 y ha reunido una cantidad ingente de fans. Sin embargo, algunos sistemas automatizados no terminan de entender que su experiencia de juego, si bien incluye iconos propios del póker, no se establece como un juego de azar; malentendido que da lugar a situaciones como la que se está produciendo en YouTube. Porque, sin aviso previo, ahora los vídeos dedicados a dicha obra se han clasificado como +18.



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
