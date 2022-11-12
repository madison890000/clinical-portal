import fetchMock from 'fetch-mock';
// @ts-ignore
import { initFetchMock } from './FetchMock/mock-api-source';
import HTTP_ERROR_STATUSES, { HTTP_CODE } from '../constants/HttpErrorStatus';

initFetchMock(fetchMock);


interface FetchInit extends Omit<Omit<RequestInit, 'headers'>, 'body'> {
    data?: Record<string, any>;
    headers?: {
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
    const { status, body } = res;
    if (status === 200) {
        if (body && body.hasOwnProperty('json')) {
            // @ts-ignore
            return body.json() as Promise<T>;
        }
        return Promise.resolve('');
    } else if (status === 204) {
        return Promise.resolve('');
    } else {
        throw Error(HTTP_ERROR_STATUSES[status as HTTP_CODE] ?? 'Error')
    }
}


export function fetchWithAuthorization<T>(input: string, init?: FetchInit) {
    return fetchWithCatchError<T>(input, {
        ...init,
        headers: {
            // todo: mock api has error, need to fix, hard code token for test
            Authorization: 'Basic am9zaHM6dnV1R2ZLa3Q='
        }
    })
}

export function fetchWithNoAuthorization<T>(input: string, init?: FetchInit) {
    return fetchWithCatchError<T>(input, init)
}

