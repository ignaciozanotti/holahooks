import React, {Fragment, useState} from 'react'

const Formulario = () => {

    const [datos,setDatos] = useState({
        nombre: '',
        apellido: ''
    });

    const handleInputChange = (evento) => {
        console.log('funciona');
        setDatos({
            ...datos,
            [evento.target.name] : evento.target.value
        })
    }

    const enviarDatos = (evento) => {
        evento.preventDefault();
        console.log(datos.nombre+' - '+datos.apellido);
    }

    return(
        <Fragment>
            <h1>Formulario!</h1>
            <form className="row" onSubmit={enviarDatos}>
                <div className="col-md-3">
                    <input
                        type='text'
                        name='nombre'
                        placeholder="ingrese nombre"
                        className="form-control"
                        onChange={handleInputChange}
                    />
                </div>
                

                <div className="col-md-3">
                    <input
                        type='text'
                        name='apellido'
                        placeholder="ingrese apellido"
                        className="form-control"
                        onChange={handleInputChange}
                    />
                </div>

 
                <div className="col-md-3">
                    <button
                        className="btn btn-primary"
                        type="submit"
                    >
                        Enviar
                        </button>
                </div>
                
            </form>
    <h3>{datos.nombre} - {datos.apellido}</h3>
        </Fragment>
    );
}

export default Formulario;