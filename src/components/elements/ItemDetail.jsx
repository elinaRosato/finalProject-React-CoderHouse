/* import React, { useState } from 'react';
import { Link } from "react-router-dom";

//Contexts
import { useCart } from "../../context/CartContext";

//Components
import { ItemCount } from '../../components';

//Styled Components
import { Grid } from '@material-ui/core';
import { DetailCardContainer, DetailCardImage, DetailCardBrand, Accent, DetailCardTitle, DetailCardDescription, DetailCardStock, DetailCardPrice, DetailCardBtn, DetailCardMenu, BackBtn } from "../styled/ItemDetail.styled";
import { NormalText } from '../styled/Typography.styeled';


const ItemDetail = ({ product }) => {
  const { brand, category, description, id, imagesURL, price, stock, title} = product
	const image = imagesURL[0]
	const [qty, setQty] = useState(0);
  const addItem = useCart()[1];

    return (
			<DetailCardContainer>
				<DetailCardMenu>
					<Link to="/" style={{textDecoration: 'none'}}>
						<BackBtn>Back</BackBtn>
					</Link>
				</DetailCardMenu>
				<Grid container columnSpacing={4}>
					<Grid item xs={12} md={6}>
						<DetailCardImage src={image} alt={title}/>
					</Grid>
					<Grid item xs={12} md={6}>
						<DetailCardBrand>
							By <Accent>{brand}</Accent>
						</DetailCardBrand>
						<DetailCardTitle>{title}</DetailCardTitle>
						<div className="product-description" >
							<NormalText className="mb-5">Description</NormalText>
							<DetailCardDescription>{description}</DetailCardDescription>
						</div>
						<DetailCardStock>Only {stock} left! </DetailCardStock>
						<DetailCardPrice>$ {price}</DetailCardPrice>
						<div style={{display: 'flex', gap: '2rem'}}>
							<ItemCount stock={stock} qty={qty} setQty={setQty} />
							<DetailCardBtn onClick={() => addItem(product, qty)} variant="primary">
								Add to cart
							</DetailCardBtn>
						</div>                              
					</Grid>
				</Grid>
			</DetailCardContainer>
    )
};

export default ItemDetail; */
