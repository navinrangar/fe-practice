import { createStore, Reducer } from "redux";
import { FAIL_INCREMENTED, PASS_INCREMENTED } from "./practice/redux/actions/actions";
import { TODO_ADDED, TODO_STATUS_CHANGE } from "./practice/redux/actions/todo";

interface State {
    passed: number,
    failed: number,
}

export interface TodoState {
    todos: [{id: number, name: string, done: boolean} | null]
}

const initialState : State = { passed: 0, failed: 0};
const initialTodoState : TodoState = {todos: [{id: 0, name: 'default', done: false}]};

const reducer : Reducer<State> = (currentState = initialState, action: any) => {
    console.log('state', currentState, 'action', action)
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

const todoReducer : Reducer = (currentState = initialTodoState, action: any) => {
    console.log('todostate', currentState, 'todoaction', action)

    switch (action.type) {
        case TODO_ADDED : {
            return {...currentState, todos: [...currentState.todos, action.payload] }
        }

        case TODO_STATUS_CHANGE : {
            const {id, done} = action.payload;
            console.log('currState', currentState);
            const newTodos = currentState.todos.map((t: any) => {
                if(t.id === id){
                    console.log('newstate', {...t, done:true})
                    return {...t, done}
                }
                return t;
            })
            return {...currentState, todos:  newTodos}
        }

        default : {
            return currentState;
        }
    }
}

const store = createStore(reducer);
export const todoStore = createStore(todoReducer);

export default store;