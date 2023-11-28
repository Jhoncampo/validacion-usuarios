import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
    
    const { user, setUser } = useUserContext()


    return (
        <nav>
            <NavLink to="/">Home  </NavLink>
            <NavLink to={"/register"}>  Register</NavLink>
            {user && (
                <>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </>
            )}
        </nav>
    );
};

export default Navbar;
