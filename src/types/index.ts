export type IPerson = {
    title?: string;
    firstName: string;
    preferredName?: string;
    middleName?: string;
    familyName: string;
    suffix?: string;
}

export type IClinician = {
    username: string;
    role: string;
} & IPerson;

export type IPatient = {
    age: number;
    sex: 'Male' | 'Female' | 'Unknown' | 'Indeterminate';
} & IPerson;

export type PatientSummary = {
    id: string;
    name: string;
}

export type IPatientList = {
    patients: PatientSummary[];
}

export type IBaseErrorResponse = {
    httpStatusCode: number;
    errorMessage: string;
}

export enum LoginStatus {
    NotLogin,
    Login,
    TokenExpired
}
