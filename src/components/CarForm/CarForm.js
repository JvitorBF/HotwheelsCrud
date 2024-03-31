import React, { useState } from "react";
import { Link } from "react-router-dom";

function CarForm({ adicionarCarro }) {
  // Estado para armazenar os dados do novo carro
  const [novoCarro, setNovoCarro] = useState({
    nome: "",
    marca: "",
    cor: "",
    ano: "",
  });

  // Função para atualizar o estado quando houver mudança nos inputs
  const observadorMudanca = (event) => {
    const { name, value } = event.target;
    setNovoCarro({ ...novoCarro, [name]: value });
  };

  // Função para cadastrar um novo carro
  function cadastrarCarro(event) {
    /* Possibilita que a decisão de renderização seja controlada por mim */
    event.preventDefault();
    adicionarCarro(novoCarro);
    alert("Cadastro realizado com sucesso");
    // Limpa os inputs do formulário
    setNovoCarro({
      nome: "",
      marca: "",
      cor: "",
      ano: "",
    });
  }

  return (
    <div>
      <h1>Adicionar Carro</h1>
      <form onSubmit={cadastrarCarro}>
        <label htmlFor="nome">
          Nome:
          <input
            type="text"
            name="nome"
            value={novoCarro.nome}
            onChange={observadorMudanca}
          />
        </label>
        <label htmlFor="marca">
          Marca:
          <input
            type="text"
            name="marca"
            value={novoCarro.marca}
            onChange={observadorMudanca}
          />
        </label>
        <label htmlFor="cor">
          Cor:
          <input
            type="text"
            name="cor"
            value={novoCarro.cor}
            onChange={observadorMudanca}
          />
        </label>
        <label htmlFor="ano">
          Ano:
          <input
            type="number"
            name="ano"
            value={novoCarro.ano}
            onChange={observadorMudanca}
          />
        </label>
        <button type="submit">Cadastrar</button>
      </form>
      <Link to={"/List"}></Link>
    </div>
  );
}

export default CarForm;
