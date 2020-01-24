// Constante para manipular la acción de setear un nuevo texto.
export const SET_NEW_TEXT = 'SET_NEW_TEXT';
export const SET_INPUT_TEXT = 'SET_INPUT_TEXT';

// Creador de la acción para setear un nuevo texto
export const setNewText = value => ({type: SET_NEW_TEXT, value});
export const setInputText = value => ({type: SET_INPUT_TEXT, value});