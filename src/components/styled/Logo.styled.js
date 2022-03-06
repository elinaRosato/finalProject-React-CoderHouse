import styled from 'styled-components';

export const LogoContainer = styled.div `
    display: flex;
    align-items: center;
    gap: .3rem;
`

export const LogoText = styled.p `
    font-family: 'Fraunces', serif;
    font-size: 3rem;
    font-weight: 200;
    text-decoration: none;
    color: ${({theme}) => theme.colors.dark};
`

export const LogoIcon = styled.svg `
    height: 4rem;
`

