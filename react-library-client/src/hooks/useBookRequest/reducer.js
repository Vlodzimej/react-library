import {
    BOOK_FETCHING,
    BOOK_SUCCESS,
    BOOK_ERROR,
} from './actionTypes';

export const initialState = {
    status: null,
    response: null,
};

const reducer = (state = initialState, { type, response } = {}) => {
    switch (type) {
     
        case BOOK_FETCHING:
            return { ...initialState, status: BOOK_FETCHING };
        case BOOK_SUCCESS:
            return { ...state, status: BOOK_SUCCESS, response };
        case BOOK_ERROR:
            return { ...state, status: BOOK_ERROR, response };
        default:
            return state;
    }
};

export default reducer;
