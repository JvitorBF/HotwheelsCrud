import React, { useState } from "react";
import useApi from "../../hook/useApi";
import "./CarForm.module.css";

function CarForm() {
  const [loading, data, HandleDelete, HandleCreate] = useApi(
    "http://localhost:5000/cars"
  );
  // Estado para armazenar os dados do novo carro
  const [newCar, setNewCar] = useState({
    id: "",
    name: "",
    brand: "",
    color: "",
    year: "",
  });

  // Função para atualizar o estado quando houver mudança nos inputs
  const changeObserver = (event) => {
    const { name, value } = event.target;
    setNewCar({ ...newCar, [name]: value });
  };

  // Função para cadastrar um novo carro
  function cadastrarCarro(event) {
    // Impede que o formulário seja enviado automaticamente
    event.preventDefault();

    try {
      const idInt = parseInt(newCar.id, 10); // Converte o ID para um número inteiro
      const updatedNewCar = { ...newCar, id: idInt }; // Cria uma cópia do objeto newCar com o ID atualizado
      // Verifica se os campos relevantes estão preenchidos
      if (
        !updatedNewCar.name ||
        !updatedNewCar.brand ||
        !updatedNewCar.color ||
        !updatedNewCar.year
      ) {
        alert("Preencha todos os campos antes de cadastrar o veículo.");
        return; // Sai da função se algum campo estiver vazio
      }
      // Se todos os campos estiverem preenchidos, prossegue com o cadastro
      HandleCreate(updatedNewCar);
      alert("Cadastro realizado com sucesso!");
      clear();
    } catch (error) {
      console.error("Erro ao cadastrar veículo: ", error);
    }
  }

  function clear() {
    setNewCar({
      id: "",
      name: "",
      brand: "",
      color: "",
      year: "",
    });
  }

  return (
    <div className="container d-flex mt-5">
      <div className="card" style={{ width: "400px" }}>
        <div className="card-body">
          <h1 className="card-title">Adicionar Carro</h1>
          <form className="d-flex flex-column gap-3" onSubmit={cadastrarCarro}>
            <div className="form-group">
              <label htmlFor="id">ID:</label>
              <input
                type="number"
                className="form-control"
                name="id"
                value={newCar.id}
                min={1}
                onChange={changeObserver}
              />
            </div>
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={newCar.name}
                onChange={changeObserver}
              />
            </div>
            <div className="form-group">
              <label htmlFor="brand">Marca:</label>
              <input
                type="text"
                className="form-control"
                name="brand"
                value={newCar.brand}
                onChange={changeObserver}
              />
            </div>
            <div className="form-group">
              <label htmlFor="color">Cor:</label>
              <input
                type="text"
                className="form-control"
                name="color"
                value={newCar.color}
                onChange={changeObserver}
              />
            </div>
            <div className="form-group">
              <label htmlFor="year">Ano:</label>
              <input
                type="number"
                className="form-control"
                name="year"
                value={newCar.year}
                onChange={changeObserver}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Cadastrar
            </button>
            <button type="reset" onClick={clear} className="btn btn-secondary">
              Cancelar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CarForm;
