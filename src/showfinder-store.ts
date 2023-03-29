import { composeWithDevTools } from "@redux-devtools/extension";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { actorReducer } from "./practice/redux/reducers/showfinder/actorsReducer";
import { showReducer} from "./practice/redux/reducers/showfinder/showReducer";
import sagaMiddleware from "./practice/redux/sagas";
import { rootSaga } from "./practice/redux/sagas/showfinder";

// export interface State {
//     show: ShowState
// } no need of thie w/ combineReducers

const showFinderStore = combineReducers({
    show: showReducer,
    actors: actorReducer,
    //add a search for actor feature
})

const store = createStore(showFinderStore,
    composeWithDevTools(applyMiddleware(sagaMiddleware)
    ))

export type State = ReturnType<typeof store.getState>;

sagaMiddleware.run(rootSaga);

export default store;