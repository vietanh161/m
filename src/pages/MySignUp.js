import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useForm, Controller} from 'react-hook-form';

const theme = createTheme();

const VALIDATION = {
    firstName: {
        required: "Trường Này Không Được Để Trống",
        minLength: {
            value: 3,
            message: "Ít Nhất là 3 ký tự",
        }
    }
}

export default function SignUp() {
    const {
        register,
        control,
        handleSubmit,
        formState: {errors}
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        }
    });

    const onSubmit = data => alert('Đăng Nhập Thành Công');

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)} sx={{mt: 3}}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <Controller
                                    name="firstName"
                                    control={control}
                                    rules={VALIDATION.firstName}
                                    render={({field}) => <TextField
                                        autoComplete="given-name"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                        error={!!errors?.firstName}
                                        helperText={errors?.firstName?.message}
                                        {...field}
                                    />}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name='lastName'
                                    autoComplete="family-name"
                                    {...register("lastName", {
                                        required: "Trường Này Không Được Để Trống", minLength: {
                                            value: 3,
                                            message: "Ít Nhất là 3 ký tự",
                                        }
                                    })}
                                />
                                {errors.lastName && <span>{errors.lastName.message}</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name='email'
                                    autoComplete="email"
                                    {...register("email", {
                                        required: "Trường Này Không Được Để Trống",
                                        pattern: {
                                            value: /^[a-zA-Z0-9]+@+[a-zA-Z0-9]+.+[A-z]/,
                                            message: "Email Không đúng định dạng",
                                        },
                                    })}
                                />
                                {errors.email && <span>{errors.email.message}</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    required
                                    fullWidth
                                    name='password'
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                    {...register("password", {required: "Trường Này Không Được Để Trống"})}
                                />
                                {errors.password && <span>{errors.password.message}</span>}
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                    label="I want to receive inspiration, marketing promotions and updates via email."

                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{mt: 3, mb: 2}}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="#" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
}
