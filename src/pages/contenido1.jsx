import React from 'react';
import img from '../assets/1.jpg';
import '../styles/styles.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import img1 from '../assets/1.jpg';

export default function Contenido1() {
    return (
      

<div class="contenedor">
    <div className="condiv1"><Header/></div>
    <div className="condiv2">Mazatlan Sinaloa ‼️ </div>
    <div className="condiv3"><h3>Se registra fuerte persecución en estos momentos entre los elementos de los militares y civiles armados antes de subir el puente del conchi conductores que circulaban se detuvieron a juntar los ponchallantas fue con dirección a Urías ‼️
Sigue nuestro canal de WhatsApp para más noticias 
https://whatsapp.com/channel/0029VazDdirC6Zvpum89hB2N</h3></div>
    <div class="condiv4">
        <img src={img1} alt='Imagen de la noticia' class="img1" />
    </div>
    <div class="condiv5"><Footer/></div>
</div>
    
    
    );
}