import React from "react";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../context/UserContext";

const Navbar = () => {
    
    const { user } = useUserContext()


    return (
        <nav>
            {user && (
                <>
                    <NavLink to="/dashboard">Dashboard</NavLink>
                </>
            )}
        </nav>
    );
};

export default Navbar;
