import axios from "axios";
import axiosInstance from "../api/axiosInstance";

export async function getMe(token: string) {
  /*const res = await fetch("/api/me", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  */
  try{
    const res = await axiosInstance.get("/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return res.data
  }catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.message ?? "로그인 실패");
    } else {
      throw new Error(`알수없는 에러`);
    }
  }

}
