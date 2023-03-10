export const todoListSelector = (state: any) => 
{
    const todos = state.todos.filter((todo: any) => !todo.done)
    return todos;
}

export const doneListSelector = (state: any) => 
{
    const done = state.todos.filter((todo: any) => todo.done)
    return done;
}

export const priorityListSelector = (state: any, priority: string) => {
    const priorityTodo = state.todos.filter((todo: any) =>  {
        if(!todo.done && todo.priority === priority)
        return todo;
    })
    return priorityTodo;
}