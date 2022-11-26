import React from 'react';
import Login from '../Login';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

jest.mock('../../services', () => {
    return {
        getPatientById: () => {
            return Promise.resolve({
                title: 'Mr.',
                firstName: 'James',
                preferredName: 'Jay',
                middleName: 'Shaun',
                familyName: 'Cooper',
                age: 17,
                sex: 'Indeterminate'
            });
        }
    };
});
test('renders Login Page', async () => {
    const { container } = render(
        <BrowserRouter>
            <Login />
        </BrowserRouter>
    );
    await waitFor(() => {
        expect(container).toMatchSnapshot();
    });
});
