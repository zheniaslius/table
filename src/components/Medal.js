import React from 'react';
import styled from 'styled-components';
import Gold from '../assets/medals/1st.svg';
import Silver from '../assets/medals/2nd.svg';
import Bronze from '../assets/medals/3rd.svg';

const medals = [Gold, Silver, Bronze];

const Medal = ({ index }) => {
    return (
        <Icon src={medals[index]} alt='medal' />
    );
};

export default Medal;

const Icon = styled.img`
    height: 50px;
`;