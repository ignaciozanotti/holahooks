import React, { Fragment, useState } from 'react';
import { useForm } from 'react-hook-form';

const Practica1 = () => {

    const {register, errors, handleSubmit} = useForm();

    const [entradas, setEntradas] = useState([]);

    const onSubmit = (data, e) => {
        console.log(data);
        e.target.reset();

        setEntradas([...entradas,data]);
    }

    



    return (
        <Fragment>
            <h1> Ejemplo #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="titulo"
                    placeholder="ingrese título"
                    className="form-control my-2"
                    ref = {
                        register({
                            required: {value: true, message: 'campo obligatorio'},
                            minLength: {value: 2, message: 'mínimo 2 caracteres' }
                        })
                    }
                    >
                </input>
                <span className="text-danger text-small d-block mb-2">
                        {errors.titulo && errors.titulo.message }
                    </span>
                <input
                    name="descripcion"
                    placeholder="ingrese descripción"
                    className="form-control my-2"
                    ref = {
                            register({
                                required: {value: true, message: 'campo obligatorio'},
                                minLength: {value: 2, message: 'mínimo 2 caracteres' }
                            })
                        }
                    >
                </input>
                <span className="text-danger text-small d-block mb-2">
                        {errors?.descripcion?.message }
                    </span>
                <button
                        className="btn btn-primary"
                    >
                    Agregar
                </button>
            </form>
            <ul>
                {
                    entradas.map((item,index) => 
                    <li key={index}>{item.titulo} - {item.descripcion}</li>)
                }
            </ul>
        </Fragment>
    );
}

export default Practica1;