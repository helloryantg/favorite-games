import React from 'react';
import './NavList.scss';

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
        <div className="NavList">
            <div className="NavList__burger"></div>
            <div className="NavList__list ui relaxed horizontal list">
                {games}
            </div>
        </div>
    );
}

export default NavList;