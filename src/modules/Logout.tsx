import { Button } from '@mui/material';
import { useNavigate } from 'react-router';
import { useContext } from 'react';
import { AppContext } from '../contexts/AppContext';

const Logout = () => {
    const { logout } = useContext(AppContext);
    const navigate = useNavigate();
    const logoutHandle = () => {
        window.sessionStorage.clear();
        logout();
        navigate('/login');
    };
    return (
        <Button variant="outlined" onClick={logoutHandle}>
            Logout
        </Button>
    );
};
export default Logout;
