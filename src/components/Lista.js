import React, {useState, Fragment} from 'react';

const Lista = () => {

    const [arrayNumero, setNumero] = useState([1,2,3,4]);
    const [contador, setContador] = useState(5);

    const agregarElto = () => {
        setContador(contador +1);
        setNumero([...arrayNumero,contador]);
    }

    return (
    <Fragment>
    <ol>
        <h2>Lista</h2>
        <button onClick={agregarElto}>Agregar Elemento</button>
        {
            arrayNumero.map((item, index) => 
        <li key={index}>{item} - {index}</li>
            )
        }
    </ol>
    </Fragment>
    
    );
}

export default Lista;