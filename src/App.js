import React from 'react';
import Contador from './components/Contador';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import HookForm from './components/HookForm';
import Practica1 from './components/Practica1';


function App() {
  return (
    <div>
      <h1>Hola Hooks!</h1>
        <div className="container mt-5">
          <Contador />
          <Lista />
          <Formulario />
          <HookForm />
          <Practica1 />
        </div>
    </div>
  );
 }

export default App;
