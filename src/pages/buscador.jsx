import React from 'react';
import '../styles/buscador.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Input from '../components/buscador.jsx';
import ProfileCard from '../components/profile-card copy.tsx';

export default function Buscador() {
  return (

<div class="buscador">
    <div className="bdiv1">
        <Header />
    </div>
    <div className="bdiv2"><Input></Input></div>
    <div className="bdiv3"> <ProfileCard name={"Luis Montenegro"} address={"Suc. Villa Galaxia Avenida Juan Pablo II No. 1723 Col. Villa Galaxia Suc. Villa verde av. jacarandas #122 col. villa verde Suc. Alarcon av. Delfines #450 inf."} email={"lmontenegro.ai@example.com"} occupation={"Ingeniero en Machine Learning"} skills={["Python","Tensorflow","Pytorch", "Numpy", "Figma"]}/> </div>
    <div className="bdiv4"> <ProfileCard name={"Isabella Duarte"} address={"Suc. Villa Galaxia Avenida Juan Pablo II No. 1723 Col. Villa Galaxia Suc. Villa verde av. jacarandas #122 col. villa verde Suc. Alarcon av. Delfines #450 inf."} email={" isaduarte.marketing@example.com"} occupation={"Estratega de Marketing Digital"} skills={["SEO","SEM","Google ads", "Canva", "Meta business suite"]}/></div>
    <div className="bdiv5"> <ProfileCard name={"Mateo Salgado"} address={"Suc. Villa Galaxia Avenida Juan Pablo II No. 1723 Col. Villa Galaxia Suc. Villa verde av. jacarandas #122 col. villa verde Suc. Alarcon av. Delfines #450 inf."} email={"msalgado.devops@example.com"} occupation={"Ingeniero DevOps"} skills={["Docker","AWS","Kubernetes", "Azure", "Github"]}/></div>
    <div className="bdiv6"><Footer></Footer></div>
</div>

  );
}