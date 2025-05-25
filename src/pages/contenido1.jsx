import React from 'react';
import img1 from '../assets/image.webp';
import '../styles/contendor.css';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Contenido1() {
  return (
    <div className="fondo3">
    <>
      <div className="condiv condiv-header"><Header /></div>

      <div className="condiv condiv-titulo">Asesinan a balazos a motociclista en el bulevar Agricultores en Culiacán</div>

      <div className="condiv condiv-texto">
        <h3>
         Redacción / El Sol De Sinaloa

Culiacán, Sin.- Un vecino del sector Las coloradas, en la colonia Renato Vega Amador, fue asesinado la tarde de este sábado cuando circulaba a bordo de una motocicleta sobre el bulevar Agricultores, en la colonia Vista Hermosa, al oriente de la ciudad.

De acuerdo con elementos de la Secretaría de Seguridad Pública, el ataque ocurrió alrededor de las 2:15 de la tarde, cuando la víctima, quien se desplazaba en una motocicleta Itálika FT150 color amarillo con negro, fue interceptada por un grupo armado que viajaba en dos vehículos. Sin mediar palabra, los sujetos le dispararon en repetidas ocasiones con rifles de asalto tipo R-15, hasta dejarlo sin vida.
Minutos después del atentado, paramédicos de la Cruz Roja arribaron al sitio, sin embargo, solo pudieron confirmar el deceso del motociclista, cuyo cuerpo quedó tendido a un costado de la unidad, sobre la banqueta.

Al lugar también se presentaron elementos de la Guardia Nacional, el Ejército Mexicano, la Policía Estatal Preventiva y personal de la Fiscalía, quienes acordonaron el área y comenzaron con las diligencias correspondientes.

Hasta el momento, no se ha informado la identidad de la víctima<br /><br />

          
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
