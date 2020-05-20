import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Card from "@material-ui/core/Card";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import { connect } from "react-redux";

import './TrelloCard.css'
import {editCard, deleteCard } from "../actions";


const TrelloCard = ({ text, id, listId, index, dispatch }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [cardText, setText] = useState(text);

    const handleDeleteCard = e => {
        dispatch(deleteCard(id, listId));
    };
    
    const renderEditInput = () => {
        return (
          <form onSubmit={saveCard}>
            <input
              type="text"
              value={cardText}
              onChange={handleChange}
            />
            <button>
                <CheckIcon></CheckIcon>
            </button>
          </form>
        );
    };

    const handleChange = e => {
        setText(e.target.value);
    };
        
    const saveCard = e => {
        e.preventDefault();
    
        dispatch(editCard(id, listId, cardText));
        setIsEditing(false);
    };

    const renderCard = () => {
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
                            <button onClick={() => setIsEditing(true)}>
                                <EditIcon></EditIcon>
                            </button>
                        </Card>
                    </div> 
                )}
            </Draggable>
        )
    }
    
    return isEditing ? renderEditInput() : renderCard();
    
}

export default connect()(TrelloCard);