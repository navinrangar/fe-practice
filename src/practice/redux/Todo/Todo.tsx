import React from "react"
import { useDispatch, useSelector } from "react-redux";
import { todoCreator, TODO_ADDED, TODO_STATUS_CHANGE } from "../actions/todo";
import { todoListSelector } from "../selectors/todo";
import { v4 as uuidv4 } from "uuid";
import { DoneComponent, TodoComponent } from "./TodoList";


const Todo = () => {

    const [todo, setTodo] = React.useState('')

    const dispatch = useDispatch();

    const inputChange = (e: any) => {
        setTodo(e.target.value)
    }

    //const addTodoAction = { type: TODO_ADDED, payload: { id: uuidv4(), name: todo, done: false } };
    const addTodoAction = todoCreator(uuidv4(), todo)

    const onAddTodo = () => {
        if (todo)
            dispatch(addTodoAction);
            setTodo('');
    }

    return (
        <div>
            <TodoComponent />
            <div className="flex gap-3 border-1 outline my-4">
                <input className="outline-none" type="text" value={todo} onChange={(e) => inputChange(e)} />
                <button className="p-1 bg-white" type="submit" onClick={() => onAddTodo()}> + </button>
            </div>
            <DoneComponent />
        </div>

    )
}

export default Todo;