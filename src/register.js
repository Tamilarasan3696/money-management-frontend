import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import axios from "axios";
import { Grid } from '@mui/material';
import { Link } from 'react-router-dom';
import { Tost } from './utils';

export default function Register() {
    const [tost, setTost] = React.useState('')
    const [state, setState] = React.useState({
        email: '',
        password: '',
        name: ''
    })

    const handleChange = (k, v) => {
        setState({ ...state, [k]: v })
    }

    const handleSubmit = async () => {
        if (!state.email || !state.password) {
            return tost(`Please fill the ${!state.email ? 'email' : 'password'}.!`)
        }
        await axios.post('https://moneymanagement.onrender.com/api/register', state,
            {
                headers: {
                    "Content-Type": "application/json",
                }
            }).then(res => {
                if (res?.data?.userToken) {
                    setTost('Signup successfully.!')
                    localStorage.setItem('token', res?.data?.userToken)
                    window.location.pathname = '/home'
                }
            }).catch(error => {
                return setTost(error?.message ?? 'someting wrong!')
            });
    };

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            {tost &&
                <Tost msg={tost} />
            }
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
                    Sign Up
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        label="Name"
                        autoComplete="name"
                        autoFocus
                        value={state.name}
                        onChange={e => handleChange('name', e.target.value)}
                    />

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
                        Sign Up
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/" variant="body2">
                                sign in ?
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}