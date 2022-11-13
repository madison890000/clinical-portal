import { useCallback, useEffect, useReducer } from 'react';
import { IClinician, LoginStatus, PatientSummary } from '../types';
import { getClinicianInfo, getPatientList, login } from '../services';
import { SESSION_TOKEN_SESSION_STORAGE_KEY } from '../constants';


type State = {
    loginStatus: LoginStatus;
    clinician?: IClinician;
    patients: PatientSummary[];
}

type ChangeLoginStatusAction = {
    type: 'ChangeLoginStatus';
    payload: LoginStatus;
}
type UpdateClinicianAction = {
    type: 'UpdateClinician';
    payload?: IClinician;
}
type UpdatePatientsAction = {
    type: 'UpdatePatients';
    payload: PatientSummary[];
}
type LogoutAction = {
    type: 'Logout';
}

type Action = ChangeLoginStatusAction | UpdateClinicianAction | UpdatePatientsAction | LogoutAction;

const INITIAL_STATE = {
    loginStatus: LoginStatus.NotLogin,
    patients: []
}
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'ChangeLoginStatus':
            return {
                ...state,
                loginStatus: action.payload,
            }
        case 'UpdateClinician':
            return {
                ...state,
                clinician: action.payload,
            }
        case 'UpdatePatients':
            return {
                ...state,
                patients: action.payload,
            }
        case 'Logout':
            return {
                ...INITIAL_STATE,
            }
        default:
            return state
    }
}


const useAppStore = () => {
    const [{ loginStatus, clinician, patients }, dispatch] = useReducer(reducer, INITIAL_STATE);
    const getClinicianDetail = useCallback(async () => {
        const info = await getClinicianInfo();
        dispatch({
            type: 'UpdateClinician',
            payload: info
        });
    }, [dispatch]);
    const getPatients = useCallback(async () => {
        const list = await getPatientList();
        dispatch({
            type: 'UpdatePatients',
            payload: list?.patients ?? []
        });
    }, [dispatch]);
    const loginHandle = useCallback(async (username: string, password: string) => {
        await login(username, password);
        window.notificator('Login Success', 'success');
        dispatch({
            type: 'ChangeLoginStatus',
            payload: LoginStatus.Login
        });
    }, [dispatch]);
    const logout = useCallback(async () => {
        dispatch({
            type: 'Logout',
        });
        window.notificator('Logout Success', 'success');
    }, [dispatch]);
    useEffect(() => {
        if (loginStatus === LoginStatus.Login) {
            getClinicianDetail();
            getPatients();
        }
    }, [loginStatus, getClinicianDetail, getPatients]);

    useEffect(() => {
        if (window.sessionStorage.getItem(SESSION_TOKEN_SESSION_STORAGE_KEY)) {
            dispatch({
                type: 'ChangeLoginStatus',
                payload: LoginStatus.Login
            });
        }
    }, []);
    return {
        loginStatus,
        login: loginHandle,
        logout,
        clinician,
        patients,
    }
}


export default useAppStore
