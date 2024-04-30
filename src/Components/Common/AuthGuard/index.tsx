import { useEffect } from "react";
import { authStore } from "../../../Services/Store/Auth";
import { LoaderWrapper } from "./style";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../../Container/Routes";

const AuthGuard = () => {

  const navigate = useNavigate();
  const { isLoggedIn } = authStore.getState();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate(ROUTES.login, { replace: true })
    }
  }, [ isLoggedIn, navigate])

  return (
    <LoaderWrapper>Loading...</LoaderWrapper>
  )
}

export default AuthGuard;