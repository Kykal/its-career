import React from 'react';


//Styles
import styled from 'styled-components';


//Styled components
const HeaderSx = styled.header`
	text-align: center;
	color: white;
	padding-top: 1em;
	padding-bottom: 1em;

	& a {
		color: white;
	}
`;

//Main component content
const Header = () => {


	//Component render
	return (
		<HeaderSx>
			<h1>Carrera Universitaria de Benavides</h1>
			<h3>
				<a 
					href="https://www.uanl.mx/en/oferta/bachelor-of-software-technology-engineering/" 
					target="_blank" 
					rel="noreferrer"
				>
					Ingeniero en Tecnología de Software
				</a>
			</h3>
			<h6>
				<a 
					href="https://www.uanl.mx/en/"
					target="_blank"
					rel="noreferrer"
				>
					Universidad Autónoma de Nuevo León
				</a>
			</h6>
		</HeaderSx>
	);
};


export default Header; //Export main component
