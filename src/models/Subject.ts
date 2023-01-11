//Enums
import { STATUS } from "../interfaces/ISubject";


export default class Subject {
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

	constructor(
		name: string,
		abbreviation: string,
		credits: number,
		learningUnitAreaName: string,
		learningUnitAreaAbbreviation: string,
		semester: number,
		spaces: number,
		status: number,

		ordinaryHours: number | null,
		laboratoryHours: number | null,
	){
		this.name = name;
		this.abreviation = abbreviation;
		this.credits = credits;
		this.ordinaryHours = ordinaryHours;
		this.laboratoryHours = laboratoryHours;
		this.semester = semester;
		this.spaces = spaces;
		this.status = status;


		this.learningUnitAreaName = learningUnitAreaName;
		this.learningUnitAreaAbbreviation = learningUnitAreaAbbreviation;
	}

	public fromJSON(json: any): Subject {
		return new Subject(
			json['name'],
			json['abbreviation'],
			json['credits'],
			json['learningUnitAreaName'],
			json['learningUnitAreaAbbreviation'],
			json['semester'],
			json['spaces'],
			json['status'],
			json['ordinaryHours'] ?? null,
			json['laboratoryHours'] ?? null,
		);
	}
}
