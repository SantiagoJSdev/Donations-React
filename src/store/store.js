
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';

import { notaReducer } from "../reducer/notaReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


const reducers = combineReducers({
    nota: notaReducer

})

export const store = createStore(

    reducers,
    composeEnhancers(applyMiddleware(thunk))
)