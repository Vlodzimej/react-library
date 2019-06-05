import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { BookContext } from './context';

export const BookList = () => {
    const [data, setData] = useState(null);
    const [, setBookId] = useContext(BookContext);

    useEffect(() => {
        axios
            .get('http://localhost:3001/api/books')
            .then(result => setData(result.data));
    }, []);

    return (
        <div>
            <ul>
                {data &&
                    data.map(item => (
                        <li onClick={() => setBookId(item.id)} key={item.id}>
                            {item.title}
                        </li>
                    ))}
            </ul>
        </div>
    );
};

export default BookList;
