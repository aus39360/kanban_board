import { v4 as uuidv4 } from 'uuid';

import {CONSTANTS} from '../actions'


const initialState = [
  {
    title:'Планы на месяц',
    id: uuidv4(),
    cards: [
      {
        id: uuidv4(),
        text: 'Пройти курс по React'
      },
      {
        id: uuidv4(),
        text: 'Отметить день рождения'
      },
      {
        id: uuidv4(),
        text: 'Записаться на курсы английского языка, чтобы уехать жить в Лондон'
      }
    ]
  },
  {
    title:'Планы на день',
    id: uuidv4(),
    cards: [
      {
        id: uuidv4(),
        text: 'Пройти курс по React'
      },
      {
        id: uuidv4(),
        text: 'Отметить день рождения'
      },
      {
        id: uuidv4(),
        text: 'Записаться на курсы английского языка, чтобы уехать жить в Лондон'
      }
    ]
  }
]

const board = (state = initialState, action) => {
    switch (action.type) {
      case CONSTANTS.ADD_LIST:
        const newList = {
          title: action.payload,
          cards: [],
          id: uuidv4()
        }
        return [...state, newList]
      case CONSTANTS.ADD_CARD: {
        const newCard = {
          text: action.payload.text,
          id: uuidv4()
        }
        
        const newState = state.map(list=>{
          if ( list.id === action.payload.listId ) {
            return {
              ...list,
              cards: [...list.cards, newCard]
            }
          } else {
            return list
          }
        })

          return newState;
        }
        case CONSTANTS.DRAG_HAPPENED:
          const {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexStart,
            droppableIndexEnd,
            type
          } = action.payload
          
          const newState = [...state];

//////////////////////
          if(type === 'list') {
            const list = newState.splice(droppableIndexStart, 1)
            newState.splice(droppableIndexEnd, 0, ...list)
            return newState;
          }

//////////////////////
          if(droppableIdStart === droppableIdEnd) {
            const list = state.find(list=> droppableIdStart === list.id)
            const card = list.cards.splice(droppableIndexStart, 1)
            list.cards.splice(droppableIndexEnd, 0, ...card);
          }
//////////////////////
          if(droppableIdStart !== droppableIdEnd) {
            const listStart = state.find(list => droppableIdStart === list.id)

            const card = listStart.cards.splice(droppableIndexStart, 1)

            const listEnd = state.find(list => droppableIdEnd === list.id)

            listEnd.cards.splice(droppableIndexEnd, 0, ...card)
          }

          return newState;

      default:
        return state;
    }
  };

export default board