import { normalize, schema } from "normalizr";
import { AnyAction, Reducer } from "redux";
import { SHOW_CAST_FETCHED } from "../../actions/actors";
import { Actor } from "../../models/actor";

interface ActorState {
    entities: { [id: number]: Actor }
}

const initialState = {
    entities: {},
}

export const actorReducer: Reducer = (state: ActorState = initialState, action: AnyAction) => {
    switch (action.type) {
        case SHOW_CAST_FETCHED:
            const { showId, actors } = action.payload;
            const actorsEntity = new schema.Entity("actors");
            const normalized = normalize(actors, [actorsEntity]);
            const normalizedActors = normalized.entities.actors;
            return {
                ...state,
                entities: { ...state.entities, ...normalizedActors }
            }
        default:
            return state;
    }
}