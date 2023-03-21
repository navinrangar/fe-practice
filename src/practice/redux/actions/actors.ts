import { Actor } from "../models/actor";

export const SHOW_CAST_FETCH = "show cast fetch";
export const SHOW_CAST_FETCHED = "show cast fetched";

export const showCastFetchAction = (showId: number) => {
    return {
        type:  SHOW_CAST_FETCH,
        payload: showId,
    }
}

export const showCastFetchedAction = (showId: number, actors: Actor[]) => {
    return {
        type:  SHOW_CAST_FETCHED,
        payload: {showId, actors},
    }
}