import React from 'react';
import PatientDetail from '../PatientDetail';
import { render, waitFor } from '@testing-library/react';
import wrapper from '../../tests/reactQueryWrapper';

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
test('renders PatientDetail correctly', async () => {
    const { container } = render(<PatientDetail id="test" />, { wrapper });
    await waitFor(() => {
        expect(container).toMatchSnapshot();
    });
});
