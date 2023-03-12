import React, { useCallback } from 'react'


interface TodoRowProps {
    todo: { id: number, name: string, done: boolean },
    onStatusChange: (id: number, done: boolean) => void;
}

const TodoRow = ({ todo, onStatusChange }: TodoRowProps) => {

    const { id, name, done } = todo;

    const handleChange = useCallback(() => {
        onStatusChange(id, !done);
    }, [id, done])

    return (
        <div>
            <li className="flex gap-2">
                <div className='flex gap-2'>
                    <input type={"checkbox"} checked={done} className="text-xs cursor-pointer" onClick={() => handleChange()} />
                    <ul className={todo?.done ? 'overline' : 'underline'}> {todo?.name} </ul>
                </div>
            </li>
        </div>
    )
}

export default TodoRow