import { fetchWithAuthorization, fetchWithMockLogin } from '../utils/Fetch';
import { IClinician, IPatient, IPatientList } from '../types';

export const login = (username: string, password: string) => {
    return fetchWithMockLogin('/login', {
        method: 'POST',
        data: {
            username,
            password
        }
    });
};

export const getClinicianInfo = () => {
    return fetchWithAuthorization<IClinician>('/clinician-details');
};

export const getPatientList = () => {
    return fetchWithAuthorization<IPatientList>('/patients');
};

export const getPatientById = (patientId: string) => {
    return fetchWithAuthorization<IPatient>(`/patient-details/${patientId}`);
};
