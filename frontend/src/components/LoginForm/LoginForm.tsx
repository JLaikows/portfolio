import React, { FC, useState } from 'react'
import { Box, Button, TextField, CircularProgress } from '@mui/material'
import { useUserStore } from '../../hooks/user-auth'

type LoginFormInfo = {
    username: string,
    password: string,
}

export const LoginForm: FC = () => {
    const [formData, setFormData] = useState<LoginFormInfo>({ username: '', password: '' })
    const [loginFormErrors, setLoginFormErrors] = useState<LoginFormInfo>({ username: '', password: '' })
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isLogin, setIsLogin] = useState<boolean>(true)
    const { methods: { login, signUpAndLogin }, state } = useUserStore()

    console.log(state)

    const onChange = (e: any, key: keyof LoginFormInfo) => {
        e.preventDefault();
        setFormData({ ...formData, [key]: e.target.value });
        if (!e.target.value) {
            setLoginFormErrors({ ...loginFormErrors, [key]: `${key} can not be empty` })
        }
    }

    const onSubmit = async () => {
        setIsLoading(true)
        if (isLogin) {
            await login(formData)
        } else {
            await signUpAndLogin(formData)
        }
        setIsLoading(false)
    }

    const demoLogin = async () => {
        setIsLoading(true)
        login({ username: 'Demo User', password: 'password' } as LoginFormInfo)
        setIsLoading(false)
    }

    return (
        <Box sx={styles.loginFormContainer}>
            <Box sx={styles.loginFormHeader}>
                <Box sx={styles.loginFormSelectors(isLogin)} onClick={() => setIsLogin(true)}>Login</Box>
                <Box sx={styles.loginFormSelectors(!isLogin)} onClick={() => setIsLogin(false)}>Sign Up</Box>
            </Box>
            <form style={{ display: 'flex', flexDirection: 'column' }} onSubmit={onSubmit}>
                <TextField
                    id="outline-override"
                    error={!!loginFormErrors.username}
                    helperText={loginFormErrors.username}
                    variant='outlined' label='Username'
                    value={formData['username']}
                    onChange={e => onChange(e, 'username')}
                    margin='normal'
                />
                <TextField
                    id="outline-override"
                    error={!!loginFormErrors.password}
                    helperText={loginFormErrors.password}
                    variant='outlined'
                    label='Password'
                    value={formData['password']}
                    onChange={e => onChange(e, 'password')}
                />
                <Box sx={{ display: 'flex', justifyContent: 'right', margin: '10px 0px' }}>
                    <Button onClick={demoLogin} variant='contained' size='large' sx={{ margin: '10px 0px 0px 10px', backgroundColor: "#221D23", "&:hover": { backgroundColor: "#534359" } }}>Demo User</Button>
                    <Button
                        onClick={onSubmit}
                        variant='contained'
                        size='large'
                        sx={{ margin: '10px 0px 0px 10px', backgroundColor: "#221D23", "&:hover": { backgroundColor: "#534359" } }}
                    >
                        {isLoading ? <CircularProgress /> : isLogin ? "Login" : "Sign Up"}
                    </Button>
                </Box>
            </form>
        </Box>
    )
}

const styles = {
    loginFormContainer: {
        backgroundColor: '#F6F6F6',
        padding: '20px 20px 10px 20px',
        border: "3px solid #221D23",
        borderRadius: '15px',
        width: '500px'
    },
    loginFormHeader: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    loginFormSelectors: (isSelected: boolean) => ({
        color: "#221D23",
        fontSize: '40px',
        fontWeight: '400',
        cursor: 'auto',
        ...(!isSelected && {
            color: "#534359",
            "&:hover": {
                cursor: 'pointer',
            }
        })
    })
}