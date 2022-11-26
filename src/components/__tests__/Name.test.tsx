import React from 'react';
import Name from '../Name';
import renderer from 'react-test-renderer';
import { IPerson } from '../../types';

test('renders Name correctly', () => {
    const demoPerson = {
        username: 'joshs',
        role: 'General Practitioner',
        title: 'Dr',
        firstName: 'Joshua',
        preferredName: 'Josh',
        familyName: 'Smith'
    } as IPerson;
    const NameDom = renderer.create(<Name {...demoPerson} />).toJSON();
    expect(NameDom).toMatchSnapshot();
});
