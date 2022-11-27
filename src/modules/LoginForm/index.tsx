import { useState } from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import { Divider, Link, TextField, Typography } from '@mui/material';
import styles from './index.module.scss';
import { useForm } from 'react-hook-form';

type Inputs = {
    username: string;
    password: string;
};
const LoginForm = ({ onSubmit }: { onSubmit: (e: Inputs) => Promise<unknown> }) => {
    const { register, handleSubmit } = useForm<Inputs>();
    const [loading, setLoading] = useState<boolean>();
    const onSubmitHandle = async ({ username, password }: Inputs) => {
        try {
            setLoading(true);
            await onSubmit({
                username,
                password
            });
        } finally {
            setLoading(false);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmitHandle)}>
            <Typography variant="body2">Username or email address</Typography>
            <div className={styles.inputContainer}>
                <TextField
                    className={styles.input}
                    variant="outlined"
                    label="Required*"
                    size="small"
                    inputProps={{ 'data-testid': 'sign-in-username' }}
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
                    inputProps={{ 'data-testid': 'sign-in-password' }}
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
                    data-testid="sign-in-btn"
                >
                    Sign in
                </LoadingButton>
            </div>
        </form>
    );
};

export default LoginForm;
