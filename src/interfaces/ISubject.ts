import Subject from "../models/Subject";


export enum STATUS {
	PENDING,
	ONGOING,
	DONE
}


export default interface ISubject {
	abreviation: string;
	credits: number;
	name: string;
	learningUnitAreaAbbreviation: string;
	learningUnitAreaName: string;
	semester: number;
	spaces: number;
	status: STATUS;

	ordinaryHours: number | null;
	laboratoryHours: number | null;

	fromJSON: () => Subject;
}
