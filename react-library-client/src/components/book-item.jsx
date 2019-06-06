import React from 'react';
import styled from 'styled-components';

const Item = styled.li`
    padding: 16px 24px;
    border-bottom: 1px solid #e8e8e8;
    outline: none;
    cursor: pointer;
    :last-of-type {
        border-bottom: none;
    }
    :hover {
        background-color: rgb(230, 247, 250);
    }
`;

/**
 * Элемент списка
 * @param {any} props 
 */
export const BookItem = props => {
    // eslint-disable-next-line react/prop-types
    const { title, onSelect } = props;

    return <Item onClick={() => onSelect()}>{title}</Item>;
};

