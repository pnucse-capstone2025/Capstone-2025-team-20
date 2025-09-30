// src/hooks/useAuthProvider.ts
import { useState, useEffect, useCallback } from "react";
import { UserToken, MeResponse } from "../type/user";
import { logInAPI } from "../util/logInAPI";
import { getMe } from "../api/auth";

const USER = "user";

export function useAuthProvider() {
  const [user, setUser] = useState<UserToken | null>(null);
  const [me, setMe] = useState<MeResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // 사용자 정보 가져오기
  const fetchUserInfo = useCallback(async (token: string) => {
    try {
      const userInfo = await getMe(token);
      setMe(userInfo);
    } catch (error) {
      console.error('사용자 정보 가져오기 실패:', error);
      setMe(null);
    }
  }, []);

  // localStorage에서 초기값 불러오기
  useEffect(() => {
    const saved = localStorage.getItem(USER);
    if (saved) {
      try {
        const userData = JSON.parse(saved);
        setUser(userData);
        // 토큰이 있으면 사용자 정보 가져오기
        if (userData.accessToken) {
          fetchUserInfo(userData.accessToken);
        }
      } catch {
        localStorage.removeItem(USER);
      }
    }
  }, [fetchUserInfo]);

  // 로그인
  const logIn = useCallback(async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    try {
      const response = await logInAPI(email, password);
      setUser(response);
      localStorage.setItem(USER, JSON.stringify(response));
      
      // 사용자 정보 가져오기
      await fetchUserInfo(response.accessToken);
    } catch (error) {
        throw new Error((error as Error).message);
    } finally {
      setLoading(false);
    }
  }, [fetchUserInfo]);

  // 로그아웃
  const logOut = useCallback(() => {
    setUser(null);
    setMe(null);
    localStorage.removeItem(USER);
  }, []);

  return { 
    user, 
    me, 
    token: user?.accessToken || null,
    logIn, 
    logOut, 
    loading, 
    error 
  };
}
