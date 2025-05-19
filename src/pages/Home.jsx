
import React from 'react'

import '../styles/styles.css'
import Sesion from '../components/InicioSesion.jsx'
import icono from '../assets/icon.png'

function App() {
  return (

<div className='parent'>
    <div className='div1'>
      <img className='img1' src={icono} />
    </div>
    <div className='div2'>
      <Sesion />
    </div>
    <div className='div3'></div>
</div>
    
    
  )}

export default App
