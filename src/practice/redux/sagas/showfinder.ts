import createSagaMiddleware from "@redux-saga/core";
import { AnyAction } from "redux";
import { call, delay, put, takeLatest, takeLeading } from "redux-saga/effects";
import { showFetchedList, SHOW_LIST_FETCH } from "../actions/showfinder";
import { fetchShows } from "../apis/showfinder";

export const sagaMiddleware = createSagaMiddleware();

export function* getShowList(action: AnyAction): Generator<any, any, any> {        
    const query = action.payload;
    yield delay(500);
    if (!query){
        return;
    }
    const data = yield call(fetchShows, query);    
    yield put(showFetchedList(query, data));
}

export function* rootSaga() {
    yield takeLatest(SHOW_LIST_FETCH, getShowList)
}