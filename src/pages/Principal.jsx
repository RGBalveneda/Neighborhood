import React from 'react';
import '../styles/styles.css';
import icono from '../assets/icon.png';
import { Link } from 'react-router-dom';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import card from '../components/Contenedor.jsx';
import Card1 from '../components/Contenedor.jsx';
import Card2 from '../components/Contenedor2.jsx';
import Card3 from '../components/Contenedor3.jsx';
import Input from '../components/buscador.jsx';
import footer from '../components/Footer.jsx';


export default function Principal() {
    return (

<div className="principal">
    <div className="pdiv1">
        <Header />
    </div>
    <div className="pdiv2">
    <h1 className="h1d">¿Necesitas ayuda? Encuéntrala aquí, muy muy cerca de ti!. </h1>
    </div>
    <div className="pdiv3">
        <Input />
    </div>
    <div className="pdiv4">
        <Card1 />
    </div>
    <div className="pdiv5">
        <Card2 />
    </div>
    <div className="pdiv6">
        <Card3 />
    </div>
    <div className="pdiv7">
        <Footer />
    </div>
</div>
    
    );
}
    