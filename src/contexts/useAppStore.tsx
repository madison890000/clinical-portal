import { useCallback, useEffect, useState } from 'react';
import { IClinician, LoginStatus, PatientSummary } from '../types';
import { getClinicianInfo, getPatientList, login } from '../services';
import { SESSION_TOKEN_SESSION_STORAGE_KEY } from '../constants';
import { useQuery } from 'react-query';

const useAppStore = () => {
    const [loginStatus, setLoginStatus] = useState(LoginStatus.NotLogin);
    const { data: clinician, refetch: refetchClinician } = useQuery<IClinician | undefined>(
        'getClinicianInfo',
        getClinicianInfo
    );
    const { data: patients, refetch: refetchPatients } = useQuery<PatientSummary[] | undefined>(
        'getPatients',
        getPatientList
    );
    const loginHandle = useCallback(
        async (username: string, password: string) => {
            await login(username, password);
            window.notificator('Login Success', 'success');
            setLoginStatus(LoginStatus.Login);
        },
        [setLoginStatus]
    );
    const logout = useCallback(() => {
        setLoginStatus(LoginStatus.NotLogin);
        window.notificator('Logout Success', 'success');
    }, [setLoginStatus]);
    useEffect(() => {
        if (loginStatus === LoginStatus.Login) {
            refetchClinician();
            refetchPatients();
        }
    }, [loginStatus, refetchClinician, refetchPatients]);

    useEffect(() => {
        if (window.sessionStorage.getItem(SESSION_TOKEN_SESSION_STORAGE_KEY)) {
            setLoginStatus(LoginStatus.Login);
        }
    }, []);
    return {
        loginStatus,
        login: loginHandle,
        logout,
        clinician,
        patients
    };
};

export default useAppStore;
