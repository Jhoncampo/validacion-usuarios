import React, { useEffect, useState } from "react";
import { login } from "../config/firebase";
import { useNavigate } from "react-router";
import { useUserContext } from "../context/UserContext";
import { Formik } from "formik";
import * as Yup from "yup";

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
            resetForm()
        } catch (error) {
            console.log(error.code);
            console.log(error.message);
            if(error.code === "auth/invalid-login-credentials"){
               return setErrors({email: "Usuario no registrado"})
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
        <>
            <h1>Login</h1>
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
                    <form onSubmit={handleSubmit}>
                        <input
                            type="email"
                            placeholder="Ingrese email"
                            value={values.email}
                            onChange={handleChange}
                            name="email"
                            onBlur={handleBlur}
                        />
                        {errors.email && touched.email && errors.email}
                        <input
                            type="password"
                            placeholder="Ingrese contraseña"
                            value={values.password}
                            onChange={handleChange}
                            name="password"
                            onBlur={handleBlur}
                        />
                        {errors.password && touched.password && errors.password}
                        <button type="submit" disabled={isSubmitting}>
                            Login
                        </button>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default Login;
