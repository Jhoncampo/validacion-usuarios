import React, { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const LayoutPrivate = () => {
    const { user } = useUserContext();

    // Para redirigir al Home si no existe usuario, metodo 1
    // const navigate = useNavigate();
    // useEffect(() => {
    //     if (!user) {
    //         navigate("/")
    //     }
    // }, [user]);

    //Metodo 2 sin utilizar el useEffect()

    return <>{user ? <Outlet /> : <Navigate to="/" />}</>;
};

export default LayoutPrivate;
