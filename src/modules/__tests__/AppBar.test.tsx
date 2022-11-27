import React from 'react';
import AppBar from '../AppBar';
import { render, waitFor } from '@testing-library/react';
import wrapper from '../../tests/reactQueryWrapper';
import { BrowserRouter } from 'react-router-dom';

test('renders PatientDetail correctly', async () => {
    const { container } = render(
        <BrowserRouter>
            <AppBar />
        </BrowserRouter>,
        { wrapper }
    );
    await waitFor(() => {
        expect(container).toMatchSnapshot();
    });
});
