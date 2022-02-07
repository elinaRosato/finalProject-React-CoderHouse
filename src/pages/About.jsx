import React from 'react';
import Heading from '../components/styled/Heading.styeled';
import Container from '../components/styled/Container.styled';
import BackgroundDiv from '../components/styled/BackgroundDiv.styled';

const About = () => {
    return (
        <Container>
				<BackgroundDiv />
				<div>
            <p>search bar, filters, sort</p>
        </div>
				<Heading>
					About PAGE. Coming soon...
				</Heading>
    
			</Container>
    );
};

export default About;
