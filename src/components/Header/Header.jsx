import React from 'react';
import './Header.scss';
import styled from 'styled-components';

const Container = styled.div`
`;

const Ul = styled.ul`
    display: flex;
    padding: 1.8rem 2rem;
`;

const Li = styled.li`
    margin-right: 2rem;
    font-weight: 500;
`;

const Header = () =>  {
    return (
        <Container>
            <Ul className="Header__list">
                <Li className="Header__item"><a className="color-grey" href="/">Top</a></Li>
                <Li className="Header__item"><a className="color-grey" href="/">Recent</a></Li>
                <Li className="Header__item"><a className="color-grey" href="/">Starred</a></Li>
                <Li className="Header__item"><a className="color-grey" href="/">Badges</a></Li>
            </Ul>
        </Container>
    );
}

export default Header;