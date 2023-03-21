import { normalize, schema } from "normalizr"
import { Reducer } from "redux"
import { AnyAction } from "redux"
import { SHOW_CAST_FETCHED } from "../../actions/actors"
import { SHOW_DETAILS_FETCH, SHOW_DETAILS_FETCHED, SHOW_LIST_FETCH, SHOW_LIST_FETCHED } from "../../actions/showfinder"
import { Actor } from "../../models/actor"
import { Show } from "../../models/showfinder"

interface ShowState {
    entities: { [id: number]: Show }
    againstQuery: { [key: string]: number[] }
    query: string
    showLoading: boolean
    actors: { [showId: number]: number[] }
}

const showInitialState = {
    entities: {},
    againstQuery: {},
    query: '',
    showLoading: false,
    actors: {}
}

export const showReducer: Reducer = (state: ShowState = showInitialState, action: AnyAction) => {
    switch (action.type) {
        case SHOW_LIST_FETCH:
            return { ...state, query: action.payload }

        case SHOW_LIST_FETCHED:
            const { query, showList } = action.payload as { query: string, showList: Show[] };

            const showListEntity = new schema.Entity("showList");
            const normalized = normalize(showList, [showListEntity]);
            const normalizedShowList = normalized.entities.showList;
            const ids = normalized.result;
            //const ids = showList.map((show) => show.id);
            return {
                ...state,
                entities: { ...state.entities, ...normalizedShowList },
                againstQuery: { ...state.againstQuery, [query]: ids }
            }


        case SHOW_DETAILS_FETCH:
            const showId = action.payload as { id: number }
            return {
                ...state,
                showLoading: true,
            }

        case SHOW_DETAILS_FETCHED:
            const { id, showDetails } = action.payload as { id: number, showDetails: Show }
            return {
                ...state,
                entities: { ...state.entities, [id]: showDetails },
                showLoading: false,
            }

        case SHOW_CAST_FETCHED:
            const data = action.payload as {
                showId: number
                actors: Actor[]
            }
            const actorIds = data.actors.map((a: Actor) => a.id);

            return {
                ...state,
                actors: { ...state.actors, [data.showId]: actorIds }
            }

        default:
            return state;
    }
}
