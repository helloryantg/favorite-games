import React from 'react';
import styled from 'styled-components';
import variables from '../variables';

const Container = styled.div`
    margin: 2.3rem 3rem .2rem 3rem;
    background-color: ${variables.colorPrimaryWhite};
    padding: 2.2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    width: 70%;
`;

const Right = styled.div`
    
`;

const Button = styled.button`
    color: ${variables.colorPrimaryWhite};
    padding: 1rem 3rem;
    font-size: 1.4rem;
    background-color: ${variables.colorPrimaryGreen};
    border-radius: 3px;
    white-space: nowrap;
    overflow: hidden;
`;

const Join = () => {
    return (
        <Container className="Join">
            <Left>
                <h2>Post your favorite games for your choice on console.</h2>
                <p>Share experiences, memories, tips, and tricks. Have our community vote on the game to increase awareness.</p>
            </Left>
            <Right>
                <Button>Join Us</Button>
            </Right>
        </Container>    
    );
};

export default Join;