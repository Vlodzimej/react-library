import React from 'react';
import PropTypes from 'prop-types';
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

export const BookItem = props => {
    const { title, onSelect } = props;

    return <Item onClick={() => onSelect()}>{title}</Item>;
};

BookItem.propTypes = {
    title: PropTypes.string,
};
