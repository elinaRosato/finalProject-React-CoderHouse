import React from 'react'

// Styled Components
import Container from '../styled/Container.styled'
import ContainerFlex from '../styled/ContainerFlex.styled'
import { NormalText } from '../styled/Typography.styeled'

const ColorPalette = () => {
  return (
		<Container>
			<NormalText>
				ColorPalette
			</NormalText>
			<ContainerFlex>
				<div style={{height: '1rem', backgroundColor: '#7ECA9C'}}>primary</div>
				<div style={{height: '1rem', backgroundColor: '#CCFFBD'}}>secondary</div>
				<div style={{height: '1rem', backgroundColor: '#F7F7EE'}}>light</div>
				<div style={{height: '1rem', backgroundColor: '#1C1427'}}>dark</div>
				<div style={{height: '1rem', backgroundColor: '#40394A'}}>grey</div>
				<div style={{height: '1rem', backgroundColor: '#FB7813'}}>accent</div>
			</ContainerFlex>
		</Container>
  )
};

export default ColorPalette