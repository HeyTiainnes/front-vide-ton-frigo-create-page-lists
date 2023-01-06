import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import PageConnexion from "./pages/PageConnexion";
import PageDoList from "./pages/PageDoList";
import PageHome from "./pages/PageHome";
import PageInscription from "./pages/PageInscription";
import PageListesEnregistrees from "./pages/PageListesEnregistrees";
import "./App.css";
//import ListesEnregistrees from "./pages/PageListesEnregistrees";

function App() {
  return (
    <div className="fondcouleur">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<PageHome />} />
          <Route path="/pageDoList" element={<PageDoList />} />
          <Route path="/pageInscription" element={<PageInscription />} />
          <Route path="/pageConnexion" element={<PageConnexion />} />
          <Route
            path="/pageListesEnregistrees"
            element={<PageListesEnregistrees />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;