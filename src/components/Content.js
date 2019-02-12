import React, { Component } from 'react';
import styled from 'styled-components';
import Table from './Table';

class Content extends Component {
    render() {
        return (
            <Wrapper>
                <Table />
            </Wrapper>
        );
    }
}

export default Content;

const Wrapper = styled.div`
  margin: auto;
`;