// src/pages/Signup.tsx
import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Title,
  Form,
  Label,
  Input,
  Button,
  Logo,
} from "./Signup.styled";
import { useNavigate } from "react-router-dom";
import { Footer, NoMenuBar } from "../style/common.styled";
import { useToast } from "../context/ToastContext";

const Signup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const toast = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();


    try {
      const response = await axios.post("/api/signup", {
        username,
        email,
        password,
      });
      
      toast.showSuccess(response.data || "회원가입이 완료되었습니다!");
      
      // 2초 후 로그인 페이지로 이동
      setTimeout(() => {
        navigate("/static/Login");
      }, 2000);
    } catch (err: unknown) {
      const error = err as { response?: { data?: unknown } } | undefined;
      if (error?.response?.data) {
        toast.showError(`에러: ${String(error.response.data)}`);
      } else {
        toast.showError("회원가입 중 오류가 발생했습니다.");
      }
    }
  };

  return (
    <NoMenuBar>
    <Container>
      <Logo onClick={() => navigate("/static/")}>L.B</Logo>
      <Title>회원가입</Title>
      <Form onSubmit={handleSubmit}>
        <Label>
          사용자명
          <Input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Label>

        <Label>
          이메일
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Label>

        <Label>
          비밀번호
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Label>

        <Button type="submit">회원가입</Button>
      </Form>

    </Container>
    <Footer>
      © 2025 pusan national university capstone project Blu-ray Recommender
    </Footer>
    </NoMenuBar>
  );
};

export default Signup;
