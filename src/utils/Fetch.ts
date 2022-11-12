import fetchMock from 'fetch-mock';
// @ts-ignore
import { initFetchMock } from './FetchMock/mock-api-source';
import HTTP_ERROR_STATUSES, { HTTP_CODE } from '../constants/HttpErrorStatus';
import { SESSION_TOKEN_SESSION_STORAGE_KEY } from '../constants';

initFetchMock(fetchMock);


interface FetchInit extends Omit<Omit<RequestInit, 'headers'>, 'body'> {
    data?: Record<string, any>;
    headers?: {
        'Content-Type': string;
        Authorization: string | null;
    };
}

async function fetchWithCatchError<T>(input: string, init?: FetchInit) {
    let requestBody: string | undefined;
    switch (init?.method) {
        case 'PUT':
            requestBody = init.data ? JSON.stringify(init.data) : undefined;
            break
        case 'POST':
            requestBody = init.data ? JSON.stringify(init.data) : undefined;
            break
        default:
            break;
    }
    // @ts-ignore
    const res = await fetch(input, {
        ...init,
        body: requestBody
    });
    const { status } = res;
    if (status === 200) {
        return await res.json() as Promise<T>
    } else if (status === 204) {
        return Promise.resolve('' as T);
    } else {
        throw Error(HTTP_ERROR_STATUSES[status as HTTP_CODE] ?? 'Error')
    }
}


export function fetchWithAuthorization<T>(input: string, init?: FetchInit) {
    return fetchWithCatchError<T>(input, {
        ...init,
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            // todo: mock api has error, need to fix, hard code token for test
            Authorization: window.sessionStorage.getItem(SESSION_TOKEN_SESSION_STORAGE_KEY)
        }
    })
}

export function fetchWithNoAuthorization<T>(input: string, init?: FetchInit) {
    return fetchWithCatchError<T>(input, init)
}

