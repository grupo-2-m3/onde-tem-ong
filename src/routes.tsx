import { Route, Routes } from "react-router-dom";
import DashboardVisitorPage from "./pages/DashboardVisitorPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

export const RoutesComponent = () => {
  return (
    <Routes>
      <Route path="/" element={<DashboardVisitorPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
};
