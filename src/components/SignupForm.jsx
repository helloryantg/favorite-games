import React from 'react';
import userService from '../utils/userService';
import styled from 'styled-components';
import variables from '../variables';

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


class SignupForm extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: '',
        message: ''
    };

    updateMessage = (msg) => {
        this.setState({message: msg});
    } 

    onChange = (e) => {
        this.updateMessage('');
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        userService.signup(this.state)
        .then(() => {
            this.props.onSignupOrLogin();
            this.props.history.push('/');
        })
        .catch(err => this.updateMessage(err.message));
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
    }

    render() {
        return (
            <Container>
                <form className="ui form" onSubmit={this.onSubmit} >
                    <div className="field">
                        <Input type="text" placeholder="Name" value={this.state.name} name="name" onChange={this.onChange} />
                    </div>
                    <div className="field">
                        <Input type="email" placeholder="Email" value={this.state.email} name="email" onChange={this.onChange} />
                    </div>
                    <div className="field">
                        <Input type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.onChange} />
                    </div>
                    <div className="field">
                        <Input type="password" placeholder="Confirm Password" value={this.state.passwordConf} name="passwordConf" onChange={this.onChange} />
                    </div>
                    <Button className="ui submit button" disabled={this.isFormInvalid()}>Sign Up</Button>
                </form>
            </Container>
        );
    }
};

export default SignupForm;