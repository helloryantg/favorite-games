import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    margin: .2rem 3rem;
    height: 8rem;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;

const Footer = () => {
    return (
        <Container className="Footer">
            <i className="copyright outline icon"></i>
            <p>Ryan Gonzales 2019</p>
        </Container>
    );
};

export default Footer;