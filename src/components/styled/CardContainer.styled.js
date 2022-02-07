import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div `
    width: 95%;
    max-width: 100%;
    min-height: 40vh;

    background-color: ${({theme}) => theme.colors.light};
    border-radius: 3rem;

    padding: 20px;
    margin: auto;
`

export default CardContainer;