import React from 'react';
import '../styles/styles.css';
import icono from '../assets/icon.png';
import { Link } from 'react-router-dom';
import HeaderP from '../components/HeaderPrincipal.jsx';
import Footer from '../components/Footer.jsx';
import Card1 from '../components/Contenedor.jsx';
import Card2 from '../components/Contenedor3.jsx';
import Card3 from '../components/Contenedor2.jsx';
import Input from '../components/buscador.jsx';



export default function Principal() {
    return (
    <div className='fondo2'>
<div className="principal">
    <div className="pdiv1">
        <HeaderP />
    </div>
    <div className="pdiv2">
    <h1 className="h1d">¿Necesitas ayuda? Encuéntrala aquí, muy muy cerca de ti!. </h1>
    </div>
    <div className="pdiv3">
    <Link to="/buscador">
        <Input />
    </Link>
    </div>
    <div className="pdiv4">
        <Card3 />
    </div>
    <div className="pdiv5">
        <Card1 />
    </div>
    <div className="pdiv6">
        <Card2 />
    </div>
    <div className="pdiv7">
        <Footer />
    </div>
</div>

    </div>
    );
}
    