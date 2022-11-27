import HttpClient from '../HttpClient';
import HTTP_ERROR_STATUSES from '../../constants/HttpErrorStatus';

let tempFetch = fetch;
beforeEach(() => {
    // @ts-ignore
    window.fetch = (url: string, init) => {
        // @ts-ignore
        switch (init?.data?.testCode) {
            case 200:
                return Promise.resolve({
                    status: 200,
                    headers: {},
                    json: () => Promise.resolve('success')
                });
            case 204:
                return Promise.resolve({
                    status: 204,
                    headers: {},
                    json: () => Promise.resolve()
                });
            case 400:
                return Promise.resolve({
                    status: 400,
                    json: () =>
                        Promise.resolve({
                            httpStatusCode: 400,
                            errorMessage: 'no-auth'
                        })
                });
            case 404:
                return Promise.resolve({
                    status: 404,
                    json: () =>
                        Promise.resolve({
                            httpStatusCode: 404,
                            errorMessage: 'not found'
                        })
                });
            case 502:
                return Promise.resolve({
                    status: 502,
                    json: () =>
                        Promise.resolve({
                            httpStatusCode: 502,
                            errorMessage: '502 error'
                        })
                });
            default:
                return Promise.resolve({
                    status: 200,
                    headers: {},
                    json: () => Promise.resolve('success')
                });
        }
    };
});
afterEach(() => {
    window.fetch = tempFetch;
});
describe('utils -----> HttpClient ---> fetchWithLogin ', () => {
    test('HttpClient : status === 200', async () => {
        const res = await HttpClient('/login', {
            method: 'POST',
            data: {
                testCode: 200
            }
        });
        expect(res).toEqual('success');
    });
    test('HttpClient : status === 200', async () => {
        const res = await HttpClient('/normal-get', {
            method: 'GET',
            data: {
                testCode: 200
            }
        });
        expect(res).toEqual('success');
    });
    test('HttpClient : status === 204', async () => {
        const res = await HttpClient('/login', {
            method: 'POST',
            data: {
                testCode: 204
            }
        });
        expect(res).toBeUndefined();
    });
    test('HttpClient : status === 400 return error', async () => {
        try {
            await HttpClient('/login', {
                method: 'POST',
                data: {
                    testCode: 400
                }
            });
        } catch (e) {
            // @ts-ignore
            expect(e.message).toBe(HTTP_ERROR_STATUSES[400]);
        }
    });
    test('HttpClient : status === 404 return error', async () => {
        try {
            await HttpClient('/login', {
                method: 'POST',
                data: {
                    testCode: 404
                }
            });
        } catch (e) {
            // @ts-ignore
            expect(e.message).toBe(HTTP_ERROR_STATUSES[404]);
        }
    });
    test('HttpClient : status === 502 return error', async () => {
        try {
            await HttpClient('/login', {
                method: 'POST',
                data: {
                    testCode: 502
                }
            });
        } catch (e) {
            // @ts-ignore
            expect(e.message).toBe('Something got wrong!');
        }
    });
});
