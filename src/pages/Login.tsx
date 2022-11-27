import { useContext, useEffect, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Divider, Link, TextField, Typography } from '@mui/material';
import { AppContext } from '../contexts/AppContext';
import { useNavigate } from 'react-router';
import styles from './Login.module.scss';
import { LoginStatus } from '../types';
import { PORTAL_NAME, ROUTES } from '../constants';
import { useForm } from 'react-hook-form';
import Footer from '../modules/Footer';

type Inputs = {
    username: string;
    password: string;
};
const Login = () => {
    const { login, loginStatus } = useContext(AppContext);
    const { register, handleSubmit } = useForm<Inputs>();
    const [loading, setLoading] = useState<boolean>();
    const navigate = useNavigate();
    useEffect(() => {
        if (loginStatus === LoginStatus.Login) {
            navigate(ROUTES.ClinicianDetail);
        }
    }, [loginStatus, navigate]);
    const onSubmit = async ({ username, password }: Inputs) => {
        try {
            setLoading(true);
            await login(username, password);
            navigate('/clinician-detail');
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <div className={styles.title}>
                <Typography variant="h5" align="center">
                    {PORTAL_NAME} Sign In
                </Typography>
            </div>
            <div className={styles.loginContainer}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Typography variant="body2">Username or email address</Typography>
                    <div className={styles.inputContainer}>
                        <TextField
                            className={styles.input}
                            variant="outlined"
                            label="Required*"
                            size="small"
                            {...register('username', { required: true })}
                            placeholder="please input username"
                        />
                    </div>
                    <div className={styles.passwordContainer}>
                        <Typography variant="body2">Password</Typography>
                        <Link>Forgot password?</Link>
                    </div>
                    <div className={styles.inputContainer}>
                        <TextField
                            size="small"
                            className={styles.input}
                            label="Required*"
                            {...register('password', { required: true })}
                            placeholder="please input password"
                            type="password"
                        />
                    </div>
                    <Divider />
                    <div className={styles.buttonContainer}>
                        <LoadingButton
                            variant="contained"
                            loading={loading}
                            className={styles.signInContainer}
                            type="submit"
                        >
                            Sign in
                        </LoadingButton>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
};

export default Login;
