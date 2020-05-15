import {  } from '../actions/actionBoard'

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
  }
]

const board = (state = initialState, action) => {
    switch (action.type) {
      
      default:
        return state;
    }
  };

export default board