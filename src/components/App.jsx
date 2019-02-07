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
import SignupForm from '../components/SignupForm';
import LoginForm from '../components/LoginForm';

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
      isHidden: true
    };
  }

  onLogout = () => {
    userService.logout();
    this.setState({ user: null });
  }

  onSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  toggleHidden = () => {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  componentDidMount() {
    let user = userService.getUser();
    this.setState({ user });
  }
  
  render() {
    return (
      <Container className="App">
        <NavBar 
          user={this.state.user}
          gameList={this.state.gameList}
          toggleHidden={this.toggleHidden}
          onLogout={this.onLogout} />
        <Router>
          <Switch>
            <Route exact path='/' render={(props) => 
              <Main 
                {...props}
                onSignupOrLogin={this.onSignupOrLogin}
                isHidden={this.state.isHidden} />} />
            <Route exact path='/new' render={() => <NewPost />} />
            <Route exact path='/signup' render={({history}) => 
              <SignupForm 
                history={history}
                onSignupOrLogin={this.onSignupOrLogin} />} />
            <Route exact path='/login' render={(props) =>
              <LoginForm 
                {...props}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            }/>
          </Switch>
        </Router>
        <Footer />
      </Container>
    );
  }
}

export default App;
