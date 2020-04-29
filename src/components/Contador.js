import React, {useState, Fragment} from 'react';

const Contador = () => {

    const [numero, setNumero] = useState(0);

    const aumentar =
    () => {
        console.log("click");
        setNumero(numero + 1);
    }

    return (
        <Fragment>
            <h3>Contador actual: {numero}</h3>
            <button onClick={aumentar}>Uno más!</button>
        </Fragment>

        );
}

export default Contador;
