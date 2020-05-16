import React from 'react'

import './List.css'
import Card from '../Card'
import TrelloButton from '../TrelloButton'


const List = ({ title, cards, listId}) => {
    return (
        <div className='List'>
            <h3>{title}</h3>
            {cards.map(card => <Card key={card.id} text={card.text} />)}
            <TrelloButton listId={listId} />
        </div>
    )
}

export default List