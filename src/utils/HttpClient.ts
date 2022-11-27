import HTTP_ERROR_STATUSES, { HTTP_ERROR_CODE } from '../constants/HttpErrorStatus';
import { SESSION_TOKEN_SESSION_STORAGE_KEY } from '../constants';
import { toast } from 'react-toastify';

interface FetchInit extends RequestInit {
    data?: Record<string, any>;
}

type Input = RequestInfo | URL;

async function HttpClient<T>(input: Input, init?: FetchInit) {
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
        headers: {
            Authorization: window.sessionStorage.getItem(SESSION_TOKEN_SESSION_STORAGE_KEY) ?? undefined
        } as HeadersInit,
        body: requestBody
    });
    const { status } = res;
    switch (status) {
        case 200:
            return (await res.json()) as Promise<T>;
        case 204:
            return Promise.resolve(undefined);
        default:
            const errorMessage = HTTP_ERROR_STATUSES[status as HTTP_ERROR_CODE] ?? 'Something got wrong!';
            toast(errorMessage, {
                type: toast.TYPE.ERROR
            });
            throw Error(errorMessage);
    }
}
export default HttpClient;
