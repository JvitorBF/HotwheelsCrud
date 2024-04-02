import React, { useState } from "react";
import CarDetail from "../CarDetail/CarDetail"; // Verifique se o caminho está correto
import useApi from "../../hook/useApi";

function CarList() {
  const [showModal, setShowModal] = useState(false); // Estado para controlar a visibilidade do modal
  const [selectedCar, setSelectedCar] = useState(null); // Estado para armazenar os detalhes do carro selecionado

  const HandleViewDetails = (car) => {
    setSelectedCar(car);
    setShowModal(true);
  };

  const [loading, data, HandleDelete] = useApi("http://localhost:5000/cars");

  if (loading) return <p>Carregando...</p>;

  return (
    <div className="container vh-100 d-flex flex-column gap-3 mt-5">
      <h1>Lista de carros</h1>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Marca</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data?.length > 0 ? (
            data.map((carro) => (
              <tr key={carro.id}>
                <td>{carro.name}</td>
                <td>{carro.brand}</td>
                <td className="d-flex gap-2">
                  <button
                    className="btn btn-danger"
                    onClick={() => HandleDelete(carro.id)}
                  >
                    Excluir
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={() => HandleViewDetails(carro)} // Alteração aqui para chamar HandleViewDetails
                  >
                    Visualizar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="3">Nenhum carro encontrado!</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* Renderize apenas o modal */}
      {showModal && (
        <div
          className="modal fade show"
          id="modalUpdate"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="modalUpdateLabel"
          aria-hidden="true"
          style={{ display: "block" }}
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Dados Complementares</h5>
                <button
                  type="button"
                  className="btn-close"
                  aria-label="Close"
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body">
                <CarDetail car={selectedCar} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CarList;
