import React from 'react';
import LoginForm from '../LoginForm';
import { fireEvent, render, waitFor } from '@testing-library/react';

const mockLogin = jest.fn(({ username, password }) => {
    return Promise.resolve({
        username,
        password
    });
});
const sleep = (delay: number = 300) =>
    new Promise(resolve =>
        setTimeout(() => {
            resolve('');
        }, delay)
    );
test('renders LoginForm correctly', async () => {
    const { container } = render(<LoginForm onSubmit={mockLogin} />);
    await waitFor(() => {
        expect(container).toMatchSnapshot();
    });
});

test('SignInButton click do nothing when no input values in form', async () => {
    const { container, getByTestId } = render(<LoginForm onSubmit={mockLogin} />);
    const SignInButton = getByTestId('sign-in-btn');
    fireEvent(
        SignInButton,
        new MouseEvent('click', {
            bubbles: true,
            cancelable: true
        })
    );
    expect(mockLogin).toHaveBeenCalledTimes(0);
});

test('SignInButton will submit when input values fit in form', async () => {
    const { getByTestId } = render(<LoginForm onSubmit={mockLogin} />);
    const usernameInput = getByTestId('sign-in-username');
    const passwordInput = getByTestId('sign-in-password');
    fireEvent.input(usernameInput, { target: { value: 'username' } });
    fireEvent.input(passwordInput, { target: { value: 'password' } });
    const SignInButton = getByTestId('sign-in-btn');
    fireEvent.submit(SignInButton);
    await waitFor(() => {});
    await sleep();
    expect(mockLogin).toBeCalledWith({
        username: 'username',
        password: 'password'
    });
});
