import React from 'react'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { connect } from 'react-redux'

import './List.css'
import TrelloCard from '../TrelloCard'
import TrelloButton from '../TrelloButton'
import { deleteList } from "../actions";


const List = ({ title, cards, listId, index, dispatch}) => {

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
                                <h3>{title}</h3>
                                <button onMouseDown={handleDeleteList}>
                                    <DeleteIcon></DeleteIcon>
                                </button>
                                <button>
                                    <EditIcon></EditIcon>
                                </button>
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