export const TODO_ADDED = "todo added";
export const TODO_STATUS_CHANGE = "todo status change";
export const TODO_FILTER = "todo filter";


export const todoCreator = (id: string, todoTitle: string, priority: string) => {
    return {type:TODO_ADDED, payload: {id: id, name: todoTitle, done: false, priority: priority}, }
}

export const todoStatusChange = (id: string, done: boolean) => {
    return { type: TODO_STATUS_CHANGE, payload: { id: id, done: done } }
}

export const todoFilter = (priority: string) => {
    return {type: TODO_FILTER, payload: {priority}}
}