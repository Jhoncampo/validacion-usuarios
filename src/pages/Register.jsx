import React from "react";
import { register } from "../config/firebase";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useUserContext } from "../context/UserContext";
import { Formik } from "formik";
import * as Yup from "yup";
import { Avatar, Box, Button, TextField, Typography } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";

const Register = () => {
    const { user } = useUserContext();

    useRedirectActiveUser(user, "/dashboard");

    const onSubmit = async (
        { email, password },
        { setSubmitting, setErrors, resetForm }
    ) => {
        try {
            await register({ email, password });
            console.log("user registered");
            resetForm()
        } catch (error) {
            console.log(error.code);
            console.log(error.message);
            if (error.code === "auth/email-already-in-use") {
                return setErrors({ email: "Email alredy in use" });
            }
        } finally {
            setSubmitting(false);
        }
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            .email("Email incorrect")
            .required("Email is required"),
        password: Yup.string().trim().min(6).required("Password is required"),
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
            <Avatar sx={{mx: "auto", bgcolor: "#111"}}><PersonIcon/></Avatar>

            <Typography variant="h5" component="h1">
                Register
            </Typography>
            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({
                    values,
                    handleChange,
                    handleSubmit,
                    errors,
                    touched,
                    isSubmitting,
                    handleBlur,
                }) => (
                    <Box
                        component="form"
                        sx={{ mt: "1rem" }}
                        onSubmit={handleSubmit}
                    >
                        <TextField
                            type="email"
                            placeholder="email@example.com"
                            value={values.email}
                            onChange={handleChange}
                            name="email"
                            onBlur={handleBlur}
                            fullWidth
                            sx={{ mb: 3 }}
                            label="Ingrese email"
                            error={errors.email && touched.email}
                            helperText={
                                errors.email && touched.email && errors.email
                            }
                        />

                        <TextField
                            type="password"
                            placeholder="Ingrese contraseña"
                            value={values.password}
                            onChange={handleChange}
                            name="password"
                            onBlur={handleBlur}
                            fullWidth
                            sx={{ mb: 3 }}
                            label="Ingrese contraseña"
                            error={errors.password && touched.password}
                            helperText={
                                errors.password &&
                                touched.password &&
                                errors.password
                            }
                        />

                        <LoadingButton
                            sx={{ mb: 3 }}
                            variant="contained"
                            loading={isSubmitting}
                            type="submit"
                            fullWidth
                            disabled={isSubmitting}
                        >
                            Register
                        </LoadingButton>
                        <Button component={Link} fullWidth to="/">¿Ya tienes cuenta? Incia sesión</Button>
                    </Box>
                )}
            </Formik>
        </Box>
    );
};

export default Register;
