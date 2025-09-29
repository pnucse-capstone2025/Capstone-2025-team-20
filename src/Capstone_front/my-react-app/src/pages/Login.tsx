import React, { useState, useEffect } from "react";
import {
  Container,
  LoginBox,
  Title,
  Input,
  Button,
  EasyLogin,
  EasyLoginButtons,
  BottomBox,
  BottomLink,
  LoginForm,
  ErrorMessage,
} from "./Login.styled";
import { NoMenuBar } from "../style/common.styled";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { useToast } from "../context/ToastContext";
import { Logo } from "./Signup.styled";

const Login = () => {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const auth = useAuth();
  const toast = useToast();

  useEffect(() => {
    if (auth.token && auth.me) {
      const from = location.state?.from || "/static/";
      navigate(from, { replace: true }); // 이전 페이지
    }
  }, [auth.token, auth.me, navigate, location.state]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    
    try {
      await auth.logIn(usernameOrEmail, password);
      
      toast.showSuccess("로그인에 성공했습니다!");
      
      // 잠시 후 이전 페이지로 이동
      setTimeout(() => {
        const from = location.state?.from || "/static/";
        navigate(from, { replace: true });
      }, 1000);
    } catch (error) {
      console.log("에러");
      console.log((error as Error).message);
      toast.showError("로그인에 실패했습니다. 아이디와 비밀번호를 확인해주세요.");
    }
  };

  return (
    <NoMenuBar>
      <Container>
        <Logo onClick={() => navigate("/static/")}>L.B</Logo>
        <LoginBox>
          <Title>LOGIN</Title>
          
          <LoginForm onSubmit={handleLogin}>
            <Input
              type="text"
              placeholder="아이디 또는 이메일"
              value={usernameOrEmail}
              onChange={(e) => setUsernameOrEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="비밀번호"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button type="submit" disabled={auth.loading}>
              {auth.loading ? "로그인 중..." : "로그인"}
            </Button>
          </LoginForm>


          <EasyLogin>
            간편하게 시작하기
            <EasyLoginButtons></EasyLoginButtons>
          </EasyLogin>

          <BottomBox>
            <BottomLink onClick={() => navigate("/static/Signup")}>
              회원가입
            </BottomLink>
          </BottomBox>
        </LoginBox>
      </Container>
    </NoMenuBar>
  );
};

export default Login;
