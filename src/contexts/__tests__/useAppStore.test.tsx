import { renderHook } from '@testing-library/react';
import useAppStore from '../useAppStore';
import { LoginStatus } from '../../types';
import wrapper from '../../tests/reactQueryWrapper';

jest.mock('node-fetch', () => jest.requireActual('fetch-mock'));

jest.mock('../../services', () => {
    return {
        login: () => {
            return undefined;
        }
    };
});

describe('useAppStore', () => {
    test('init store should contain loginStatus = not login', () => {
        const { result } = renderHook(() => useAppStore(), { wrapper });
        expect(result.current.loginStatus).toBe(LoginStatus.NotLogin);
    });
});
