import {CONSTANTS} from './index'

export const addList = (title) => { return {type: CONSTANTS.ADD_LIST, payload: title}}

export const deleteList = (listId) => { return { type: CONSTANTS.DELETE_LIST, payload: { listId }};};

export const editTitle = (listId, newTitle) => {return {type: CONSTANTS.EDIT_LIST_TITLE, payload: {listId,newTitle}};};

export const sort = (
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
    type
) => {
    return {
        type: CONSTANTS.DRAG_HAPPENED,
        payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            draggableId,
            type
        }
    }
}