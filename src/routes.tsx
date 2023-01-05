import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import DashboardVisitorPage from "./pages/DashboardVisitorPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfileUserPage from "./pages/ProfileUserPage";
import RegisterPage from "./pages/RegisterPage";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardVisitorPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route element={<ProtectedRoutes />}>
        <Route path="/profile" element={<ProfileUserPage />} />
      </Route>
    </Routes>
  );
};
