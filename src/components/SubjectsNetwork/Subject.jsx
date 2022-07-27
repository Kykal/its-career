import React from 'react';


//Styles
import styled from 'styled-components';


const checkForStatus = (status) => {
	if( status === "done" ){
		return ["hsl(138, 100%, 31%)", "0.25em solid #3FC87E"];
	}

	if( status === "ongoing" ){
		return ["hsl(183, 100%, 37%)", "0.25em solid hsl(183, 100%, 54%)"];
	}

	if( status === "pending" ){
		return ["hsl(203, 15%, 59%)", "0.25em solid hsl(194, 20%, 75%)"];
	}
};

//Styled components
const SubjectSx = styled.div`
	background-color: ${props=> props.bgColor};
	border: ${props => props.border};
	grid-row-start: ${props => props.rowStart};
	grid-row-end: ${props => `span ${props.rowEnd}`};
	grid-column-start: ${props => props.column};
	grid-column-end: ${props => props.column};
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	min-height: 4.9em;

	& #subject-name {
		text-align: center;
		font-weight: bold;
		font-size: small;
	}

	& h5, #area, #credits, #hours {
		position: absolute;
		font-size: small;
	}
`;

const Credits = styled.abbr`
	top: 0.25em;
	right: 0.5em;
`;

const Area = styled.abbr`
	bottom: 0.25em;
	right: 0.5em;
`;

const Hours = styled.div`
	top: 0.25em;
	left: 0.5em;
`;


//Main component content
const Subject = (props) => {

	const data = props.subject;

	const [ bgColor, border ] = checkForStatus(data.status);

	const learningUnitArea = data.learningUnitArea;
	const hours = data.hours;


	//Component render
	return (
		<SubjectSx 
			bgColor={bgColor} 
			border={border}
			className="subject"
			rowStart={data.row}
			rowEnd={data.spaces}
			column={data.semester}
			íd={data.name}
		>
			<span id="subject-name" >
				{data.status === "pending" ? (
					<i>{data.name}</i>
				) : (
						data.name
				)}
			</span>
			<Credits id="credits" title="Creditos" >{data.credits}</Credits>
			<Area id="area" title={learningUnitArea.name} >{learningUnitArea.abbreviation}</Area>
			<Hours id="hours" >
				{hours.laboratory > 0 ? (
					<>
						<abbr title="Horas en clase ordinaria">{hours.ordinary}</abbr> + <abbr title="Horas en laboratorio">{hours.laboratory}</abbr>
					</>
				) : (
					<>
						<abbr title="Horas en clase ordinaria">{hours.ordinary}</abbr>
					</>
				) }
			</Hours>
		</SubjectSx>
	);
};


export default Subject; //Export main component
