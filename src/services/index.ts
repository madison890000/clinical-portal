import { IClinician, IPatient, IPatientList } from '../types';
import { fetchWithAuthorization, fetchWithLogin } from '../utils/Fetch';

export const login = (username: string, password: string) => {
    return fetchWithLogin('/login', {
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

export const getPatientList = async () => {
    const res = await fetchWithAuthorization<IPatientList>('/patients');
    return res?.patients;
};

export const getPatientById = (patientId: string) => {
    return fetchWithAuthorization<IPatient>(`/patient-details/${patientId}`);
};
