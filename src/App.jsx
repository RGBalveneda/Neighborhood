
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Registro from "./pages/Registro.jsx";
import Principal from "./pages/Principal.jsx";
import Perfil from "./pages/perfil.jsx";
import Contenido1 from "./pages/contenido1.jsx";
import Contenido2 from "./pages/contenido2.jsx";
import Contenido3 from "./pages/contenido3.jsx";
import NotFound from "./pages/404.jsx";
import Buscador from "./pages/buscador.jsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/principal" element={<Principal />} />
          <Route path="/perfil" element={<Perfil/>} />
          <Route path="/pagina1" element={<Contenido1/>} />
          <Route path="/pagina2" element={<Contenido2/>} />
          <Route path="/pagina3" element={<Contenido3/>} />
          <Route path="/buscador" element={<Buscador/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
