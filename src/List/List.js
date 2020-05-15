import React, { useState } from 'react'

import './List.css'
import Card from '../Card'
import Button from '../Button'


const List = ({ title, cards}) => {
    return (
        <div className='List'>
            <h3>{title}</h3>
            {cards.map(card => <Card key={card.id} text={card.text} />)}
            <Button />
        </div>
    )
}

export default List