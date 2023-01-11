import React, { useState, useEffect } from 'react';


//Axios
import axios from 'axios';


//Styles
import styled from 'styled-components';
import Subject from '../../models/Subject';
import ISubject from '../../interfaces/ISubject';


const MainSx = styled.main({
	display: 'grid',
	gridTemplateColumns: 'repeat( 10, 1fr )',
});

//Main component content
const Main = (): JSX.Element => {
	const [ subjects, setSubjects ] = useState<Subject[] | null>([]);

	useEffect( () => {
		const fetch = async () => {
			axios.get('https://raw.githubusercontent.com/Kykal/its-career/main/public/network.json')
				.then( ({data}) => {
					console.log( data );
				} )
				.catch((error) => {
					console.error( error );
					setSubjects(null);
				});
		}

		fetch();
	}, [] );

	//Main component render
	return (
		<MainSx>
			
		</MainSx>
	);
};


export default Main; //Export main component
