import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { FormTitle } from "./Auth.Styled";
import { Button, Col, Form, Row, message } from "antd";
import { RenderPasswordInput, RenderTextInput } from "../../Components/Common/FormField";
import { Link, useNavigate } from "react-router-dom";
import { ROUTES } from "../../Container/Routes";
import { useCallback } from "react";
import { authApi } from "../../Services/Api/Auth";
import { ILoginReq } from "../../Services/Api/Auth/types";

const Login: React.FC = () => {

  const navigate = useNavigate();

  const onSubmit = useCallback(async (data: ILoginReq) => {
    try {
      const res = await authApi.login({ ...data });
      message.success(res?.message);
      navigate(ROUTES.home)
    } catch (err) {
      message.error((err as Error)?.message);
    }
  }, [navigate])

  return (
    <>
      <FormTitle>Login</FormTitle>
      <Form onFinish={onSubmit} autoComplete="off" className="login-form">
        <Row gutter={[24, 0]}>
          <RenderTextInput
            col={{ md: 24 }}
            name="email"
            allowClear
            placeholder="johndoee@gmail.com"
            prefix={<UserOutlined />}
            fitems={{
              label: "Email",
              required: true,
            }}
          />
          <RenderPasswordInput
            col={{ md: 24 }}
            name="password"
            placeholder="Enter your password here..."
            prefix={<LockOutlined />}
            fitems={{
              label: "Email",
              required: true,
            }}
          />
          <Col xl={24} className="mt--10 w-100 text-right">
              <Link to={ROUTES.forgotPassword} className="forgot-link">
                Forgot your password?
              </Link>
          </Col>
          <Col xs={24} className="mt-10">
            <Button type="primary" size="middle" htmlType="submit">
              Login
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  )
}

export default Login;