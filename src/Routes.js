import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import CarForm from "./components/CarForm/CarForm";
import NotFound from "./components/NotFound/NotFound";
import CarList from "./components/CarsList/CarList";

const MyRoutes = () => {
  return (
    <Routes>
      <Route Component={Home} path="/" exact />
      <Route Component={About} path="/Sobre" />
      <Route Component={CarList} path="/Listar" />
      <Route Component={CarForm} path="/Formulario" />
      {/* Rota NotFound para caso nenhuma rota seja correspondida */}
      <Route Component={NotFound} path="*" />
    </Routes>
  );
};

export default MyRoutes;
