import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const AuthSuperAdmin = ({ children }) => {
    const location = useLocation();
    const user = localStorage.getItem("user")
    const userJSON = JSON.parse(user)
    const userRole = userJSON?.role


    console.log(userRole);
    if (userRole) {
        if (userRole === "admin") {
            return children;
        }
        else if (userRole === "stuff") {
            return children;
        } else {
            localStorage.clear()
            return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
        }
    }
};

export default AuthSuperAdmin;