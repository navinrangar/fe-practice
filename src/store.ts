import { createStore, Reducer } from "redux";
import { FAIL_INCREMENTED, PASS_INCREMENTED } from "./practice/redux/actions/actions";
import { TODO_ADDED, TODO_FILTER, TODO_STATUS_CHANGE } from "./practice/redux/actions/todo";
import { Todo } from "./practice/redux/models/todo";

interface State {
    passed: number,
    failed: number,
}

export interface TodoState {
    todos: Todo[]
}

const initialTodoState : TodoState = {todos: [{id: 0, name: 'default', done: false}]};


const todoReducer : Reducer = (currentState = initialTodoState, action: any) => {

    switch (action.type) {
        case TODO_ADDED : {
            return {...currentState, todos: [...currentState.todos, action.payload ]}
        }

        case TODO_STATUS_CHANGE : {
            const {id, done} = action.payload;

            const newTodos = currentState.todos.map((t: Todo) => {
                if(t.id === id){
                    return {...t, done}
                }
                return t;
            })

            return {...currentState, todos: newTodos}
        }

        default : {
            return currentState;
        }
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
export const todoStore = createStore(todoReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;