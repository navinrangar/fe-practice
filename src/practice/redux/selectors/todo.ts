import { createSelector } from "reselect";
import { AppState } from "../../../store";
import { ObjectKeys } from "../../../utils";

const todoStateSelector = (state: AppState) => state.todos;
//const prioritySelector = (state: AppState) => state.priority;

//todoArrayStateSelectors

export const todoArrayStateSelector = (state: AppState) => Object.keys(state.todos).map((id) => state.todos[id as any])

export const todoArrayStateSelector2 = createSelector(todoStateSelector, 
    (todoState : any) => ObjectKeys<number>(todoState).map((todoId : any) => todoState[todoId]))


//todoListSelectors

export const todoListSelector = (state: AppState) => 
{
    const todos = todoArrayStateSelector(state).filter((todo: any) => !todo.done)
    return todos;
}

export const todoListSelector2 = createSelector(todoArrayStateSelector, (todoState) => todoState.filter((todo: any) => !todo.done));


//doneListSelectors

export const doneListSelector = (state: AppState) => 
{
    const done = todoArrayStateSelector(state).filter((todo: any) => todo.done)
    return done;
}

export const doneListSelector2 = createSelector(todoArrayStateSelector, (todoState) => todoState.filter((todo: any) => todo.done));


//prioritySelectors

export const priorityListSelector = (state: AppState, priority: string) => {
    const priorityTodo = todoArrayStateSelector(state).filter((todo: any) =>  {
        if(!todo.done && todo.priority === priority)
        return todo;
    })
    return priorityTodo;
}

//export const priorityListSelector2 = createSelector(todoArrayStateSelector, (todoState) => todoState.filter((todo: any) => ))


export const userStateSelector = (state: AppState) => Object.keys(state.users).map((id) => state.users[id as any]);


//UserListSelector
export const userListSelector = (state: AppState) => {
    return userStateSelector(state);
}

export const userListSelector2 = createSelector(userListSelector, (users) => userListSelector)