import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';

const HookForm = () => { 

    const {register, errors, handleSubmit} = useForm();

    const onSubmit = (data, e ) => {
        console.log(data);
        e.target.reset();
    }

    return(
        <Fragment>
                <h1>Formulario Hook</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input
                        name='titulo'
                        className="form-control my-2" 
                        ref={register({
                            required: {value: true, message: 'titulo obligatorio'}
                        })
                    }   
                    />
                    <span className="text-danger text-small d-block mb-2">
                        {errors?.titulo?.message }
                    </span>
                    <button
                        className="btn btn-primary"
                    >
                        Jit me!
                    </button>
                </form>
        </Fragment>
    );
}

export default HookForm;