import React from 'react'

import './Card.css'


const Card = ({ text }) => {
    return (
        <div className='Card'>
            <p>{text}</p>
        </div>  
    )
}

export default Card