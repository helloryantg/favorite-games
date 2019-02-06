import React, { Component } from 'react';
import './App.scss';
import NavBar from '../NavBar/NavBar';
import Header from '../Header/Header';
import Main from '../Main/Main';

class App extends Component {
  state = {
    gameList: [
      { title: 'PC', url: '/' },
      { title: 'Mac', url: '/' },
      { title: 'Switch', url: '/' },
      { title: 'PS4', url: '/' },
    ]
  };
  
  render() {
    return (
      <div className="App">
        <NavBar gameList={this.state.gameList}/>
        <Header />
        <Main />
      
      </div>
    );
  }
}

export default App;
