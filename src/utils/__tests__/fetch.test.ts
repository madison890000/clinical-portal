import { fetchWithLogin } from '../Fetch';

const mockNotificator = jest.fn();
let tempFetch = fetch;
beforeEach(() => {
    // @ts-ignore
    window.fetch = (url: string, init) => {
        // @ts-ignore
        if (init?.data?.password !== 'wrong password') {
            return Promise.resolve({
                status: 200,
                json: () => Promise.resolve()
            });
        }
        return Promise.resolve({
            status: 400,
            json: () => Promise.resolve()
        });
    };
    window.notificator = mockNotificator;
});
afterEach(() => {
    window.fetch = tempFetch;
});
describe('utils -----> fetch ---> fetchWithLogin ', () => {
    test('fetchWithLogin : wrong password', async () => {
        try {
            await fetchWithLogin('/login', {
                method: 'POST',
                data: {
                    username: 'joshs',
                    password: 'wrong password'
                }
            });
        } catch (e) {
            console.log(e);
        } finally {
            expect(mockNotificator).toBeCalledTimes(1);
        }
    });

    test('fetchWithLogin: correct password', async () => {
        try {
            await fetchWithLogin('/login', {
                method: 'POST',
                data: {
                    username: 'joshs',
                    password: 'vuuGfKkt'
                }
            });
        } finally {
            expect(mockNotificator).toBeCalledTimes(0);
        }
    });
});
