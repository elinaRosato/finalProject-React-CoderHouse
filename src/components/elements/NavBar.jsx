import React from 'react';
import { Link } from 'react-router-dom';

// Components
import { CartWidget, Logo, MenuDesktop } from '../../components';

// Styled Components
import ContainerFlex from '../styled/ContainerFlex.styled';
import Container from '../styled/Container.styled';


const NavBar = () => {
	return (
		<Container>	
			<ContainerFlex>
				<Link to="/" style={{ textDecoration: 'none' }}>
					<Logo size='50px'/>
				</Link>
				<MenuDesktop />
				<Link to="/cart" style={{ textDecoration: 'none' }}>
					<CartWidget />
				</Link>
			</ContainerFlex>
		</Container>
	);
}

export default NavBar; 