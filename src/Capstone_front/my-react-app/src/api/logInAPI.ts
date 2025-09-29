import axios from 'axios';

const loginUrl = '/api/login ';

export async function logInAPI( usernameOrEmail:string, password:string) {
  try {
    const response = await axios.post(loginUrl, {
      usernameOrEmail,
      password
    });
    return response.data
  } catch (error) {
    if (axios.isAxiosError(error)) {
      throw new Error(error.response?.data?.data?.message);
    } else {
      throw new Error(`알수없는 에러`);
    }
  }
};