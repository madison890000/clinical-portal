import { IClinician, IPatient, IPatientList } from '../types';
import HttpClient from '../utils/HttpClient';

export const login = (username: string, password: string) => {
    return HttpClient('/login', {
        method: 'POST',
        data: {
            username,
            password
        }
    });
};

export const getClinicianInfo = () => {
    return HttpClient<IClinician>('/clinician-details');
};

export const getPatientList = async () => {
    const res = await HttpClient<IPatientList>('/patients');
    return res?.patients;
};

export const getPatientById = (patientId: string) => {
    return HttpClient<IPatient>(`/patient-details/${patientId}`);
};
