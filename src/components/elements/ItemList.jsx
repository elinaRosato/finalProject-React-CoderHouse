import React from 'react';
import { Grid } from '@material-ui/core';

//Contexts
import { useProducts } from '../../context/ProductsContext';

//Components
import Item from '../../components/elements/Item';

//Styled Components
import Container from '../styled/Container.styled';

const ItemList = () => {
  const products = useProducts();

    return (
        <>
				<Container>
					<Grid container spacing={3}>
						{products.map(product => {
							return (
								<Grid item xs={12} md={4} lg={3} key={product.id}>
									<Item id={product.id} title={product.title} stock={product.stock} description={product.description} price={product.price} image={product.imagesURL[0]} />
								</Grid>
							);
						})}
					</Grid>
				</Container>
			</>
    )
};


export default ItemList;