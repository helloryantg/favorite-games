import React from 'react';
import styled from 'styled-components';
import userService from '../utils/userService';
import variables from '../variables';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 36rem;
    background-color: ${variables.colorPrimaryBlack};
    padding: 4rem 2rem;

    & .link {
        height: 4rem;
        width: 16rem;
        font-size: 1.4rem !important;
        background-color: ${variables.colorPrimaryGreen} !important;
        color: ${variables.colorPrimaryWhite} !important;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        overflow: hidden;
        letter-spacing: .2rem;
        font-weight: 300;
        margin: 0 auto;
    }
`;

const Input = styled.input`
    height: 4rem;
    margin-bottom: .6rem !important;
    border-radius: 3px;
    font-size: 1.6rem !important;
`;

const Button = styled.button`
    height: 4rem;
    width: 8rem;
    font-size: 1.4rem !important;
    background-color: ${variables.colorPrimaryYellow} !important;
    color: ${variables.colorPrimaryWhite} !important;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    white-space: nowrap;
    overflow: hidden;
    font-weight: 400;
`;

const Description = styled.div`
    color: ${variables.colorPrimaryWhite};
    font-size: 1.6rem;
    margin: 2rem auto;
    text-align: center;

    & h3 {
        font-size: 3rem;
    }

    & p {
        color: ${variables.colorSecondaryGrey};
    }
`;

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            pw: ''
        };
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        userService.login(this.state)
        .then(() => {
            this.props.onSignupOrLogin();
            this.props.history.push('/');
        })
        .catch(err => alert('Invalid Credentials'));
    }

    render() {
        return (
            <Container>
                <form className="ui form" onSubmit={this.onSubmit} >
                    <div className="field">
                        <Input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.onChange} />
                    </div>
                    <div className="field">
                        <Input type="password" placeholder="Password" value={this.state.pw} name="pw" onChange={this.onChange} />
                    </div>
                    <Button className="ui submit button">Log In</Button>
                </form>
                <Description>
                    <h3>Join Us</h3>
                    <p>Gamers vote for your favorite game!</p>
                </Description>
                <Link className="ui submit button link" to="/signup">Register</Link>
            </Container>
        );
    }
};

export default LoginForm;