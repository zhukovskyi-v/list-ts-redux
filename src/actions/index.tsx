import {ADD_TODO, DELETE_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER, VisibilityFilter} from '../constants';

interface addTodoAction {
    type: typeof ADD_TODO;
    id: number;
    text: string;
}

export const addTodo = (text: string): TodoAction => ({
    type: ADD_TODO,
    id: Date.now(),
    text: text
});

interface deleteTodoAction {
    type: typeof DELETE_TODO;
    id: number;
}

export const deleteTodo = (id: number): TodoAction => ({
    type: DELETE_TODO,
    id: id
});

interface toggleTodoAction {
    type: typeof TOGGLE_TODO;
    id: number;
}

export const toggleTodo = (id: number): TodoAction => ({
    type: TOGGLE_TODO,
    id: id
});

interface setVisibilityFilter {
    type: typeof SET_VISIBILITY_FILTER;
    filter: VisibilityFilter;
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export const setVisibilityFilter = (filter: VisibilityFilter): TodoAction => ({
    type: SET_VISIBILITY_FILTER,
    filter: filter
});

export type TodoAction = addTodoAction | toggleTodoAction | deleteTodoAction | setVisibilityFilter