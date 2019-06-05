import React, { useContext, useEffect } from 'react';
import useApiRequest from '../hooks/useBookRequest';
import {
    BOOK_FETCHING,
    BOOK_SUCCESS,
    BOOK_ERROR,
} from '../hooks/useBookRequest/actionTypes';
import { BookContext } from './context';
import styled from 'styled-components';
import spinner from '../assets/Spinner-1s-100px.gif';

const Container = styled.div`
    padding: 16px 24px;
    box-sizing: border-box;
    margin: 0;
    color: rgba(0, 0, 0, 0.65);
    line-height: 1.5;
    list-style: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
`;

const SpinnerContainer = styled.div`
    width: 100%;
    text-align: center;
`;

const InnerContainer = styled.div`
    display: grid;
    grid-template-columns: 0.375fr 1fr;
    grid-template-areas: '. .' '. .';
`;

const Blank = styled.div`
    font-size: 1.5em;
    font-weight: bold;
    width: 100%;
    text-align: center;
`;

const ValueContainer = styled.div`
    border-bottom: 1px solid #e8e8e8;
    :last-of-type {
        border-bottom: none;
    }
`;

export const BookCard = () => {
    const [bookId] = useContext(BookContext);
    const [{ status, response }, makeRequest] = useApiRequest(
        `http://localhost:3001/api/book/${bookId}`,
        {
            verb: 'get',
        }
    );

    useEffect(() => {
        if (bookId > 0) makeRequest();
    }, [bookId]);

    return (
        <Container>
            {status != BOOK_FETCHING && !response && (
                <Blank>No book selected</Blank>
            )}
            {status === BOOK_FETCHING && (
                <SpinnerContainer>
                    <img src={spinner} />
                </SpinnerContainer>
            )}
            {status === BOOK_SUCCESS && (
                <InnerContainer>
                    <div>Title</div>
                    <ValueContainer>{response.data.title}</ValueContainer>
                    <div>Description</div>
                    <ValueContainer>{response.data.description}</ValueContainer>
                    <div>Author</div>
                    <ValueContainer>{response.data.author}</ValueContainer>
                    <div>Year</div>
                    <ValueContainer>{response.data.year}</ValueContainer>
                </InnerContainer>
            )}
            {status === BOOK_ERROR && <div>{JSON.stringify(response)}</div>}
        </Container>
    );
};

export default BookCard;
