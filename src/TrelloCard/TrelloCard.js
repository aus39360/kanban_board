import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Card from "@material-ui/core/Card";

import './TrelloCard.css'


const TrelloCard = ({ text, id, index }) => {
    return (
        <Draggable
            key={id}
            draggableId={String(id)}
            index={index}
        >
            {(provided, snapshot) => (
                <div 
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    /* style={{
                    ...provided.draggableProps.style
                    }} */
                >
                    <Card>
                        <p>{text}</p>
                    </Card>
                </div> 
            )}
        </Draggable>
    )
}

export default TrelloCard