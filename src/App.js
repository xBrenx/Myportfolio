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

      <div className='flex mt-56 mb-32 2xl:w-11/12 justify-center'>
      {
        toRender[render]
      }
      </div>
    </div>
  );
}

export default App;
