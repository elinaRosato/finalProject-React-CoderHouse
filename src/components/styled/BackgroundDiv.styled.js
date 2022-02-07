import React from 'react';
import styled from 'styled-components';

const BackgroundDiv = styled.div `
    width: 92.5%;
    max-width: 100%;
    background-color: ${({theme}) => theme.colors.primary};
    border-radius: 3rem;
    margin: auto;
    height: 50vh;
    position: absolute;
    z-index: -999;
`

export default BackgroundDiv;