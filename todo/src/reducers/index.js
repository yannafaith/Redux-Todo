import { TOGGLE_TODO, ADD_TODO } from "../actions";

const initialState = {
    todos: [{task: '', completed: false}]
}; 


// might need to change names in case return statements 
const reducer = (state = initialState, action) => {
    console.log('reducer is working');
    switch (action.type) {
        case(ADD_TODO): {
            return {
                ...state,
                todos: [...state.todos, {task: action.payload, completed: false}]}
        };
        case(TOGGLE_TODO): {
            return {...state, completed: action.payload}
        };
        default: return state;
    };
};

export default reducer; 
