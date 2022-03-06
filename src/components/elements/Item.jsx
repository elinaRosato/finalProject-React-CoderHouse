import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

// Styled Components
import { CardContainer, CardImage, CardTitle, CardPrice, CardBtn } from "../styled/ItemList.styled";


const Item = ({id, title, description, price, stock, image}) => {
  let navigate = useNavigate();

	const goToProductDetailPage = (event) => {
		event.stopPropagation();
		navigate(`products/${id}`)
	};

	return (
		<CardContainer onClick={goToProductDetailPage}>
			<CardImage src={image} alt={title} />
			<CardTitle>{title}</CardTitle>
			<CardPrice>€ {price}</CardPrice>
			<CardBtn>View More</CardBtn>
		</CardContainer>
	)
};

export default Item;