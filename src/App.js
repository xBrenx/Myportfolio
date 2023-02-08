import React, { useState } from "react";
import NavBar from "./components/NavBar";
import "./App.css"

//components
import Welcome from "./components/Welcome";
import Proyectos from "./components/Proyectos";
import Contacto from "./components/Contacto";
import Conocimientos from "./components/conocimientos";

function App() {
  const [render, setRender] = useState(0)

  const toRender = [
    <Welcome />,
    <Proyectos />,
    <Conocimientos />,
    <Contacto />
   ]

  return (
    <div>
      <NavBar setRender={setRender}/>

      <div>
      {
        toRender[render]
      }
      </div>
    </div>
  );
}

export default App;
