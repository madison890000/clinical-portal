import React from 'react';
import '../Notification';

jest.useFakeTimers().setSystemTime(new Date('2020-01-01'));

test('renders notificator correctly', () => {
    window.notificator('test notifactor', 'success');
    expect(document.body).toMatchSnapshot();
});

test('renders notificator correctly. severity ', () => {
    window.notificator('test notifactor AlertColor warning', 'warning');
    expect(document.body).toMatchSnapshot();
});

test('renders notificator correctly. info ', () => {
    window.notificator('test notifactor AlertColor info', 'info');
    expect(document.body).toMatchSnapshot();
});

test('renders notificator correctly. error ', () => {
    window.notificator('test notifactor AlertColor error', 'error');
    expect(document.body).toMatchSnapshot();
});
