import {CONSTANTS} from '../actions'

let listId = 2
let cardId = 2

const initialState = [
  {
    title:'Планы на месяц',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'Пройти курс по React'
      },
      {
        id: 1,
        text: 'Отметить день рождения'
      },
      {
        id: 2,
        text: 'Записаться на курсы английского языка, чтобы уехать жить в Лондон'
      }
    ]
  },
  {
    title:'Планы на день',
    id: 1,
    cards: [
      {
        id: 0,
        text: 'Пройти курс по React'
      },
      {
        id: 1,
        text: 'Отметить день рождения'
      },
      {
        id: 2,
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
          id: listId
        }
        listId +=1
        return [...state, newList]
      case CONSTANTS.ADD_CARD:
        const newCard = {
          text: action.payload.text,
          id: cardId
        }
        cardId +=1
        
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

      default:
        return state;
    }
  };

export default board