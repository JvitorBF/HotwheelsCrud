import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/sobre">
              Sobre
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Listar">
              Carros
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Formulario">
              Cadastrar veículo
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
