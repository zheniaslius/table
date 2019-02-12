import React, { Component } from 'react';
import styled from 'styled-components';
import Content from './components/Content';

class App extends Component {
  render() {
    return (
      <Wrapper>
        <Content />
      </Wrapper>
    );
  }
}

export default App;

const Wrapper = styled.div`
  font-family: 'Source Sans Pro';
  background: linear-gradient(to bottom, #122c3f 0%, #275e88 100%);
  min-height: 100vh;
  display: flex;
`;
