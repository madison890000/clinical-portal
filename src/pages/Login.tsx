import { useContext, useEffect, useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Card, Input, Typography } from '@mui/material';
import { AppContext } from '../contexts/AppContext';
import { useNavigate } from 'react-router';
import styles from './Login.module.scss';
import { LoginStatus } from '../types';

const Login = () => {
    const { login, loginStatus } = useContext(AppContext);
    const [loading, setLoading] = useState<boolean>();
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const navigate = useNavigate();
    useEffect(() => {
        if (loginStatus === LoginStatus.Login) {
            navigate('/clinician-detail');
        }
    }, [loginStatus, navigate]);
    const onSubmit = async () => {
        if (username && password) {
            setLoading(true);
            try {
                await login(username, password);
                navigate('/clinician-detail');
            } finally {
                setLoading(false);
            }
        } else {
            console.log('user name or password not correct');
        }
    };
    return (
        <>
            <div className={styles.title}>
                <Typography variant="h4" align="center">
                    Clinical Portal Sign In
                </Typography>
            </div>
            <Card className={styles.loginContainer}>
                <Typography variant="caption">Username</Typography>
                <div className={styles.inputContainer}>
                    <Input
                        className={styles.input}
                        value={username}
                        onChange={e => setUsername(e?.target?.value)}
                        placeholder="please input username"
                    />
                </div>
                <Typography variant="caption">Password</Typography>
                <div className={styles.inputContainer}>
                    <Input
                        className={styles.input}
                        value={password}
                        onChange={e => setPassword(e?.target?.value)}
                        placeholder="please input password"
                        type="password"
                    />
                </div>
                <div className={styles.buttonContainer}>
                    <LoadingButton
                        variant="contained"
                        loading={loading}
                        disabled={!username || !password}
                        onClick={onSubmit}
                    >
                        Login
                    </LoadingButton>
                </div>
            </Card>
        </>
    );
};

export default Login;
