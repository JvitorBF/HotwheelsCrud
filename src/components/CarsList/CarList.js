import React from "react";

function CarList({ carros, excluir }) {
  return (
    <div>
      <h1>Lista de carros</h1>
      <ul>
        {/* Verifica se há carros na lista */}
        {carros?.length > 0 ? (
          // Mapeia a lista de carros e exibe cada um deles
          carros.map((carro, index) => {
            return (
              <li key={index}>
                {/* Exibe informações do carro e botão para excluir */}
                {carro.nome} | {carro.marca}{" "}
                <button onClick={() => excluir(index)}>Excluir</button>
              </li>
            );
          })
        ) : (
          // Se não houver carros na lista, exibe mensagem indicando isso
          <p>Nenhum carro encontrado!</p>
        )}
      </ul>
    </div>
  );
}

export default CarList;
