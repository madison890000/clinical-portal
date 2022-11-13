import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';
import { ROUTES } from '../constants';

const Logout = () => {
    const { logout } = useContext(AppContext);
    const navigate = useNavigate();
    const logoutHandle = () => {
        window.sessionStorage.clear();
        logout();
        navigate(ROUTES.Login);
    };
    return (
        <Button variant="outlined" onClick={logoutHandle}>
            Logout
        </Button>
    );
};
export default Logout;
