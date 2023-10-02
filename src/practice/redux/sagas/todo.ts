import { AnyAction } from "redux";
import createSagaMiddleware from "redux-saga";
import { call, takeLatest } from "redux-saga/effects";
import { TODO_ADDED } from "../actions/todo";
import { addTodoApi } from "../apis/todo";

export const sagaMiddleware = createSagaMiddleware();

export function* addTodo(action: AnyAction): Generator<any, any, any> {
    const todo = action.payload;
    yield call(addTodoApi, todo);
}

export function* getTodoList(action: AnyAction): Generator<any, any, any> {
    const filters = action.payload;
    //const data = yield call(fetchTodoList, filters);
    // yield put()
}

export function* rootSaga() {
    yield takeLatest(TODO_ADDED, addTodo);
}