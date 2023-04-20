import { Outlet, Navigate } from "react-router-dom";

function PrivateRoutes({ element, ...rest }) {
    const isAuthenticated = localStorage.getItem('token') !== null;

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default PrivateRoutes;