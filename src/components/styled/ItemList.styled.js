import styled from 'styled-components';

export const CardContainer = styled.div `
width: 95%;
max-width: 100%;
background-color: ${({theme}) => theme.colors.light};
border-radius: 3rem;
padding: 20px;
margin: auto;
`

export const CardImage = styled.img `
    width: 100%;
    border: solid red 2px;
`

export const CardTitle = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 1.3rem;
    font-weight: 400;
    text-align: center;
    padding: 1rem 0;
`

export const CardPrice = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    padding: 1rem 0;
`

export const CardBtn = styled.button `
    width: 100%;
    border: solid .2rem ${({theme}) => theme.colors.primary};
    border-radius: 5rem;
    color: ${({theme}) => theme.colors.primary};
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    padding: 1rem;
`

