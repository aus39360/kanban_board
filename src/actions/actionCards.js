import {CONSTANTS} from './index'

export const addCard = (listId, text) => { return {type: CONSTANTS.ADD_CARD, payload: {listId, text}}}

export const deleteCard = (id, listId) => { return { type: CONSTANTS.DELETE_CARD, payload: { id, listId }};};

export const editCard = (id, listId, newText) => {return {type: CONSTANTS.EDIT_CARD,payload: { id, listId, newText }};};