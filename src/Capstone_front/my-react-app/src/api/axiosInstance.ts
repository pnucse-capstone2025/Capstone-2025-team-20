import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "/api", // 프록시 설정 or 서버 주소
  headers: {
    "Content-Type": "application/json",
  },
});

export default axiosInstance;
