import React from 'react';
import styled from 'styled-components';
import Medal from './Medal';

const randomColor = () => `hsla(${Math.random() * 360}, 80%, 50%, 1)`

const Row = props => {
    const {
        id,
        name,
        count_pub,
        pageviews
    } = props;

    return (
        <Wrapper>
            <Info>
                <Index>{ id }</Index>
                <Medal></Medal>
                <Logo color={randomColor()}>{ name.charAt(0) }</Logo>
                <Author>
                    <Name>{ name }</Name>
                    <br/>
                    <Count active={count_pub}>{ count_pub } публ.</Count>
                </Author>
            </Info>
            <Views>{ pageviews.toLocaleString('ru-RU') }</Views>
        </Wrapper>
    );
};

export default Row;

const Wrapper = styled.div`
    padding: 20px 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    :nth-of-type(even) {
        background-color: #f4f6f9;
    }
`;

const Index = styled.span`
    color: #b2b2b2;
    margin-right: 20px;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
`;

const Logo = styled.div`
    margin-right: 15px;
    box-shadow: 0px 0px 53px -2px rgba(0,0,0,0.47);
    height: 50px;
    width: 50px;
    background-color: ${props => props.color};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
`;

const Author = styled.div`
`;

const Name = styled.span`
    color: #1d3648;
    font-weight: bold;
`;

const Count = styled.span`
    color: ${props => props.active ? '#b2b2b2' : '#dee0e3' };
`;

const Views = styled.span`
    color: #1d3648;
    font-weight: bold;
    font-size: 20px;
    align-self: flex-start;
    padding-right: 10px;
`;