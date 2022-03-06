import React from 'react';
import { Link } from 'react-router-dom';
import ContainerFlex from '../styled/ContainerFlex.styled';
import MenuItem from '../styled/MenuItem.styled';


const MenuDesktop = () => {
  return (
		<>
			<ContainerFlex>
				<Link to="/" style={{ textDecoration: 'none' }}>
					<MenuItem>
						Home
					</MenuItem>
				</Link>
				<Link to="/about" style={{ textDecoration: 'none' }}>
					<MenuItem>
						About
					</MenuItem>
				</Link>
			</ContainerFlex>
  	</>);
};

export default MenuDesktop;
