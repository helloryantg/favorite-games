import React from 'react';
import NavList from '../NavList/NavList';
import './NavBar.scss';

import styled from 'styled-components';

const Button = styled.button`
    padding: .2rem .8rem;
    font-size: 1.4rem !important;
    color: $color-primary-white !important;
    border-radius: .3rem;
    background-color: $color-secondary-blue !important;
`;

const NavBar = (props) => {
    return (
        <div className="NavBar">
            <div className="NavBar__left">
                <a href="/"><i className="gamepad icon"></i></a>
                <NavList gameList={props.gameList}/>
            </div>

            <div className="NavBar__right">
                <a href="/"><i className="user circle icon"></i></a>
                <a href="/"><i className="search icon"></i></a>
                <a className="NavBar__button" href="/"><Button className="ui button">New Post</Button></a>
            </div>   
        </div>
    );
}

export default NavBar;

