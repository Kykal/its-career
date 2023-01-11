import React from 'react';


//Styles
import styled from 'styled-components';


const HeaderSx = styled.header({
	textAlign: 'center',
	paddingTop: '0.5em',
	paddingBottom: '.5em',
});



//Main component content
const Header = (): JSX.Element => {
	//Main component render
	return (
		<HeaderSx>
			<h1>Benavides' Career Progress</h1>
			<h3 id='career-program'>Ingeniero en Tecnología de Software</h3>
			<h5 id='university' >Universidad Autónoma de Nuevo León</h5>
		</HeaderSx>
	);
};


export default Header; //Export main component
