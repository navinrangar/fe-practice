import axios from "axios";
import { Actor } from "../models/actor";
import { Show } from "../models/showfinder";


interface showObject {
    show: Show
}

interface actorObject {
    person: Actor
}

export async function fetchShows(query: string) {
    const response = await axios.get<showObject[]>('https://api.tvmaze.com/search/shows?q=' + query);
    return response.data.map((d) => d.show);
}

export async function fetchShowDetails(id: number) {
    const response = await axios.get<showObject>('https://api.tvmaze.com/shows/' + id);
    return response.data;
}

export async function fetchShowCast(id: string) {
    const response = await axios.get<actorObject[]>('https://api.tvmaze.com/shows/' + id + '/cast');    
    return response.data;
}

export async function signUp() {
    const response = await axios.get('http://localhost:3333/');
    return response;
}

export async function addTodo(data: {todo: string}) {
    const response = await axios.post('http://localhost:3333/todo/add', data);
    return response;
}