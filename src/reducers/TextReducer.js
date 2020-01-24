import { SET_NEW_TEXT } from '../actions/TextAction';
import { SET_INPUT_TEXT } from '../actions/TextAction';

/**
 * Función reductura para setear el texto en el estado
 * @param state Estado actual de la aplicación
 * @param action Acción a ser ejecutada dentro del store
 */
export const textReducer = (state, action) => {
    switch(action.type) {
        case SET_NEW_TEXT: 
            return { ...state, responseServer: action.value }
        case SET_INPUT_TEXT:
            return { ...state, inputField: action.value }
        default:
            break;
    }
    return state;
}