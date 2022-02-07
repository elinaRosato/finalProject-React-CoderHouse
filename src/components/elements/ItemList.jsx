import React, {useState, useEffect} from 'react';
import { Item } from '../../components';
import { Grid } from '@material-ui/core';
import Container from '../styled/Container.styled';

const ItemList = ({products}) => {
    
    return (
      <>
			<Container>
				<Grid container spacing={4}>
						{products.map(product => {
							return (
								<Grid item xs={12} md={6} lg={4}>
									<Item key={product.id} id={product.id} title={product.title} stock={product.stock} description={product.description} price={product.price} image={product.image} />
								</Grid>
							);
							
						})}
				</Grid>
			</Container>
			</>
    );
}


export default ItemList;