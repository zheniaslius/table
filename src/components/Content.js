import React, { Component } from 'react';
import styled from 'styled-components';
import Table from './Table';
import Pagination from './Pagination';
import data from '../assets/data';

const items = data
    .sort((a, b) => b.pageviews - a.pageviews)
    .map((person, i) => ({
        ...person,
        id: i
    }))

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            pagesCount: this.getPages(items)
        }
    }

    changePage = next => {
        const nextPage = this.state.page + next;
        if (nextPage === 0 || nextPage > this.state.pagesCount) return;
        this.setState({page: nextPage});
    }

    updatePages = (items) => this.setState({
        page: 1,
        pagesCount: this.getPages(items)
    });

    getPages = items => Math.ceil(items.length / 10);

    render() {
        const { page, pagesCount } = this.state;

        return (
            <Wrapper>
                <Table items={items} page={page} updatePages={this.updatePages}/>
                <Pagination changePage={this.changePage} current={page} max={pagesCount}/>
            </Wrapper>
        );
    }
}

export default Content;

const Wrapper = styled.div`
  margin: 50px auto;
`;