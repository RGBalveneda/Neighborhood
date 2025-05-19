
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Registro from "./pages/Registro.jsx";
import Principal from "./pages/Principal.jsx";


function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/principal" element={<Principal />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
