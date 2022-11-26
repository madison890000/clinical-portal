import { AlertColor, Snackbar } from '@mui/material';
import { Alert } from '@mui/lab';
import { useState } from 'react';
import { createPortal, render } from 'react-dom';
import { NOTIFICATION_DURATION_TIME } from '../constants';

const Notification = ({ message, severity }: any) => {
    const [open, setOpen] = useState(true);
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    return (
        <Snackbar open={open} autoHideDuration={NOTIFICATION_DURATION_TIME} onClose={handleClose}>
            <Alert onClose={handleClose} severity={severity} sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    );
};

const notificator = (message: string, severity: AlertColor) => {
    const notificatorDom = document.createElement('div');
    notificatorDom.setAttribute('id', `notificator-${Date.now()}`);
    document.body.appendChild(notificatorDom);
    render(
        createPortal(<Notification message={message} severity={severity} />, notificatorDom),
        document.createElement('div')
    );
    setTimeout(() => {
        notificatorDom.remove();
    }, NOTIFICATION_DURATION_TIME);
};

window.notificator = notificator;
