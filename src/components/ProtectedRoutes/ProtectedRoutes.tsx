import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { UserContext } from "../../contexts/UserContext/UserContext";

const ProtectedRoutes = () => {
  const { loading } = useContext(UserContext);
  const { verifyLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!verifyLogin) {
      navigate("/login");
    }
  }, []);

  if (loading) {
    return <></>;
  }

  return verifyLogin ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
