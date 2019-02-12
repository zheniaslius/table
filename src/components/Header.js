import React from 'react';
import styled from 'styled-components';
import {
    Container
} from '../shared/shared';
import logo from '../assets/logo/logo.svg';

const Header = () => {
    return (
        <Container>
            <HeaderWrapper>
                <Logo src={logo} alt="logo"/>
                <Nav>
                    <Link>About me</Link>
                    <Link>Relationships</Link>
                    <Link>Requirements</Link>
                    <Link>Users</Link>
                    <Link>Sign up</Link>
                </Nav>
            </HeaderWrapper>
        </Container>
    );
};

const HeaderWrapper = styled.div`
    padding: 23px 0;
`;

const Logo = styled.img`
    width: 172px;
    margin-right: 67px;
`;

const Nav = styled.ul`
    list-style: none;
    display: inline-flex;
`;

const Link = styled.li`
    padding-right: 30px;
`;

export default Header;