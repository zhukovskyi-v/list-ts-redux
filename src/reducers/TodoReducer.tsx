import {ADD_TODO, DELETE_TODO, TOGGLE_TODO} from "../constants";
import {TodoAction} from '../actions';
import {TodoState} from "../store"

const initialState: TodoState = {
    todos: [
        {completed: false, id: 15113318791, text: "task 0"},
        {completed: true, id: 615113318791, text: "task 1"},
        {completed: false, id: 1613318791, text: "task 2"},
        {completed: false, id: 163318791, text: "task 3"}
    ]
}

export const todoReducer = (state: TodoState = initialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case ADD_TODO:
            console.table(state)
            return {
                todos: [...state.todos, {
                    id: action.id,
                    text: action.text,
                    completed: false
                }]
            }
        case DELETE_TODO:
            return {
                todos: state.todos.filter(todo => todo.id !== action.id)
            };
        case TOGGLE_TODO:
            return {
                todos: state.todos.map(todo => todo.id === action.id ? {...todo, completed: !todo.completed} : todo)
            };
        default:
            return state;
    }
}