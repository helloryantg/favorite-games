import React from 'react';
import NavList from './NavList';
import variables from '../variables';
import styled from 'styled-components';

const Container = styled.div`

`;

const TopNavigation = styled.div`
    height: 6rem;
    background-color: ${variables.colorPrimaryBlue};
    padding: 0 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .left {
        line-height: 0;
        display: flex;
        align-items: center;

        & .gamepad {
            position: relative;
            top: 2rem;
            font-size: 4rem;
            color: ${variables.colorPrimaryWhite};
            margin-right: 4rem;
            cursor: pointer;
        }
    }

    & .right {
        display: flex;
        align-items: center;

        & a,
        & div {
            color: ${variables.colorPrimaryWhite};
            font-size: 2rem;
            margin: 0 1rem;
            cursor: pointer;
        }
    }
`;

const Button = styled.button`
    padding: 1rem .8rem;
    border: none;
    font-size: .3rem;
    color: $color-primary-white !important;
    border-radius: .3rem;
    background-color: ${variables.colorSecondaryBlue};
    white-space: nowrap;
    overflow: hidden;

    & a.right-button {
        font-size: 1.4rem;
    }
`;

const BottomNavigation = styled.div`
    & ul {
        display: flex;
        padding: 1.8rem 2rem;
        
        & li {
            margin-right: 2rem;
            font-weight: 500;
            
            & a {
                color: ${variables.colorPrimaryGrey};
            }
        }
    }
`;

const NavBar = ({ user, gameList, toggleHidden, onLogout }) => {

    const renderedUser = user ? <div>Hi, {user.name} | <a href="/" onClick={onLogout}>Log Out</a></div> : <i className="user circle icon" onClick={toggleHidden}></i>;

    return (
        <Container>
            <TopNavigation>
                <div className="left">
                    <a href="/"><i className="gamepad icon"></i></a>
                    <NavList gameList={gameList}/>
                </div>

                <div className="right">
                    <div>{renderedUser}</div>
                    <a href="/"><i className="search icon"></i></a>
                    <Button><a className="right-button" href="/new">New Post</a></Button>
                </div>   
            </TopNavigation>
            <BottomNavigation>
                <ul>
                    <li><a href="/">Top</a></li>
                    <li><a href="/">Recent</a></li>
                    <li><a href="/">Starred</a></li>
                    <li><a href="/">Badges</a></li>
                </ul>
            </BottomNavigation>    
        </Container>
    );
}

export default NavBar;

