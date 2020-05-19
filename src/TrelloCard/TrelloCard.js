import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Card from "@material-ui/core/Card";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from "react-redux";

import './TrelloCard.css'
import {deleteCard } from "../actions";


const TrelloCard = ({ text, id, listId, index, dispatch }) => {

    const handleDeleteCard = e => {
        dispatch(deleteCard(id, listId));
    };
    

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
                        <button onMouseDown={handleDeleteCard}>
                            <DeleteIcon></DeleteIcon>
                        </button>
                        <button>
                            <EditIcon></EditIcon>
                        </button>
                    </Card>
                </div> 
            )}
        </Draggable>
    )
}

export default connect()(TrelloCard);