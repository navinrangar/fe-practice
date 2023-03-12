import { createStore, Reducer } from "redux";
import { FAIL_INCREMENTED, PASS_INCREMENTED } from "./practice/redux/actions/actions";
import { initialTodoState, todoReducer, TodoState } from "./practice/redux/reducers/todos";
import { initialUserState, usersReducer, UserState } from "./practice/redux/reducers/users";

interface State {
    passed: number,
    failed: number,
}

export interface AppState {
    todos: TodoState
    users: UserState
}

const initialAppState : AppState = {todos: initialTodoState, users: initialUserState};

const appReducer : Reducer = (state = initialAppState, action: any) => {

    return {
        todos: todoReducer(state.todos, action),
        users: usersReducer(state.user, action)
    }

}

const initialState : State = { passed: 0, failed: 0};
const reducer : Reducer<State> = (currentState = initialState, action: any) => {
    switch (action.type) {
        case PASS_INCREMENTED : {
            return {...currentState, passed: currentState.passed + 1}
        }

        case FAIL_INCREMENTED : {
            return {...currentState, failed: currentState.failed + 1}
        }

        default : {
            return currentState;
        }
    }

}


const store = createStore(reducer);
export const todoStore = createStore(appReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;