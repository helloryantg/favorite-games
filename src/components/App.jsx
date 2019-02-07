import React, { Component } from 'react';
import NavBar from './NavBar';
import Main from './Main';
// import device from '../device';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import NewPost from '../components/NewPost';
import styled from 'styled-components';
import variables from '../variables';
import Footer from '../components/Footer';

const Container = styled.div`
  background-color: ${variables.colorSecondaryGrey};
  height: 100vh;
`;

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
      <Container className="App">
        <NavBar gameList={this.state.gameList}/>
        
        <Router>
          <Switch>
            <Route exact path='/' render={() => <Main />} />
            <Route exact path='/new' render={() => <NewPost />} />
          </Switch>
        </Router>
        <Footer />
      </Container>
    );
  }
}

export default App;
