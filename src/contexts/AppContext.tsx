import React, {
    Dispatch,
    PropsWithChildren,
    SetStateAction,
    useCallback,
    useEffect,
    useState
} from 'react';
import { IClinician, LoginStatus, PatientSummary } from '../types';
import { getClinicianInfo, getPatientList, login } from '../services';
import { SESSION_TOKEN_SESSION_STORAGE_KEY } from '../constants';

interface IAppContext {
    loginStatus: LoginStatus;
    login: (username: string, password: string) => Promise<void>;
    setLoginStatus: Dispatch<SetStateAction<LoginStatus>>;
    clinician?: IClinician;
    patients?: PatientSummary[];
}

export const AppContext = React.createContext({} as IAppContext);


const useAppStore = () => {
    const [loginStatus, setLoginStatus] = useState<LoginStatus>(LoginStatus.NotLogin);
    const [clinician, setClinician] = useState<IClinician>();
    const [patients, setPatients] = useState<PatientSummary[]>([]);
    const getClinicianDetail = useCallback(async () => {
        const info = await getClinicianInfo();
        setClinician(info);
    }, [setClinician]);
    const getPatients = useCallback(async () => {
        const list = await getPatientList();
        setPatients(list?.patients);
    }, [setPatients]);
    const loginHandle = useCallback(async (username: string, password: string) => {
        await login(username, password);
        setLoginStatus(LoginStatus.Login);
    }, [setLoginStatus]);
    useEffect(() => {
        if (loginStatus === LoginStatus.Login) {
            getClinicianDetail();
            getPatients();
        }
    }, [loginStatus, getClinicianDetail, getPatients]);

    useEffect(() => {
        if (window.sessionStorage.getItem(SESSION_TOKEN_SESSION_STORAGE_KEY)) {
            setLoginStatus(LoginStatus.Login);
        }
    }, [])
    return {
        loginStatus,
        login: loginHandle,
        setLoginStatus,
        clinician,
        patients,
    }
}


export const AppContextContainer = ({ children }: PropsWithChildren) => {
    const {
        loginStatus,
        clinician,
        login,
        setLoginStatus,
        patients,
    } = useAppStore();
    return (
        <AppContext.Provider
            value={{
                loginStatus,
                login,
                setLoginStatus,
                clinician,
                patients,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
