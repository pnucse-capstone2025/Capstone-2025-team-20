//import { loginUrl } from '@/constant/api';
import axios from 'axios';
import { UserToken } from '../type/user';
import axiosInstance from '../api/axiosInstance';


export async function logInAPI( usernameOrEmail:string, password:string) : Promise<UserToken> {
  try {
    const response = await axiosInstance.post("/login", {
      usernameOrEmail,
      password,
    });
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message ?? "로그인 실패");
    } else {
      throw new Error(`알수없는 에러`);
    }
  }
};