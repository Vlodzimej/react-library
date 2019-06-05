import React, { useState } from 'react';
import 'babel-polyfill';
import { BookContext } from './context';
import BookCard from './book-card';
import BookList from './book-list';
import styled from 'styled-components';

const Container = styled.div`
    max-width: 780px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 4fr auto;
    grid-gap: 10px;
    font-size: 1.2em;
`;

export const App = () => {
    const [bookId, setBookId] = useState(0);
    return (
        <Container>
            <BookContext.Provider value={[bookId, setBookId]}>
                <BookList />
                <BookCard />
            </BookContext.Provider>
        </Container>
    );
};
export default App;
