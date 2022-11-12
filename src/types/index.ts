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


export type IPatientList = {
    patients: {
        id: string;
        name: string;
    }[];
}

export type IBaseErrorResponse = {
    httpStatusCode: number;
    errorMessage: string;
}
