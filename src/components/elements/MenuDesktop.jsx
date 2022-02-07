import React from 'react';
import { BrowserRouter as  Link } from 'react-router-dom';
import ContainerFlex from '../styled/ContainerFlex.styled';
import MenuItem from '../styled/MenuItem.styled';


const MenuDesktop = () => {
  return (
		<>
			<ContainerFlex>
				<MenuItem>
					<Link to="/">Home</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/shop">Shop</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/recipes">Recipes</Link>
				</MenuItem>
				<MenuItem>
					<Link to="/about">About</Link>
				</MenuItem>
			</ContainerFlex>
  	</>);
};

export default MenuDesktop;
