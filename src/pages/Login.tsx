import { useContext, useEffect } from 'react';
import { Typography } from '@mui/material';
import { AppContext } from '../contexts/AppContext';
import { useNavigate } from 'react-router';
import styles from './Login.module.scss';
import { LoginStatus } from '../types';
import { PORTAL_NAME, ROUTES } from '../constants';
import Footer from '../modules/Footer';
import LoginForm from '../modules/LoginForm';

type Inputs = {
    username: string;
    password: string;
};
const Login = () => {
    const { login, loginStatus } = useContext(AppContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (loginStatus === LoginStatus.Login) {
            navigate(ROUTES.ClinicianDetail);
        }
    }, [loginStatus, navigate]);
    const onSubmit = async ({ username, password }: Inputs) => {
        await login(username, password);
        navigate('/clinician-detail');
    };
    return (
        <>
            <div className={styles.title}>
                <Typography variant="h5" align="center">
                    {PORTAL_NAME} Sign In
                </Typography>
            </div>
            <div className={styles.loginContainer}>
                <LoginForm onSubmit={onSubmit} />
            </div>
            <Footer />
        </>
    );
};

export default Login;
