import React from 'react';
import Contador from './components/Contador';
import Lista from './components/Lista';
import Formulario from './components/Formulario';
import HookForm from './components/HookForm';


function App() {
  return (
    <div>
      <h1>Hola Hooks!</h1>
        <div className="container mt-5">
          <Contador />
          <Lista />
          <Formulario />
          <HookForm />
        </div>
    </div>
  );
 }

export default App;
