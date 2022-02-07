import React from 'react';
import styled from 'styled-components';



const StyledLogo = styled.p `
    font-family: 'JetBrains Mono', monospace;
    font-size: ${({size}) => size};
    font-weight: 600;
`

export default StyledLogo;