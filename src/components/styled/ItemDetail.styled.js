import styled from 'styled-components';

export const DetailCardContainer = styled.div `
width: 95%;
max-width: 100%;
background-color: ${({theme}) => theme.colors.light};
border-radius: 3rem;
padding: 3rem;
margin: auto;
`

export const DetailCardMenu = styled.div `
    width: 100%;
    margin-bottom: 1rem;
`

export const BackBtn = styled.p `
    font-size: 1.3rem;
    font-weight: 400;
    color: ${({theme}) => theme.colors.dark};
`

export const DetailCardImage = styled.img `
    width: 100%;
`

export const DetailCardBrand = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 1.3rem;
    font-weight: 400;
    padding: 1rem 0;
    color: ${({theme}) => theme.colors.dark};
`
export const Accent = styled.span `
    color: ${({theme}) => theme.colors.primary};
`

export const DetailCardTitle = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 1.8rem;
    font-weight: 800;
    padding: 1rem 0;
`

export const DetailCardDescription = styled.p `
    font-size: 1.2rem;
    font-weight: 400;
    margin: 1rem 0;
    line-height: 1.8rem;
`

export const DetailCardStock = styled.p `
    font-size: 1rem;
    font-weight: 600;
    margin: 1rem 0;
    color: red;
    text-align: end;
`

export const DetailCardPrice = styled.p `
    font-family: 'Inter', sans-serif;
    font-size: 1.5rem;
    font-weight: 600;
    text-align: center;
    padding: 1rem 0;
`

export const DetailCardBtn = styled.button `
    width: 100%;
    border: solid .2rem ${({theme}) => theme.colors.primary};
    border-radius: 5rem;
    color: ${({theme}) => theme.colors.primary};
    font-size: 1.5rem;
    font-weight: 400;
    text-align: center;
    padding: 1rem;
`

