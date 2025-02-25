import React from "react";
import { Routes, Route, HashRouter } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Chess from "./pages/Chess";
import Minesweeper from "./pages/Minesweeper";
import Snake from "./pages/Snake";
// import FreeCell from "./pages/FreeCell";
// import Player from "./pages/Player";
// import Streaming from "./pages/Streaming";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import I18n from "./i18n";
import NotificacionesTiempoReal from "./pages/Notificaciones";

function App() {
  return (
    <HashRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<AboutMe />} />
        <Route path="/minesweeper" element={<Minesweeper />} />
        <Route path="/snake" element={<Snake />} />
        <Route path="/chess" element={<Chess />} />
        <Route path="/todolist" element={<Home />} />
        {/* 
       
        <Route exact path="/streaming" component={Streaming} />
        
        <Route exact path="/freecell" component={FreeCell} />
        <Route path="/player/:id" component={Player} /> */}
      </Routes>
      <div className="push"></div>
      <Footer />
    </HashRouter>
  );
}

export default App;
