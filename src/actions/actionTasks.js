import { v4 as uuidv4 } from 'uuid';

export const GET_ALL_TASKS = 'GET_ALL_TASKS'

const itemsFromBackend = [
    { id: uuidv4(), content: "First task" },
    { id: uuidv4(), content: "Second task" },
    { id: uuidv4(), content: "Third task" },
    { id: uuidv4(), content: "Fourth task" },
    { id: uuidv4(), content: "Fifth task" }
];

export const getAllTasksActionCreator = () => {
    return (dispatch) => {
        dispatch(getAllTasks(itemsFromBackend))
      };
}

export const getAllTasks = (data) => { return {type: GET_ALL_TASKS, payload: data}}