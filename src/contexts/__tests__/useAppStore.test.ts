import { act, renderHook } from '@testing-library/react';
import useAppStore from '../useAppStore';
import { LoginStatus } from '../../types';
import { AlertColor } from '@mui/material';

function sleep(time: number) {
    return new Promise(resolve => setTimeout(() => resolve(''), time));
}

jest.mock('node-fetch', () => jest.requireActual('fetch-mock'));

jest.mock('../../services', () => {
    return {
        getClinicianInfo: () => {},
        getPatientList: () => {},
        login: () => {
            return undefined;
        }
    };
});

describe('useAppStore', () => {
    test('init store should contain loginStatus = not login', () => {
        const { result } = renderHook(() => useAppStore());
        expect(result.current.loginStatus).toBe(LoginStatus.NotLogin);
    });

    test('init store should update loginStatus correct by dispatch', async () => {
        const { result } = renderHook(() => useAppStore());
        expect(result.current.loginStatus).toBe(LoginStatus.NotLogin);
        act(() => {
            result.current.dispatch({
                type: 'ChangeLoginStatus',
                payload: LoginStatus.Login
            });
        });
        expect(result.current.loginStatus).toBe(LoginStatus.Login);
    });

    test('init store should update clinician correct by dispatch', async () => {
        const { result } = renderHook(() => useAppStore());
        expect(result.current.loginStatus).toBe(LoginStatus.NotLogin);
        const mockClinician = {
            username: 'test username',
            role: 'Clinician',
            title: 'test SR',
            firstName: 'John',
            preferredName: 'Joe',
            middleName: 'middle',
            familyName: 'smith'
        };
        act(() => {
            result.current.dispatch({
                type: 'UpdateClinician',
                payload: mockClinician
            });
        });
        expect(result.current.clinician).toBe(mockClinician);
    });

    test('init store should update patients correct by dispatch', async () => {
        const { result } = renderHook(() => useAppStore());
        expect(result.current.loginStatus).toBe(LoginStatus.NotLogin);
        const mockPatients = [
            {
                id: 'mock-patient-1',
                name: 'patient-1'
            },
            {
                id: 'mock-patient-2',
                name: 'patient-2'
            }
        ];
        act(() => {
            result.current.dispatch({
                type: 'UpdatePatients',
                payload: mockPatients
            });
        });
        expect(result.current.patients).toBe(mockPatients);
    });
    xit('init store should update loginStatus correct by login function', async () => {
        const { result } = renderHook(() => useAppStore());
        expect(result.current.loginStatus).toBe(LoginStatus.NotLogin);
        window.notificator = (message, severity: AlertColor) => {
            console.log('notificator called===>', message, severity);
        };
        act(() => {
            result.current.login('test username', 'test password');
        });
        expect(result.current.loginStatus).toBe(LoginStatus.Login);
    });
});
