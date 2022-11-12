import { useState } from 'react';
import { login } from '../services';
import { Button, Card, Input, Typography } from '@mui/material';

const Login = () => {
    const [loading, setLoading] = useState<boolean>();
    const [username, setUsername] = useState<string>();
    const [password, setPassword] = useState<string>();
    const onSubmit = async () => {
        if (username && password) {
            setLoading(true);
            try {
                await login(username, password);
            } finally {
                setLoading(false);
            }

        } else {
            console.log('user name or password not correct')
        }
    }
    return (
        <>
            <div style={{
                margin: '40px',
                height: 200,
            }}>
                <Typography align="center">Clinical Portal Sign In</Typography>
            </div>
            <Card style={{
                textAlign: 'center',
                padding: 20,
                margin: 'auto',
                width: 400
            }}>
                <div style={{
                    margin: '30px',
                }}>
                    <Input
                        style={{ width: '100%' }}
                        value={username}
                        onChange={(e) => setUsername(e?.target?.value)}
                        placeholder="please input username"
                    />
                </div>
                <div style={{
                    margin: '30px',
                }}>
                    <Input
                        style={{ width: '100%' }}
                        value={password}
                        onChange={(e) => setPassword(e?.target?.value)}
                        placeholder="please input password" type="password"
                    />
                </div>
                <div style={{
                    margin: '5px',
                }}>
                    <Button
                        disabled={!username || !password}
                        onClick={onSubmit}
                    >Login
                    </Button>
                </div>
            </Card>
        </>
    )
}

export default Login
