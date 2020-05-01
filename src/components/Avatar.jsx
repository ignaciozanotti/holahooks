import React, { Fragment } from 'react'

const Avatar = (props) => {
    //console.log(props);
    return(
        <Fragment>
            <img src={props.imgUrl}  className="mr-3" />
        </Fragment>
                

    );
}

export default Avatar;
