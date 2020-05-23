import React, { useState } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import { connect } from 'react-redux'

import classNames from './List.scss'
import TrelloCard from '../TrelloCard'
import TrelloButton from '../TrelloButton'
import { editTitle,deleteList } from "../actions";


const List = ({ title, cards, listId, index, dispatch }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [listTitle, setListTitle] = useState(title);

    const renderEditInput = () => {
        return (
          <form className={classNames.form} onSubmit={handleFinishEditing}>
            <input
                className={classNames['form__edit-input']}
                type="text"
                value={listTitle}
                onChange={handleChange}
            />
            <button className={classNames['form-btn']}>
                <CheckIcon className={classNames.icon}></CheckIcon>
            </button>
          </form>
        );
    };

    const handleChange = e => {
        setListTitle(e.target.value);
      };

    const handleFinishEditing = e => {
        e.preventDefault();

        setIsEditing(false);
        dispatch(editTitle(listId, listTitle));
    };

    const handleDeleteList = () => {
        dispatch(deleteList(listId));
    };

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
                            <div className={classNames.List}
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{}}
                            >
                                {isEditing ? (
                                    renderEditInput()
                                ) : (
                                    <div className={classNames['list-heading']}>
                                        <h3 className={classNames['list-heading__title']}>{title}</h3>
                                        <div className={classNames['list-btn']}>
                                            <button className={classNames['list-btn__edit']} onClick={() => setIsEditing(true)}>
                                                <EditIcon className={classNames['icon-edit']}></EditIcon>
                                            </button>
                                            <button className={classNames['list-btn__delete']} onClick={handleDeleteList}>
                                                <DeleteIcon className={classNames['icon-delete']}></DeleteIcon>
                                            </button>
                                        </div>
                                    </div>
                                )}
                                    {cards.map((card, index) => <TrelloCard key={card.id} index={index} text={card.text} id={card.id} listId={listId} />)}
                                    {provided.placeholder}
                                    <TrelloButton listId={listId} />
                            </div>
                        )}
                    </Droppable>
                </div>
            )}
        </Draggable>
    )
}

export default connect()(List);