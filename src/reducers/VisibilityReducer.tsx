import {SET_VISIBILITY_FILTER, SHOW_ALL, VisibilityFilter} from "../constants";
import {VisibilityState} from '../store'
import {TodoAction} from '../actions';

const initialState: VisibilityState = {
    filter: SHOW_ALL as VisibilityFilter
}

export const visibilityReducer = (state: VisibilityState = initialState, action: TodoAction): VisibilityState => {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return {
                filter: action.filter
            };
        default:
            return state;
    }
}