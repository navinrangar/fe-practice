import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { TodoState } from '../../../store';
import { todoStatusChange } from '../actions/todo';
import { doneListSelector, priorityListSelector, todoListSelector } from '../selectors/todo';
import TodoRow from './TodoRow';

interface TodoListProps {
    todos: [];
    doneList: boolean;
    onStatusChange: (id: string, done: boolean) => void;
}

function TodoList({ todos, doneList, onStatusChange }: TodoListProps) {

    return (
        <div>
            <div className="flex flex-col gap-2">
                <label className='font-semibold'> {doneList ? 'Done' : 'Todo'} List </label>
                {todos?.map((todo: any) => {
                    return (
                        todos.length && (
                            <TodoRow todo={todo} onStatusChange={onStatusChange} />
                        )
                    )
                })}
            </div>
        </div>
    )
}

export default TodoList

const todoMapper = (s: TodoState) => (
    { todos: todoListSelector(s), doneList: false }
)

const doneMapper = (s: TodoState) => (
    { todos: doneListSelector(s), doneList: true }
)

const dispatchMapper = {
    onStatusChange: todoStatusChange
}

const mapPriorityStateToProps = (s: TodoState) => {
    return { todos: priorityListSelector(s, "Low"), doneList: false}
}

export const TodoComponent = connect(todoMapper, dispatchMapper)(TodoList);
export const DoneComponent = connect(doneMapper, dispatchMapper)(TodoList);
export const PriorityComponent = connect(mapPriorityStateToProps, dispatchMapper)(TodoList);