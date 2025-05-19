
import '../styles/styles.css'
import Registro from '../components/registro.jsx'
import icono from '../assets/icon.png'

function App() {
  return (

<div className='parent'>
    <div className='div1'>
      <img className='img1' src={icono} />
    </div>
    <div className='div2'>
      <Registro />
    </div>
    <div className='div3'></div>
</div>
    
    
  )}

export default App
