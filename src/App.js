import "./App.css";
import React from "react";
import MyRoutes from "./Routes";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <MyRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;
