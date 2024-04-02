import { useState, useEffect } from "react";
import axios from "axios"; // Certifique-se de importar o Axios no início do seu arquivo

const useApi = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [url]); // Dependência: a URL da API

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/cars/${id}`);
      console.log("Carro excluído com sucesso!");
      // Após a exclusão, busque novamente os dados atualizados
      const updatedData = await axios.get(url);
      setData(updatedData.data);
    } catch (error) {
      console.error("Erro ao excluir o carro:", error);
    }
  };

  const HandleCreate = async (newCar) => {
    try {
      await axios.post("http://localhost:5000/cars", newCar)
      console.log("Carro cadastrado com sucesso!")
      const updatedData = await axios.get(url);
      setData(updatedData.data);
    } catch (error) {
      console.error("Erro ao criar carro: ", error);
    }
  }

  return [loading, data, handleDelete, HandleCreate]; // Inclua a função handleDelete no retorno
};

export default useApi;
