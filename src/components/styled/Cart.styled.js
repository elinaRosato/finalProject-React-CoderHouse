import styled from 'styled-components';

export const smth= styled.button `
    font-family: 'Inter', sans-serif;
    width: 100%;
    padding: 0rem;
    margin: 0 auto;
`
export const CartImage= styled.img `
    width: 80%;
`
export const Button= styled.button `
    font-family: 'Inter', sans-serif;
    width: 100%;
    border: solid .2rem ${({theme}) => theme.colors.primary};
    border-radius: 5rem;
    color: ${({theme}) => theme.colors.primary};
    font-size: 1.3rem;
    font-weight: 300;
    text-transform: uppercase;
    text-align: center;
    padding: .7rem;
`


