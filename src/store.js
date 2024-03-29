import {createStore, applyMiddleware} from "redux";
import reducer from "./reducers";
import thunkMiddleware from 'redux-thunk';


const logMiddleware = (store) => (dispatch) => (action) => {
    console.log(action.type);
    console.log(action.payload);
    console.log(store.getState());
    return dispatch(action);
};

const stringMiddleware = (store) => (dispatch) => (action) => {
    if (typeof action === 'string') {
        action = {
            type: action
        }
    }
    return dispatch(action);
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware, stringMiddleware, logMiddleware));


store.subscribe(() => console.log(`store is updated`));


export default store;
