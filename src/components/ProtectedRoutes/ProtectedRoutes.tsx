import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";

const ProtectedRoutes = () => {
  const { loading } = useContext(AuthContext);
  const token = localStorage.getItem("@token")

  if(loading) {
    return null;
  }

  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
