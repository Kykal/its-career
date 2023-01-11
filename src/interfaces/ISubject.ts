import Subject from "../models/Subject";

export default interface ISubject {
	abreviation: string;
	credits: number;
	name: string;
	learningUnitAreaAbbreviation: string;
	learningUnitAreaName: string;
	semester: number;
	spaces: number;
	status: number;

	ordinaryHours: number | null;
	laboratoryHours: number | null;

	fromJSON: () => Subject;
}
