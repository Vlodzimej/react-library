import React, { useContext, useEffect } from 'react';
import useApiRequest from '../hooks/useBookRequest';
import {
    BOOK_FETCHING,
    BOOK_SUCCESS,
    BOOK_ERROR,
} from '../hooks/useBookRequest/actionTypes';
import { BookContext } from './context';

export const Book = () => {
    const [bookId] = useContext(BookContext);
    const [{ status, response }, makeRequest] = useApiRequest(
        `http://localhost:3001/api/book/${bookId}`,
        {
            verb: 'get',
        }
    );

    useEffect(() => {
        makeRequest();
    }, [bookId]);

    return (
        <div className="api-request">
            {status === BOOK_FETCHING && <div>Fetching...</div>}
            {status === BOOK_SUCCESS && (
                <div>
                    <div>{response.data.title}</div>
                    <div>{response.data.description}</div>
                    <div>{response.data.year}</div>
                </div>
            )}
            {status === BOOK_ERROR && <div>{JSON.stringify(response)}</div>}
        </div>
    );
};

export default Book;
