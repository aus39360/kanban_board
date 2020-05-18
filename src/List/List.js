import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'

import './List.css'
import TrelloCard from '../TrelloCard'
import TrelloButton from '../TrelloButton'


const List = ({ title, cards, listId, index}) => {
    return (
        <Draggable draggableId={String(listId)} index={index}>
            {(provided, snapshot) => (
                <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                >
                    <Droppable droppableId={String(listId)}>
                        {(provided)=> (
                            <div className='List'
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{}}
                            >
                                <h3>{title}</h3>
                                {cards.map((card, index) => <TrelloCard key={card.id} index={index} text={card.text} id={card.id} />)}
                                <TrelloButton listId={listId} />
                                {provided.placeholder}
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    )
}

export default List