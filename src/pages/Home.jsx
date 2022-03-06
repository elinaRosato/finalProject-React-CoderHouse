import React from 'react';

// Components
import ItemList from '../components/elements/ItemList';

// Styled Components
import { Heading } from '../components/styled/Typography.styeled';
import Container from '../components/styled/Container.styled';
import BackgroundDiv from '../components/styled/BackgroundDiv.styled';


const Home = () => {
  return (
		<Container>
			<BackgroundDiv />
			<Heading>
				Shop
			</Heading>
			<ItemList />
		</Container>
    );
}

export default Home;