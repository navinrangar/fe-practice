import { createSlice } from "@reduxjs/toolkit"
import { Show } from "../models/showfinder"
import { normalize } from "normalizr"

interface State {
    entities: { [id: number]: Show }
    againstQuery: { [key: string]: number[] }
    query: string
    showLoading: boolean
    actors: { [showId: number]: number[] }
}

const initialState = {
    entities: {},
    againstQuery: {},
    query: '',
    showLoading: false,
    actors: {}
}

const showsSlice = createSlice(
    {
        name: "shows",
        initialState,
        reducers: {
            showLoaded: (state, action) => {

            }
        }
    }
)


function showLoaded(state: State, action: Show[]) {
    // const { query, showList } = action.payload as { query: string, showList: Show[] };

    // const showListEntity = new schema.Entity("showList");
    // const normalized = normalize(showList, [showListEntity]);
    // const normalizedShowList = normalized.entities.showList;
    // const ids = normalized.result;
    // //const ids = showList.map((show) => show.id);
    // return {
    //     ...state,
    //     entities: { ...state.entities, ...normalizedShowList },
    //     againstQuery: { ...state.againstQuery, [query]: ids }
    // }
}