export const TODO_ADDED = "todo added";
export const TODO_STATUS_CHANGE = "todo status change";



export const todoCreator = (id: string, todoTitle: string) => {
    return {type:TODO_ADDED, payload: {id: id, name: todoTitle, done: false}, }
}

export const todoStatusChange = (id: string, done: boolean) => {
    return { type: TODO_STATUS_CHANGE, payload: { id: id, done: done } }
}