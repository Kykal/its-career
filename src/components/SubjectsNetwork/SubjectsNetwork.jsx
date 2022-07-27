import React from 'react';


//Axios
import axios from 'axios';


//Styles
import styled from 'styled-components';


//Custom components
import Subject from './Subject';


//Styled components
const MainSx = styled.main`
	padding-top: 0.5em;
	
	display: flex;
	align-items: center;
	justify-content: center;
`;

const Network = styled.div`
	display: grid;

	width: 97.5vw;
	max-width: 97.5vw;


	grid-template-columns: repeat(10, 1fr);
	grid-template-rows: repeat(8, 1fr);
	gap: 0.25em;


	& div {
		color: hsl( 0, 0%, 12.5% );
	}
`;

//Main component content
const SubjectsNetwork = () => {

	//To store fetched data
	const [ subjects, setSubjects ] = React.useState(null);


	//Fetch subjects from "web"
	React.useEffect( () => {
		axios.get('network.json')
			.then( response => setSubjects(response.data) )
			.catch( error => setSubjects(error) );
	}, [] );

	//Component render
	return (
		<MainSx>
			<Network id="network" >
				{subjects && (
					<>
						{subjects.map( (subject, index) => (
							<Subject subject={subject} key={index} />
						) )}
					</>
				)}
			</Network>
		</MainSx>
	);
};


export default SubjectsNetwork; //Export main component
