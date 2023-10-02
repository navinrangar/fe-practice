import axios from "axios";

export async function addTodoApi(todo: {}) {
    await axios.post('http://localhost:3333/todo', todo)
}