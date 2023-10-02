import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore, Reducer } from "redux";
import { initialTodoState, todoReducer, TodoState } from "./practice/redux/reducers/todos";
import { initialUserState, usersReducer, UserState } from "./practice/redux/reducers/users";
import { rootSaga, sagaMiddleware } from "./practice/redux/sagas/todo";

export interface AppState {
    todos: TodoState
    users: UserState
}

const initialAppState: AppState = { todos: initialTodoState, users: initialUserState };

const appReducer: Reducer = (state = initialAppState, action: any) => {

    return {
        todos: todoReducer(state.todos, action),
        users: usersReducer(state.users, action),
    }

}


export const todoStore = createStore(appReducer,
    composeWithDevTools(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);