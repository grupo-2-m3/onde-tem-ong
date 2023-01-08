import { Route, Routes } from "react-router-dom";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";
import DashboardVisitorPage from "./pages/DashboardVisitorPage/DashboardVisitorPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import ProfileOngPage from "./pages/ProfileOngPage/ProfileOngPage";
import ProfileUserPage from "./pages/ProfileUserPage/ProfileUserPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

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
