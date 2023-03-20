import { composeWithDevTools } from "@redux-devtools/extension";
import { normalize, schema } from "normalizr";
import { AnyAction, applyMiddleware, createStore, Reducer } from "redux";
import { SHOW_LIST_FETCH, SHOW_LIST_FETCHED } from "./practice/redux/actions/showfinder";
import { Show } from "./practice/redux/models/showfinder";
import { showInitialState, showReducer, ShowState } from "./practice/redux/reducers/showfinder/showReducer";
import sagaMiddleware from "./practice/redux/sagas";
import { rootSaga } from "./practice/redux/sagas/showfinder";

export interface State {
    show: ShowState
}

const initialState = {
    show: showInitialState
}

const showFinderStore: Reducer<State> = (state: State = initialState, action: AnyAction) => {

   return {
    show: showReducer(state.show, action),
   }
}

const store = createStore(showFinderStore,
    composeWithDevTools(applyMiddleware(sagaMiddleware)
    ))

sagaMiddleware.run(rootSaga);

export default store;