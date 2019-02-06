import React from 'react';
import styled from 'styled-components';
import variables from '../variables';

const Container = styled.div`
    & .header#color-white {
        font-size: 2rem;
        color: ${variables.colorPrimaryWhite} !important;
    }
`;

const NavList = (props) => {
    let gameList = props.gameList;
    
    let games = gameList.map((game, key) => (
        <div className="item" key={key}>
            <div className="content">
                <a className="header" id='color-white' href={game.url}>{game.title}</a>
            </div>
        </div>
    ));
    
    return (
        <Container>
            <div className="burger"></div>
            <div className="ui relaxed horizontal list">
                {games}
            </div>
        </Container>
    );
}

export default NavList;