import React, { useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import Card from "@material-ui/core/Card";
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import { connect } from "react-redux";

import classNames from './TrelloCard.scss'
import {editCard, deleteCard } from "../actions";


const TrelloCard = ({ text, id, listId, index, dispatch }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [cardText, setText] = useState(text);

    const handleDeleteCard = e => {
        dispatch(deleteCard(id, listId));
    };
    
    const renderEditInput = () => {
        return (
          <form className={classNames['form-card']} onSubmit={saveCard}>
            <input
                className={classNames['form-card__edit-input']}
                type="text"
                value={cardText}
                onChange={handleChange}
            />
            <button className={classNames['form-card__btn']}>
                <CheckIcon className={classNames.icon}></CheckIcon>
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
                        <Card className={classNames.card}>
                            <p className={classNames['card__text']}>{text}</p>
                            <div className={classNames['card-btn']}>
                                <button className={classNames['card-btn__edit']} onMouseDown={handleDeleteCard}>
                                    <DeleteIcon className={classNames['icon-delete']}></DeleteIcon>
                                </button>
                                <button className={classNames['card-btn__delete']} onClick={() => setIsEditing(true)}>
                                    <EditIcon className={classNames['icon-edit']}></EditIcon>
                                </button>
                            </div>
                        </Card>
                    </div> 
                )}
            </Draggable>
        )
    }
    
    return isEditing ? renderEditInput() : renderCard();
    
}

export default connect()(TrelloCard);