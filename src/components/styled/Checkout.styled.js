import styled from 'styled-components';

export const Label= styled.label `
    font-size: 1.5rem;
`
export const Input= styled.input `
    width: 60%;
    margin: 2rem;  
`
export const FormWrapper= styled.div `
    width: 60%;
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


