import axios from "axios";
import { Show } from "../models/showfinder";


interface showObject {
    show: Show
}

export async function fetchShows(query: string) {
    const response = await axios.get<showObject[]>('https://api.tvmaze.com/search/shows?q=' + query);
    return response.data.map((d) => d.show);
}