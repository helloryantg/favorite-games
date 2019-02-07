import React from 'react';
import styled from 'styled-components';
import variables from '../variables';

const Container = styled.div`
    margin: 2.3rem 3rem .2rem 3rem;
    background-color: ${variables.colorPrimaryWhite};
    padding: 2.2rem;
    display: flex;
    flex-direction: column;
`;

const Form = styled.form`
    font-size: 1.4rem !important;
`;
    
const Button = styled.input`
    width: 100%;
    background-color: ${variables.colorPrimaryGreen} !important;
    font-size: 1.4rem !important;
    color: ${variables.colorPrimaryWhite} !important;
`;

class NewPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            description: ''
        };
    };

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) => {
        e.preventDefault();
        
        // Send to database here
    }

    isFormInvalid = () => {
        return !(this.state.title && this.state.description);
    };
    
    render() {
        return (
            <Container>
                <h1>Add a New Post</h1>
                <Form className="ui form" method="POST" action="/new">
                    <div className="field">
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" placeholder="Please add a title" onChange={this.onChange} value={this.state.title} autocomplete="off"/>
                    </div> 
                    <div className="field">
                        <label htmlFor="description">Description</label>
                        <textarea name="description" id="" cols="40" rows="10" onChange={this.onChange} value={this.state.description} placeholder="What do you want to say?"></textarea>
                    </div>
                    <Button className="ui submit button" type="submit" value="Post" disabled={this.isFormInvalid()} />
                </Form>
            </Container>
        );
    }
};

export default NewPost;