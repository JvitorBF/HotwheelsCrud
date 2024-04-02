import React, { useState } from "react";

function CarDetail({ car }) {
  // Estado para armazenar os dados do novo carro
  const [formData] = useState({
    id: car.id,
    name: car.name,
    brand: car.brand,
    color: car.color,
    year: car.year,
  });

  return (
    <div className="container d-flex">
      <div className="card-body">
        <div className="d-flex flex-column gap-3">
          <div className="form-group d-flex gap-1 flex-column">
            <label htmlFor="id">ID:</label>
            <input
              type="number"
              className="form-control"
              name="id"
              value={formData.id}
              min={1}
              readOnly
            />
          </div>
          <div className="form-group d-flex gap-1 flex-column">
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={formData.name}
              readOnly
            />
          </div>
          <div className="form-group d-flex gap-1 flex-column">
            <label htmlFor="brand">Marca:</label>
            <input
              type="text"
              className="form-control"
              name="brand"
              value={formData.brand}
              readOnly
            />
          </div>
          <div className="form-group d-flex gap-1 flex-column">
            <label htmlFor="color">Cor:</label>
            <input
              type="text"
              className="form-control"
              name="color"
              value={formData.color}
              readOnly
            />
          </div>
          <div className="form-group d-flex gap-1 flex-column">
            <label htmlFor="year">Ano:</label>
            <input
              type="number"
              className="form-control"
              name="year"
              value={formData.year}
              readOnly
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CarDetail;
