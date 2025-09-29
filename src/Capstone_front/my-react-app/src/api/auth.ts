import axios from 'axios';

axios.defaults.headers.common['Accept'] = 'application/json';

export const login = async (username: string, password: string) => {
  try {
    const { data } = await axios.post(
      '/api/login',
      { username, password },
      { headers: { 'Content-Type': 'application/json' } } // 명시적으로 JSON
    );
    return data;
  } catch (err: any) {
    console.error('로그인 에러:', err.response || err);
    throw err;
  }
};

export const signup = async (username: string, email: string, password: string) => {
  try {
    const { data } = await axios.post(
      '/api/signup',
      { username, email, password },
      { headers: { 'Content-Type': 'application/json' } }
    );
    return data;
  } catch (err: any) {
    console.error('회원가입 에러:', err.response || err);
    throw err;
  }
};

export const getMe = async (token: string) => {
  try {
    const { data } = await axios.get('/api/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return data;
  } catch (err: any) {
    console.error('/me 조회 에러:', err.response || err);
    throw err;
  }
};
