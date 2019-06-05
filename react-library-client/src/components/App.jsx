import React, { useState } from 'react';
import 'babel-polyfill';
import { BookContext } from './context';
import Book from './book';
import BookList from './booklist';

export const App = () => {
    const [bookId, setBookId] = useState(0);
    return (
        <div>
            <BookContext.Provider value={[bookId, setBookId]}>
                <BookList />
                <Book />
            </BookContext.Provider>
        </div>
    );
};
export default App;
