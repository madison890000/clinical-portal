import React from 'react';
import ClinicianDetail from '../ClinicianDetail';
import { render, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

test('renders ClinicianDetail Page', async () => {
    const { container } = render(
        <BrowserRouter>
            <ClinicianDetail />
        </BrowserRouter>
    );
    await waitFor(() => {
        expect(container).toMatchSnapshot();
    });
});
