import { Button } from '@mui/material';

const MockLogout = () => {
    const logoutHandle = () => {};
    return (
        <Button variant="outlined" onClick={logoutHandle}>
            Logout
        </Button>
    );
};
export default MockLogout;
