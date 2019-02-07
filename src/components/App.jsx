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
import userService from '../utils/userService';

const Container = styled.div`
  background-color: ${variables.colorSecondaryGrey};
  height: 100vh;
`;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      gameList: [
        { title: 'PC', url: '/' },
        { title: 'Mac', url: '/' },
        { title: 'Switch', url: '/' },
        { title: 'PS4', url: '/' },
      ],
      loginClicked: false
    };
  }

  onLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  onSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  onLoginClick = () => {
    this.setState({ loginClicked: true });
  }

  componentDidMount() {
    let user = userService.getUser();
    this.setState = ({ user });
  }
  
  render() {
    const main = <Main 
      onSignupOrLogin={this.onSignupOrLogin} 
      loginClicked={this.state.loginClicked} />;

    return (
      <Container className="App">
        <NavBar 
          gameList={this.state.gameList}
          onLoginClick={this.onLoginClick}/>
        <Router>
          <Switch>
            <Route exact path='/' render={() => 
              main} />
            <Route exact path='/new' render={() => <NewPost />} />
          </Switch>
        </Router>
        <Footer />
      </Container>
    );
  }
}

export default App;
