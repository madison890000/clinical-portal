import fetchMock from 'fetch-mock';
import { initFetchMock } from './FetchMock/mock-api-source';
import HTTP_ERROR_STATUSES, { HTTP_ERROR_CODE } from '../constants/HttpErrorStatus';
import { SESSION_TOKEN_SESSION_STORAGE_KEY } from '../constants';
import { USE_NAME_AND_PASSWORD_MAP } from './FetchMock/login';

initFetchMock(fetchMock);


interface FetchInit extends RequestInit {
    data?: Record<string, any>;
}

type Input = RequestInfo | URL;

async function fetchWithCatchError<T>(input: Input, init?: FetchInit) {
    let requestBody: string | undefined;
    switch (init?.method) {
        case 'PUT':
        case 'POST':
            requestBody = init.data ? JSON.stringify(init.data) : undefined;
            break;
        default:
            break;
    }
    const res = await fetch(input, {
        ...init,
        body: requestBody
    });
    const { status } = res;
    switch (status) {
        case 200:
            return await res.json() as Promise<T>;
        case 204:
            return Promise.resolve(undefined);
        default:
            const errorMessage = HTTP_ERROR_STATUSES[status as HTTP_ERROR_CODE] ?? 'Something got wrong!';
            window.notificator(errorMessage, 'error');
            throw Error(errorMessage)
    }
}


export function fetchWithAuthorization<T>(input: Input, init?: FetchInit) {
    return fetchWithCatchError<T>(input, {
        ...init,
        headers: {
            'Authorization': window.sessionStorage.getItem(SESSION_TOKEN_SESSION_STORAGE_KEY) ?? undefined,
        } as HeadersInit,
    })
}

export function fetchWithMockLogin<T>(input: Input, init: FetchInit) {
    const { username, password } = init?.data ?? {};
    const key = `${username}-${password}` as keyof typeof USE_NAME_AND_PASSWORD_MAP;
    const token = USE_NAME_AND_PASSWORD_MAP[key];
    return fetchWithCatchError<T>(input, {
        ...init,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            Authorization: token ?? 'bear wrong token'
        } as HeadersInit,
    })
}

