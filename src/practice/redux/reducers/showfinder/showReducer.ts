import { normalize, schema } from "normalizr"
import { Reducer } from "redux"
import { AnyAction } from "redux"
import { SHOW_LIST_FETCH, SHOW_LIST_FETCHED } from "../../actions/showfinder"
import { Show } from "../../models/showfinder"

export interface ShowState {
    entities: { [id: number]: Show }
    againstQuery: { [key: string]: number[] }
    query: string
}

export const showInitialState = {
    entities: {},
    againstQuery: {},
    query: ''
}

export const showReducer : Reducer= (state: ShowState, action: AnyAction) => {
    switch(action.type){
    case SHOW_LIST_FETCH:
        return { ...state, query: action.payload }

    case SHOW_LIST_FETCHED:
        const { query, showList } = action.payload as { query: string, showList: Show[] };

        const showListEntity = new schema.Entity("showList");
        const normalized = normalize(showList, [showListEntity]);
        const normalizedShowList = normalized.entities.showList;
        const ids = showList.map((show) => show.id);
        return {
            ...state, 
               entities: { ...state.entities, ...normalizedShowList },
            againstQuery: { ...state.againstQuery, [query]: ids }
        }

    default:
        return state;
    }
}
