import React from 'react';
import InfoItem from '../InfoItem';
import renderer from 'react-test-renderer';

test('renders InfoItem correctly', () => {
    const demoInfoItem = {
        name: 'Age',
        value: '18'
    };
    const InfoItemDom = renderer.create(<InfoItem {...demoInfoItem} />).toJSON();
    expect(InfoItemDom).toMatchSnapshot();
});
