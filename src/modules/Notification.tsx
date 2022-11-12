import { AlertColor, Snackbar } from '@mui/material';
import { Alert } from '@mui/lab';
import { useEffect, useState } from 'react';
import { NOTIFICATION_DURATION_TIME } from '../constants';


const Notification = () => {
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [severity, setSeverity] = useState<AlertColor>('success');

    const handleClick = (message: string, severity: AlertColor) => {
        setMessage(message)
        setSeverity(severity);
        setOpen(true);
        setTimeout(() => {
            setMessage('')
        }, NOTIFICATION_DURATION_TIME + 500)
    };
    useEffect(() => {
        window.notificator = handleClick;
    }, [])
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
    )
}

export default Notification
