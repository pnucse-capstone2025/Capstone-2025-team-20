import React, { useState } from 'react';
import { login, signup, getMe } from "../api/auth";
import { useAuth } from "../context/AuthContext";

export default function LoginPage() {
  const { logIn, token, me } = useAuth();
  const [username, setUsername] = useState('admin');
  const [email, setEmail] = useState('admin@naver.com');
  const [password, setPassword] = useState('password');
  const [status, setStatus] = useState('');
  const [output, setOutput] = useState('');

  const handleLogin = async () => {
    setStatus('⏳ 로그인 중...');
    setOutput('');
    try {
      await logIn(username, password);
      setStatus('✅ 로그인 성공');
      setOutput(JSON.stringify({ token, me }, null, 2));
    } catch (err: any) {
      setStatus('❌ 로그인 실패');
      setOutput(err?.message || String(err));
    }
  };

  const handleSignup = async () => {
    setStatus('⏳ 회원가입 중...');
    setOutput('');
    try {
      const data = await signup(username, email, password);
      setStatus('✅ 회원가입 성공');
      setOutput(JSON.stringify(data, null, 2));
    } catch (err: any) {
      setStatus('❌ 회원가입 실패');
      setOutput(err?.response?.data ? JSON.stringify(err.response.data, null, 2) : String(err));
    }
  };

  const handleGetMe = async () => {
    setStatus('⏳ /me 조회 중...');
    setOutput('');
    try {
      if (!token) {
        setStatus('❗ 토큰 없음. 로그인 먼저');
        return;
      }
      const data = await getMe(token);
      setStatus('✅ /me 성공');
      setOutput(JSON.stringify(data, null, 2));
    } catch (err: any) {
      setStatus('❌ /me 실패');
      setOutput(err?.response?.data ? JSON.stringify(err.response.data, null, 2) : String(err));
    }
  };

  return (
    <div style={{ maxWidth: 420, margin: '40px auto', padding: 20, border: '1px solid #e5e7eb', borderRadius: 10, background: '#fff' }}>
      <h1>로그인</h1>
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="아이디" style={{ width: '100%', padding: 10, marginBottom: 10 }} />
      <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="이메일" style={{ width: '100%', padding: 10, marginBottom: 10 }} />
      <input value={password} onChange={(e) => setPassword(e.target.value)} placeholder="비밀번호" type="password" style={{ width: '100%', padding: 10, marginBottom: 10 }} />
      <div style={{ display: 'flex', gap: 8 }}>
        <button onClick={handleLogin} style={{ flex: 1, padding: 10, background: '#6366f1', color: '#fff' }}>로그인</button>
        <button onClick={handleSignup} style={{ flex: 1, padding: 10, background: '#0ea5e9', color: '#fff' }}>회원가입</button>
        <button onClick={handleGetMe} style={{ flex: 1, padding: 10, background: '#0ea5e9', color: '#fff' }}>/me 조회</button>
      </div>
      <p>{status}</p>
      <pre style={{ background: '#0b1020', color: '#d1d5db', padding: 10, borderRadius: 6, overflow: 'auto' }}>{output}</pre>
    </div>
  );
}
