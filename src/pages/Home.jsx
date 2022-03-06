import React from 'react';
import {Heading} from '../components/styled/Heading.styeled';
import Container from '../components/styled/Container.styled';
import BackgroundDiv from '../components/styled/BackgroundDiv.styled';
import ItemList from '../components/elements/ItemList';


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