import React, { Component } from 'react';
import NavBar from './NavBar';
import Main from './Main';
import device from '../device';

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
        <Main />
      </div>
    );
  }
}

export default App;
