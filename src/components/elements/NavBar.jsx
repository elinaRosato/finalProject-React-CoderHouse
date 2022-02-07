import React from 'react';
import { Link } from 'react-router-dom';
import { CartWidget, Logo, MenuDesktop } from '../../components';
import ContainerFlex from '../styled/ContainerFlex.styled';
import Container from '../styled/Container.styled';


const NavBar = () => {
	return (
		<Container>	
			<ContainerFlex>
				<Link to="/">
					<Logo size='50px'/>
				</Link>
				<MenuDesktop />
				<Link to="/cart">
					<CartWidget />
				</Link>
			</ContainerFlex>
		</Container>
	);
}

export default NavBar; 