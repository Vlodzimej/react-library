import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { BookContext } from './context';
import styled from 'styled-components';
import { BookItem } from './book-item';
import config from 'config';

const Container = styled.div`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.65);
    line-height: 1.5;
    list-style: none;
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    height: auto;
`;

const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
`;

const EmptyList = styled.div`
    font-weight: bold;
    width: 100%;
    text-align: center;
`;

/**
 * Список книг
 */
export const BookList = () => {
    const [data, setData] = useState([]);
    const [, setBookId] = useContext(BookContext);

    useEffect(() => {
        axios
            .get(`${config.apiUrl}/api/books`)
            .then(result => setData(result.data));
    }, []);

    return (
        <div>
            <Container>
                {data.length > 0 ? (
                    <List>
                        {data.map(item => (
                            <BookItem
                                onSelect={() => setBookId(item.id)}
                                key={item.id}
                                {...item}
                            />
                        ))}
                    </List>
                ) : (
                    <EmptyList>List is empty</EmptyList>
                )}
            </Container>
        </div>
    );
};

export default BookList;
