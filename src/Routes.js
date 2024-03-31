import React, { useState, useEffect} from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import CarForm from "./components/CarForm/CarForm";
import NotFound from "./components/NotFound/NotFound";
import CarList from "./components/CarsList/CarList";

const MyRoutes = () => {
  // Estado para armazenar a lista de carros
  const [carros, setCarros] = useState([]);

  useEffect(() => {
    /* Valores de carros iniciais */
    // Mock de carros iniciais
    const mockCarros = [
      {
        nome: "Golf",
        marca: "Volkswagen",
        cor: "Prata",
        ano: "2021",
      },
      {
        nome: "Civic",
        marca: "Honda",
        cor: "Preto",
        ano: "2019",
      },
      {
        nome: "Mustang",
        marca: "Ford",
        cor: "Vermelho",
        ano: "2020",
      },
    ];
    // Define a lista de carros iniciais
    setCarros(mockCarros);
  }, []);

  // Função para adicionar um novo carro à lista
  const adicionarCarro = (novoCarro) => {
    setCarros([...carros, novoCarro]);
  };

  // Função para excluir um carro da lista
  function excluirCarro(index) {
    /* Filtra o array principal de carros, removendo o carro cujo índice corresponde ao índice fornecido como argumento.*/
    setCarros(carros.filter((carro, i) => i !== index));
  }

  return (
    <Routes>
      <Route Component={Home} path="/" exact />
      <Route Component={About} path="/Sobre" />
      <Route element={<CarList carros={carros} excluir={excluirCarro}/>} path="/Listar" />
      <Route element={<CarForm adicionarCarro={adicionarCarro}/>} path="/Formulario" />
      {/* Rota NotFound para caso nenhuma rota seja correspondida */}
      <Route Component={NotFound} path="*" />
    </Routes>
  );
};

export default MyRoutes;
