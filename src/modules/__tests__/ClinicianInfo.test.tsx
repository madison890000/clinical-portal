import React from 'react';
import ClinicianInfo from '../ClinicianInfo';
import renderer from 'react-test-renderer';
import { IClinician } from '../../types';

test('renders ClinicianInfo correctly', () => {
    const demoClinician = {
        username: 'joshs',
        role: 'General Practitioner',
        title: 'Dr',
        firstName: 'Joshua',
        preferredName: 'Josh',
        familyName: 'Smith'
    } as IClinician;
    const ClinicianInfoDom = renderer.create(<ClinicianInfo {...demoClinician} />).toJSON();
    expect(ClinicianInfoDom).toMatchSnapshot();
});
