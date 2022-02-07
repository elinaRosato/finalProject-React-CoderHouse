import React from 'react';
import styled from 'styled-components';

const Container = styled.div `
    width: 95%;
    max-width: 100%;

    border: 2px solid;
    border-color: ${({theme}) => theme.colors.primary};
    border-radius: 3rem;

    padding: 20px;
    margin: auto;
`

export default Container;
