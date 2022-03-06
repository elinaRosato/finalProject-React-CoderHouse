import React from 'react';
import styled from 'styled-components';

const MenuItem = styled.li `
    color: ${({theme}) => theme.colors.dark};
    list-style: none;
    font-size: 2rem;
    font-weight: 300;
    text-align: center;
    margin: 0 2rem;
`

export default MenuItem;