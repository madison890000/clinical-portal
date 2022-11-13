import React, { PropsWithChildren } from 'react';
import { IClinician, LoginStatus, PatientSummary } from '../types';
import useAppStore from './useAppStore';

interface IAppContext {
    loginStatus: LoginStatus;
    login: (username: string, password: string) => Promise<void>;
    logout: () => Promise<void>;
    clinician?: IClinician;
    patients?: PatientSummary[];
}

export const AppContext = React.createContext({} as IAppContext);

export const AppContextContainer = ({ children }: PropsWithChildren) => {
    const {
        loginStatus,
        clinician,
        login,
        logout,
        patients,
    } = useAppStore();
    return (
        <AppContext.Provider
            value={{
                loginStatus,
                login,
                logout,
                clinician,
                patients,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};
