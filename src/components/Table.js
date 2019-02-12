import React, { Component } from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/images/search.png';
import data from '../assets/data';
import Row from './Row';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            results: []
        }
    }

    componentDidMount() {
        this.setState({items: data, results: data});
    }

    handleSearch = e => {
        const inputName = e.target.value.toLowerCase();
        
        const matches = this.state.items.filter(({name}) => name.toLowerCase().includes(inputName));
        this.setState({results: matches});
    }

    render() {
        const { results } = this.state;

        return (
            <Wrapper>
                <Search>
                    <img src={searchIcon} alt="search"/>
                    <input 
                        type="text" 
                        placeholder="Поиск авторов по имени"
                        onKeyUp={this.handleSearch}/>
                </Search>
                <Content>
                    { results && results.slice(0, 10).map((person, i) => 
                        <Row key={i} {...person} id={i}/>
                    )}
                </Content>
            </Wrapper>
        );
    }
};

export default Table;

const Wrapper = styled.div`
    margin: 50px 0;
    overflow: hidden;
    background-color: #fff;
    box-shadow: 0px 5px 39px -6px rgba(0,0,0,0.46);
    width: 600px;
    border-radius: 7px;
`;

const Search = styled.div`
    padding: 0 20px;
    background-color: #e9eef3;
    height: 60px;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    img {
        height: 20px;
        margin-right: 20px;
    }

    input {
        outline: none;
        border: none;
        background: none;
        ::placeholder {
            color: #babec2;
            font-weight: 700;
        }
    }
`;

const Content = styled.div``;