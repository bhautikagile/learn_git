import { lazy } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTES } from "./Routes";

const Login = lazy(() => import('../Pages/Auth/Login'));
const Home = lazy(() => import('../Pages/Home'));

const Routing = () => {
  return (
    <Routes>
      <Route path={ROUTES.default} element={<Login />} />
      <Route path={ROUTES.home} element={<Home />} />
      <Route path="*" element={<Navigate replace to="/" />} />
    </Routes>
  )
}

export default Routing;