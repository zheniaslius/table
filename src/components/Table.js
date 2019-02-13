import React, { Component } from 'react';
import styled from 'styled-components';
import searchIcon from '../assets/images/search.png';
import Row from './Row';
    
class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            direction: {
                name: true,
                views: true,
            }
        }
    }

    componentDidMount() {
        this.setState({results: this.props.items});
    }

    handleSearch = e => {
        const inputName = e.target.value.toLowerCase();
        
        const matches = this.props.items.filter(({name}) => name.toLowerCase().includes(inputName));
        this.setState({results: matches});
        this.props.updatePages(matches);
    }

    sortViews = (direction) => (a, b) => (b.pageviews - a.pageviews) * direction;

    sortName = (direction) => (a, b) => (a.name > b.name) ? 1 * direction : (b.name > a.name) ? -1 * direction : 0;

    //im sorry for this
    sort = attribute => {
        const { results } = this.state;
        const direction = this.state.direction[attribute] ? -1 : 1;
        const sortFuncs = {
            'name': direction => this.sortName(direction),
            'views': direction => this.sortViews(direction),
        }

        const sorted = results.sort(sortFuncs[attribute](direction))
        this.setState(prev => ({
            results: sorted,
            direction: {
            ...prev.direction,
            [attribute]: !prev.direction[attribute]
        }}))
    }

    render() {
        const { results } = this.state;
        const { page } = this.props;

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
                    { results && results.slice((page-1)*10, page*10).map((person, i) => 
                        <Row 
                            key={i}
                            {...person}
                            index={results.indexOf(person)} 
                            sort={this.sort}
                            size={results.length}/>
                    )}
                </Content>
            </Wrapper>
        );
    }
};

export default Table;

const Wrapper = styled.div`
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
        width: 100%;
        height: 100%;
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