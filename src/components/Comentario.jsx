import React, { Fragment } from 'react'

import Avatar from './Avatar';

const Comentario = ({sujeto}) => {
    //console.log(props);
    return(
        <Fragment>
            <h1>Hola! {sujeto.nombre}</h1>
            <hr/>
            <div className="media">
                <Avatar imgUrl={sujeto.imgUrl}/>
                <div className="media-body mr-3">
                    <h5 className="mt-0">{sujeto.texto}</h5>
                    
                </div>
            </div>
        </Fragment>
    );
}

export default Comentario;
