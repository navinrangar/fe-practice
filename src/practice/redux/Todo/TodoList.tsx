import React, { useState } from 'react'
import { connect, useDispatch } from 'react-redux';
import { AppState } from '../../../store';
import { todoStatusChange } from '../actions/todo';
import { Todo } from '../models/todo';
import { doneListSelector, priorityListSelector, todoListSelector } from '../selectors/todo';
import TodoRow from './TodoRow';

interface TodoListProps {
    todos: Todo[];
    doneList: boolean;
    onStatusChange: (id: number, done: boolean) => void;
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

const todoMapper = (s: AppState) => (
    { todos: todoListSelector(s), doneList: false }
)

const doneMapper = (s: AppState) => (
    { todos: doneListSelector(s), doneList: true }
)

const dispatchMapper = {
    onStatusChange: todoStatusChange
}

const mapPriorityStateToProps = (s: AppState) => {
    return { todos: priorityListSelector(s, "Low"), doneList: false}
}

export const TodoComponent = connect(todoMapper, dispatchMapper)(TodoList);
export const DoneComponent = connect(doneMapper, dispatchMapper)(TodoList);
export const PriorityComponent = connect(mapPriorityStateToProps, dispatchMapper)(TodoList);