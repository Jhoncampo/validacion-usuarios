import React from "react";
import { register } from "../config/firebase";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";
import { useUserContext } from "../context/UserContext";
import { Formik } from "formik";
import * as Yup from "yup";

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
        <>
            <h1>Register</h1>
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
                    handleBlur
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
                            Register
                        </button>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default Register;
