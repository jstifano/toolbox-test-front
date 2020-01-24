import { createStore } from 'redux';
import { textReducer } from '../reducers/TextReducer';

const initialState = {
    responseServer: '',
    inputField: ''
}

export const store = createStore(
    textReducer, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
