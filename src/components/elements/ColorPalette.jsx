import React from 'react'
import Container from '../styled/Container.styled'
import ContainerFlex from '../styled/ContainerFlex.styled'
import { NormalText } from '../styled/Heading.styeled'

const ColorPalette = () => {
  return (
		<Container>
			<NormalText>
				ColorPalette
			</NormalText>
			<ContainerFlex>
				<div style={{height: '1rem', backgroundColor: '#7ECA9C'}}></div>
			</ContainerFlex>
		</Container>
  )
}

export default ColorPalette