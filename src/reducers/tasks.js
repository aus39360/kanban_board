import { GET_ALL_TASKS } from '../actions/actionTasks'

const initialValues = {
    items: []
}

const tasks = (state = initialValues, action) => {
   switch(action.type) {
        case GET_ALL_TASKS:
            return { ...state, items:  [...action.payload ]}
        default:
            return state
   }
}
  
 export default tasks