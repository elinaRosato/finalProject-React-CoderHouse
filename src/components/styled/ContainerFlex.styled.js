import React from 'react';
import styled from 'styled-components';

const ContainerFlex = styled.div `
    max-width: 100%;
    display: flex;
    align-items: center;

    border: 2px solid;
    border-color: ${({theme}) => theme.colors.primary};
    border-radius: 3rem;

    margin: auto;
`

export default ContainerFlex;