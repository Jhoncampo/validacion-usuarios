import React, { useEffect } from "react";
import { login } from "../config/firebase";
import { useNavigate } from "react-router";
import { useUserContext } from "../context/UserContext";
import { Formik } from "formik";
import * as Yup from "yup";
import { Box } from "@mui/system";
import LoginIcon from "@mui/icons-material/Login";
import { Avatar, Button, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import { Link } from "react-router-dom";

const Login = () => {
    const { user } = useUserContext();

    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            navigate("/dashboard");
        }
    }, [user]);

    const onSubmit = async (
        { email, password },
        { setSubmitting, setErrors, resetForm }
    ) => {
        console.log({ email, password });
        try {
            const credentialUser = await login({ email, password });
            console.log(credentialUser);
            resetForm();
        } catch (error) {
            console.log(error.code);
            console.log(error.message);
            if (error.code === "auth/invalid-login-credentials") {
                return setErrors({ email: "Usuario no registrado" });
            }
        } finally {
            setSubmitting(false);
        }
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Email no vlaido")
            .required("Email requerido"),
        password: Yup.string()
            .trim()
            .min(6, "Mínimo 6 carácteres")
            .required("Password requerido"),
    });

    return (
        <Box
            sx={{
                mt: "1rem",
                maxWidth: "400px",
                mx: "auto",
                textAlign: "center",
            }}
        >
            <Avatar sx={{ mx: "auto", bgcolor: "#111" }}>
                <LoginIcon />
            </Avatar>
            <Typography variant="h5" component="h1">
                Login
            </Typography>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({
                    values,
                    handleSubmit,
                    handleChange,
                    errors,
                    touched,
                    handleBlur,
                    isSubmitting,
                }) => (
                    <Box
                        component="form"
                        onSubmit={handleSubmit}
                        sx={{ mt: "1rem" }}
                    >
                        <TextField
                            type="email"
                            placeholder="email@example.com"
                            value={values.email}
                            onChange={handleChange}
                            name="email"
                            onBlur={handleBlur}
                            id="email"
                            label="Ingrese email"
                            fullWidth
                            sx={{ mb: 3 }}
                            error={errors.email && touched.email}
                            helperText={
                                errors.email && touched.email && errors.email
                            }
                        />

                        <TextField
                            type="password"
                            value={values.password}
                            onChange={handleChange}
                            name="password"
                            onBlur={handleBlur}
                            id="password"
                            label="Ingrese contraseña"
                            fullWidth
                            sx={{ mb: 3 }}
                            error={errors.password && touched.password}
                            helperText={
                                errors.password &&
                                touched.password &&
                                errors.password
                            }
                        />
                        <LoadingButton
                            type="submit"
                            disabled={isSubmitting}
                            loading={isSubmitting}
                            variant="contained"
                            fullWidth
                            sx={{ mb: 3 }}
                        >
                            Login
                        </LoadingButton>
                        <Button fullWidth component={Link} to="/register">
                            ¿No tienes cuenta? Regístrate
                        </Button>
                    </Box>
                )}
            </Formik>
        </Box>
    );
};

export default Login;
