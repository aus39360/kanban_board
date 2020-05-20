import React, { useState } from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import CheckIcon from '@material-ui/icons/Check';
import { connect } from 'react-redux'

import './List.css'
import TrelloCard from '../TrelloCard'
import TrelloButton from '../TrelloButton'
import { editTitle,deleteList } from "../actions";


const List = ({ title, cards, listId, index, dispatch}) => {
    const [isEditing, setIsEditing] = useState(false);
    const [listTitle, setListTitle] = useState(title);

    const renderEditInput = () => {
        return (
          <form onSubmit={handleFinishEditing}>
            <input
              type="text"
              value={listTitle}
              onChange={handleChange}
            />
            <button>
                <CheckIcon></CheckIcon>
            </button>
          </form>
        );
    };

    const handleChange = e => {
/*         e.preventDefault(); */
        setListTitle(e.target.value);
      };

    const handleFinishEditing = e => {
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
                            <div className='List'
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                                style={{}}
                            >
                                {isEditing ? (
                                    renderEditInput()
                                ) : (
                                    <div>
                                        <h3>{title}</h3>
                                        <button onClick={handleDeleteList}>
                                            <DeleteIcon></DeleteIcon>
                                        </button>
                                        <button onClick={() => setIsEditing(true)}>
                                            <EditIcon></EditIcon>
                                        </button>
                                    </div>
                                )}
                                    {cards.map((card, index) => <TrelloCard key={card.id} index={index} text={card.text} id={card.id} listId={listId} />)}
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

export default connect()(List);