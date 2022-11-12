import { Button } from '@mui/material';
import { useNavigate } from 'react-router';


const Logout = () => {
    const navigate = useNavigate();
    const Logout = () => {
        window.sessionStorage.clear();
        navigate('/login')

    }
    return (
        <Button onClick={Logout}>Logout</Button>
    )
}
export default Logout
