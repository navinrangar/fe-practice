import React, { useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { todoCreator, TODO_ADDED, TODO_STATUS_CHANGE } from "../actions/todo";
import { todoListSelector } from "../selectors/todo";
import { v4 as uuidv4 } from "uuid";
import { DoneComponent, PriorityComponent, TodoComponent } from "./TodoList";
import { TodoMaker } from "./TodoCreator";


const Todo = () => {

    const [priority, setPriority] = useState('Low');

    const handlePriorityChange = (e: any) => {
        setPriority(e.target.value)
    }

    return (
        <div>
             <select className='outline-none' value={priority} onChange={(e) => handlePriorityChange(e)}>
                <option> High </option>
                <option> Moderate </option>
                <option> Low </option>
            </select>
            <TodoComponent/>
            <PriorityComponent/>
            <TodoMaker />
            <DoneComponent/>
        </div>

    )
}

export default Todo;