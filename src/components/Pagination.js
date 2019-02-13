import React from 'react';
import styled from 'styled-components';

const Pagination = props => {
    return (
        <Wrapper>
            <Pages>
                <Current>{props.current}</Current>
                <span> - </span>
                <Total>{props.max}</Total>
            </Pages>
            <svg onClick={() => props.changePage(-1)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
            <svg onClick={() => props.changePage(1)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/><path fill="none" d="M0 0h24v24H0V0z"/></svg>
        </Wrapper>
    );
};

export default Pagination;

const Wrapper = styled.div`
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 20px;
    margin-top: 20px;
    color: #fff;
    svg {
        :first-of-type {
            transform: scaleX(-1);
            order: 1;
        }
        :last-of-type {
            order: 3;
        }
        cursor: pointer;
        padding: 0 10px;
        fill: #6d92ad;
        position: relative;
        top: 1px;
        height: 40px;
        width: auto;
    }
`;

const Pages= styled.div`
    order: 2;
`;

const Current = styled.span``;

const Total = styled.span``;
