import React from 'react';
import Contador from './components/Contador';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import Saludo from './components/Saludo';
import Comentario from './components/Comentario';


function App() {

const sujeto = {
  nombre: "Juanito",
  imgUrl: "https://via.placeholder.com/64",
  texto: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
}

  return (
    <div>
      <h1>Hola Hooks!</h1>
        <div className="container mt-5">
          <Contador />
          <Lista />
          <Formulario />
          <Saludo persona="Juanito" />
          <Saludo persona="Pepito" />
          <Comentario sujeto={sujeto} />
        </div>
    </div>
  );
 }

export default App;
