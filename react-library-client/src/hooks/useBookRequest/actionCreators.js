import { BOOK_FETCHING, BOOK_SUCCESS, BOOK_ERROR } from './actionTypes';

export const fetching = () => ({ type: BOOK_FETCHING });
export const success = response => ({ type: BOOK_SUCCESS, response });
export const error = response => ({ type: BOOK_ERROR, response });
