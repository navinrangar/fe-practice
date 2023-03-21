import createSagaMiddleware from "@redux-saga/core";
import { AnyAction } from "redux";
import { call, delay, put, takeEvery, takeLatest, takeLeading } from "redux-saga/effects";
import { showCastFetchedAction, SHOW_CAST_FETCH } from "../actions/actors";
import { showDetailsFetched, showFetchedList, SHOW_DETAILS_FETCH, SHOW_LIST_FETCH } from "../actions/showfinder";
import { fetchShowCast, fetchShowDetails, fetchShows } from "../apis/showfinder";
import { Actor } from "../models/actor";

export const sagaMiddleware = createSagaMiddleware();

export function* getShowList(action: AnyAction): Generator<any, any, any> {
    const query = action.payload;
    yield delay(500);
    if (!query) {
        return;
    }
    const data = yield call(fetchShows, query);
    yield put(showFetchedList(query, data));
}

export function* getShowDetails(action: AnyAction): Generator<any, any, any> {
    const id = action.payload;
    const data = yield call(fetchShowDetails, id);
    yield put(showDetailsFetched(id, data));
}


export function* getShowCast(action: AnyAction): Generator<any, any, any> {
    const showId = action.payload;
    const data: { person: Actor }[] = yield call(fetchShowCast, showId);
    const actors = data.map((d) => d.person);
    console.log('actors', actors);
    yield put(showCastFetchedAction(showId, actors));
}

export function* rootSaga() {
    yield takeLatest(SHOW_LIST_FETCH, getShowList);
    yield takeEvery(SHOW_DETAILS_FETCH, getShowDetails);
    yield takeEvery(SHOW_CAST_FETCH, getShowCast);
}