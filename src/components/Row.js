import React from 'react';
import styled from 'styled-components';
import Medal from './Medal';

const randomColor = (id, size) => `hsla(${id * (360/size)}, 80%, 50%, 1)`;

const hasMedal = index => index < 3;

const Row = props => {
    const {
        index,
        id,
        name,
        count_pub,
        pageviews,
        size
    } = props;

    return (
        <Wrapper>
            <Info>
                <Index>{ index + 1 }</Index>
                <Logo color={randomColor(id, size)}>{ name.charAt(0) }</Logo>
                <Author>
                    <Name onClick={() => props.sort('name')}>{ name }</Name>
                    <br/>
                    <Count active={count_pub}>{ count_pub } публ.</Count>
                </Author>
            </Info>
            { hasMedal(id) && <Medal index={id}/>}
            <Views onClick={() => props.sort('views')}>{ pageviews.toLocaleString('ru-RU') }</Views>
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
    cursor: pointer;
    user-select: none;
    color: #1d3648;
    font-weight: bold;
`;

const Count = styled.span`
    color: ${props => props.active ? '#b2b2b2' : '#dee0e3' };
`;

const Views = styled.span`
    cursor: pointer;
    user-select: none;
    color: #1d3648;
    font-weight: bold;
    font-size: 20px;
    align-self: flex-start;
    padding-right: 10px;
`;