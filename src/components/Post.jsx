import React from 'react';
import styled from 'styled-components';
import variables from '../variables';

const Container = styled.div`
    background-color: ${variables.colorPrimaryWhite};
    margin: .2rem 3rem;
    padding: 2.2rem;
    display: flex;
    align-items: center;
    height: 10rem;
    overflow: hidden;
`;

const Left = styled.div`
`;

const Votes = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0 3rem 0 .8rem;
`;

const Right = styled.div`
    & ul {
        display: flex;

        & li {
            margin-right: 2rem;
            font-size: 1.2rem;
            white-space: nowrap;
            overflow: hidden;
        }
    }
`;

const UpButton = styled.button`
    border: none;
    font-size: 2.4rem;
    color: ${variables.colorPrimaryGrey};
`;
    
const DownButton = styled.button`
    border: none;
    font-size: 2.4rem;
    color: ${variables.colorPrimaryGrey};
`;

const PostVotes = styled.p`
    margin: 0;
    padding: 0;
    font-size: 1.8rem;
    position: relative;
    right: .2rem;
    color: ${variables.colorPrimaryBlue};
`;


const Post = ({ post }) => {
    return (
        <Container>
            <Left>
                <Votes>
                    <UpButton><i className="caret up icon"></i></UpButton>
                    <PostVotes>{post.votes}</PostVotes>
                    <DownButton><i className="caret down icon"></i></DownButton>
                </Votes>
            </Left>
            <Right>
                <h2>{post.title}</h2>
                <ul>
                    <li><a href="/"><u>{post.comments.length} comments</u></a></li>
                    <li>{post.postHours} hours ago from <u><a href="/">{post.user}</a></u>, {post.userTitle} at {post.company}</li>
                </ul>
            </Right>
        </Container>
    );
};

export default Post;