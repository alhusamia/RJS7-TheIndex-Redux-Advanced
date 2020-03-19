import authorsRed from './authors';
import booksRed from './books';
 
import {combineReducers} from 'redux';

const rootReducer = combineReducers({
    authorsState:authorsRed,
    booksState:booksRed
});

export default rootReducer
