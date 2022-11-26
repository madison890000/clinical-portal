import React from 'react';
import TabPanel from '../TabPanel';
import renderer from 'react-test-renderer';

test('renders TabPanel active correctly', () => {
    const TabPanelDom = renderer
        .create(
            <TabPanel value={1} index={1}>
                <div>Tab panel Content</div>
            </TabPanel>
        )
        .toJSON();
    expect(TabPanelDom).toMatchSnapshot();
});

test('renders TabPanel non-active correctly', () => {
    const TabPanelDom = renderer
        .create(
            <TabPanel value={0} index={1}>
                <div>Tab panel Content</div>
            </TabPanel>
        )
        .toJSON();
    expect(TabPanelDom).toMatchSnapshot();
});
