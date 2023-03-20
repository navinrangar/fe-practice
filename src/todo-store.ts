import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, createStore, Reducer } from "redux";
import { FAIL_INCREMENTED, PASS_INCREMENTED } from "./practice/redux/actions/actions";
import { initialTodoState, todoReducer, TodoState } from "./practice/redux/reducers/todos";
import { initialUserState, usersReducer, UserState } from "./practice/redux/reducers/users";
import sagaMiddleware, { rootSaga } from "./practice/redux/sagas";

interface State {
    passed: number,
    failed: number,
}

export interface AppState {
    todos: TodoState
    users: UserState
}

const initialAppState: AppState = { todos: initialTodoState, users: initialUserState};

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