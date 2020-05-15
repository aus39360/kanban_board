import { combineReducers } from 'redux'
import tasks from './tasks'
import board from './board'



export default combineReducers({
    tasks, board
})