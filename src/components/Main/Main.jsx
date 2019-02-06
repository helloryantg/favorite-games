import React from 'react';
import styled from 'styled-components';
import Announcement from '../Announcement/Announcement';
import variables from '../../variables';
import Post from '../Post/Post';

const Container = styled.div`
    background-color: ${variables.colorSecondaryGrey};
`;

class Main extends React.Component {
    state = {
        posts: [
            {
                title: 'League of Legends',
                postHours: 11,
                comments: ['This rocks!', 'I love this game'],
                user: 'Ryan Gonzales',
                userTitle: 'Full-Stack Web Developer',
                id: '123123',
                votes: 2
            },
            {
                title: 'Zelda: Breath of the Wind',
                postHours: 3,
                comments: ['This is a great recommendation!', 'I love this game'],
                user: 'Phuong Dinh',
                userTitle: 'Web Designer',
                id: '334333',
                votes: 12
            }
        ]
    };

    render() {
        let posts = this.state.posts.map((post) => (<Post key={post.id} post={post}/>));
        return (
            <Container className="Main">
                <Announcement />
                {posts}
            </Container>    
        );
    }
};

export default Main;