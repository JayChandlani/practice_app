import React, { useState } from 'react'
import { Formik } from "formik"
import { Box, TextField, Button, Typography } from '@mui/material'
import * as yup from 'yup'
import { setLogin } from "../../state";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const initialValuesRegister = {
    name: "",
    email: "",
    password: "",
};

const initialValuesLogin = {
    email: "",
    password: "",
};
const registerSchema = yup.object().shape({
    name: yup.string().required("please enter you name"),
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
});

const loginSchema = yup.object().shape({
    email: yup.string().email("invalid email").required("required"),
    password: yup.string().required("required"),
});


const Form = () => {
    const [pageType, setPageType] = useState("login");
    const isLogin = pageType === "login";
    const isRegister = pageType === "register";
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const register = async (values, onSubmitProps) => {
        onSubmitProps.resetForm();
        dispatch(setLogin({
            user: values,
            token: 'valid'
        }));
        navigate("/");
    }
    const login = async (values, onSubmitProps) => {
        dispatch(
            setLogin({
            user: values,
            token: 'valid'
        }))
        onSubmitProps.resetForm();
        navigate("/");
    }
    const handleFormSubmit = async (values, onSubmitProps) => {
        if (isLogin) { await login(values, onSubmitProps) }
        if (isRegister) { await register(values, onSubmitProps) };
    }

    return (
        <Formik
            onSubmit={handleFormSubmit}
            initialValues={isLogin ? initialValuesLogin : initialValuesRegister}
            validationSchema={isLogin ? loginSchema : registerSchema}
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            }) => (
                <form onSubmit={handleSubmit}>
                    <Box justifyContent={'center'} gap='1rem' alignItems='center' display='flex' flexDirection='column'>
                        {isRegister &&
                            <TextField label="name"
                                onBlur={handleBlur}
                                value={values.name}
                                onChange={handleChange}
                                name="name"
                                error={
                                    Boolean(touched.name) && Boolean(errors.name)
                                }
                                helperText={touched.name && errors.name}
                            />
                        }
                        <TextField label="email"
                            onBlur={handleBlur}
                            value={values.email}
                            onChange={handleChange}
                            name="email"
                            error={
                                Boolean(touched.email) && Boolean(errors.email)
                            }
                            helperText={touched.email && errors.email} />
                        <TextField label="password"
                            onBlur={handleBlur}
                            value={values.password}
                            onChange={handleChange}
                            name="password"
                            error={
                                Boolean(touched.password) && Boolean(errors.password)
                            }
                            helperText={touched.password && errors.password} />
                        <Button variant='contained' type="submit">
                            {isRegister ? "Register" : "Login"}
                        </Button>
                        <Typography
                            onClick={() => {
                                setPageType(isLogin ? "register" : "login");
                                resetForm();
                            }}
                            sx={{
                                textDecoration: "underline",
                                color: "primary.light",
                                "&:hover": {
                                    cursor: "pointer",
                                    color: "primary.main",
                                },
                            }}>
                            {isRegister ? "existing user click here to login" : " new user click here to register"}
                        </Typography>
                    </Box>

                </form>)
            }
        </Formik>
    )
}

export default Form