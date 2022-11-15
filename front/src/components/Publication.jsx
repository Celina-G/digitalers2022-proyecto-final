import React from 'react'
import '../resources/css/bootstrap.css';

const Publication = (props) => {
    return (
        <div className='card border-dark mb-3'>
            <div className='card-header'>{props.title}</div>
            <h4 className='card-text'>{props.body}</h4>
        </div>
    )
}

export default Publication