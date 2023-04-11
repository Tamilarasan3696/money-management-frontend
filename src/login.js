import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Grid } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Tost } from './utils';

export default function Login() {
    const [tost, setTost] = React.useState('')
    const [state, setState] = React.useState({
        email: '',
        password: '',
    })

    const handleChange = (k, v) => {
        setState({ ...state, [k]: v })
    }

    const handleSubmit = async () => {
        if (!state.email || !state.password) {
            return setTost(`Please fill the ${!state.email ? 'email' : 'password'}.!`)
        }

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(state)
        };

        await fetch('https://moneymanagement.onrender.com/api/login', requestOptions)
            .then(response => response.json())
            .then(res => {
                if (res?.userToken) {
                    setTost('logged successfully.!')
                    localStorage.setItem('token', res?.userToken)
                    window.location.pathname = '/home'
                }
            }).catch(error => {
                return setTost(error?.message ?? 'someting wrong!')
            });
    };
    return (
        <Container component="main" maxWidth="xs">
            {tost &&
                <Tost msg={tost} />
            }
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Email Address"
                        autoComplete="email"
                        autoFocus
                        value={state.email}
                        onChange={e => handleChange('email', e.target.value)}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        value={state.password}
                        onChange={e => handleChange('password', e.target.value)}
                    />
                    <Button
                        onClick={() => handleSubmit()}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/register" variant="body2">
                                sign up ?
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}