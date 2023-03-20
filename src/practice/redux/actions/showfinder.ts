import { Show } from "../models/showfinder";

export const SHOW_LIST_FETCH = "show list fetch";
export const SHOW_LIST_FETCHED = "show list fetched";


export const showFetchList = (query: string) => {
    return {
        type: SHOW_LIST_FETCH,
        payload: query
    }
}

export const showFetchedList = (query: string, showList: Show[]) => {
    return {
        type: SHOW_LIST_FETCHED, payload: {query, showList}
    }
}