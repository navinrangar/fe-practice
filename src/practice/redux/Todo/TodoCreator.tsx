import React, { ChangeEvent, memo } from 'react'
import { connect } from 'react-redux';
import { todoCreator } from '../actions/todo';
import { v4 as uuidv4 } from "uuid";

type TodoCreatorProps  = {
    onSubmit: (todoText: string, priority: string) => void;
}

const TodoCreator = ({onSubmit} : TodoCreatorProps) => {

    const [todo, setTodo] = React.useState<string>('')
    const [priority, setPriority] = React.useState<string>('Low')

    //const dispatch = useDispatch();

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setTodo(e.target.value)
    }

    const handlePriorityChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setPriority(e.target.value);
    }

    //const addTodoAction = { type: TODO_ADDED, payload: { id: uuidv4(), name: todo, done: false } };
    //const addTodoAction = todoCreator(uuidv4(), todo)

    const handleSubmit = () => {
        if (todo){
       //dispatch(addTodoAction);
        onSubmit(todo, priority);
        setTodo('');
        }
    }


    return (
        <div className="inline-block gap-3 border-1 outline my-4">
            <input className="outline-none" type="text" value={todo} onChange={(e) => handleChange(e)} />
            <select className='outline-none' value={priority} onChange={(e) => handlePriorityChange(e)}>
                <option> High </option>
                <option> Moderate </option>
                <option> Low </option>
            </select>
            <button className="p-1 bg-white" type="submit" onClick={() => handleSubmit()}> + </button>
        </div>
    )
}

export default memo(TodoCreator);


const mapDispatchToProps = {
    onSubmit: todoCreator
}

export const TodoMaker = connect(undefined, mapDispatchToProps)(TodoCreator);