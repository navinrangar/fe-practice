import { AnyAction, Reducer } from "redux";
import { TODO_ADDED, TODO_STATUS_CHANGE } from "../actions/todo";
import { Todo } from "../models/todo";

export interface TodoState {
    [id: number] : Todo
}

export const initialTodoState = {};

export const todoReducer : Reducer<TodoState> = (state: TodoState = initialTodoState, action: AnyAction) => {
    switch (action.type) {
        case TODO_ADDED : {
            const todo = action.payload;
            return {...state, [todo.id]: todo}
        }

        case TODO_STATUS_CHANGE : {
            const {id, done} = action.payload;

            return {...state, [id]: {...state[id], done}}
        }

        default : {
            return state;
        }
}
}