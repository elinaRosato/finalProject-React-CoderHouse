import styled from 'styled-components';

export const CounterContainer = styled.div `
	display: flex;
	gap: 1rem;
	align-items: center;
`

export const CounterBtn = styled.button `
	background-color: ${({theme}) => theme.colors.primary};
	color: ${({theme}) => theme.colors.dark};
	width: 2.5rem;
	height: 2.5rem;
	border: none;
	border-radius: 5rem;
	font-size: 1.7rem;
	font-weight: 400;
	text-align: center;
`

export const CounterQty = styled.p `
	color: ${({theme}) => theme.colors.dark};
	font-size: 1.7rem;
	font-weight: 400;
`