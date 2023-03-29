import { ChangeEvent, memo, useEffect, useState } from "react";
import { addTodo } from "../apis/showfinder";
import ShowList from "./ShowList";

const ShowFinderHome = () => {

    const [todoValue, setTodoValue] = useState('')
    const [addRes, setAddRes] = useState<{ data: { todo: string } }>({ data: { todo: '' } });

    useEffect(() => {
        document.title = "show-finder"
    }, [])

    async function addTodoFunc(data: { todo: string }) {
        const res = await addTodo(data);
        setAddRes(res.data);
    }

    const setTodo = (e: ChangeEvent<HTMLInputElement>) => {
        setTodoValue(e.target.value);
    }

    return (
        <div className="flex flex-col mt-4 ml-6">
            <div className="flex flex-col">

                {addRes.data.todo && <li>
                    {addRes?.data.todo}
                </li>}
                <input className={"border"} type={"text"} value={todoValue} onChange={(e) => setTodo(e)} />
                <button onClick={() => addTodoFunc({ todo: todoValue })}> Add Todo </button>
            </div>
            <h1 className="font-bold">ShowFinderHome</h1>
            <ShowList />
        </div>
    )
}

export default memo(ShowFinderHome);