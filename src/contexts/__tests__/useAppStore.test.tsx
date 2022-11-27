import { act, renderHook } from '@testing-library/react';
import useAppStore from '../useAppStore';
import { LoginStatus } from '../../types';
import wrapper from '../../tests/reactQueryWrapper';

jest.mock('node-fetch', () => jest.requireActual('fetch-mock'));

jest.mock('../../services', () => {
    return {
        login: () => {
            return Promise.resolve();
        }
    };
});

const sleep = (delay: number = 300) =>
    new Promise(resolve =>
        setTimeout(() => {
            resolve('');
        }, delay)
    );

describe('useAppStore 1', () => {
    test('init store should contain loginStatus = not login', () => {
        const { result } = renderHook(() => useAppStore(), { wrapper });
        expect(result.current.loginStatus).toBe(LoginStatus.NotLogin);
    });
});

describe('useAppStore 2', () => {
    test('call login success should update loginStatus to Login', async () => {
        const { result } = renderHook(() => useAppStore(LoginStatus.NotLogin), { wrapper });
        await act(() => {
            result.current.login('test user', 'test password');
        });
        await sleep();
        expect(result.current.loginStatus).toBe(LoginStatus.Login);
    });
});

describe('useAppStore 3', () => {
    test('call logout success should update loginStatus to NotLogin', async () => {
        const { result } = renderHook(() => useAppStore(LoginStatus.NotLogin), { wrapper });
        expect(result.current.loginStatus).toBe(LoginStatus.NotLogin);
        await act(() => {
            result.current.login('test user', 'test password');
        });
        await sleep();
        expect(result.current.loginStatus).toBe(LoginStatus.Login);
        await act(() => {
            result.current.logout();
        });
        await sleep();
        expect(result.current.loginStatus).toBe(LoginStatus.NotLogin);
    });
});
