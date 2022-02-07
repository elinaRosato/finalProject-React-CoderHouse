import React from 'react';
import { ItemListContainer } from '../components';
import Container from '../components/styled/Container.styled';
import BackgroundDiv from '../components/styled/BackgroundDiv.styled';
import Heading from '../components/styled/Heading.styeled';


const Shop = () => {
  return (
			<Container>
				<BackgroundDiv />
				<div>
            <p>search bar, filters, sort</p>
        </div>
				<Heading>
					Shop
				</Heading>
        
        <ItemListContainer />
			</Container>
);
};

export default Shop;
