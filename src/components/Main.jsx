import React from 'react';
import styled from 'styled-components';
import Announcement from './Announcement';
import variables from '../variables';
import Post from './Post';
import posts from '../posts';

const Container = styled.div`
    & .next {
        background-color: ${variables.colorPrimaryWhite};
        margin: .2rem 3rem;
        padding: 2.2rem;
        height: 6rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;

        & a {
            display: inline-block;
            color: ${variables.colorPrimaryBlue};
            font-weight: 700;
        }
    }
`;

class Main extends React.Component {
    state = {
        posts: posts
    };

    render() {
        let posts = this.state.posts.map((post) => (<Post key={post.id} post={post}/>));
        return (
            <Container className="Main">
                <Announcement />
                {posts}
                <div className="next"><a href='/'>Next</a></div>
            </Container>    
        );
    }
};

export default Main;