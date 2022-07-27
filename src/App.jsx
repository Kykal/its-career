import React from 'react';


//To fetch data
import axios from 'axios';


//Custom components
import Header from './components/Header';
import SubjectsNetwork from './components/SubjectsNetwork/SubjectsNetwork';


//Main component content
const App = () => {

	//Component render
	return (
		<>
			<Header />
			<SubjectsNetwork />
		</>
	);
};


export default App; //Export main component
