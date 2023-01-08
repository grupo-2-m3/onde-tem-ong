import { useContext, useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext/AuthContext";
import { UserContext } from "../../contexts/UserContext/UserContext";

const ProtectedRoutes = () => {
  const { loading } = useContext(UserContext);
  const { userInfo } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log("oi");
  console.log(userInfo);

  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    }
  }, []);

  if (loading) {
    return <></>;
  }

  return userInfo ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
