import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

export async function login(username: string, password: string) {
  const response = await axios.post(`${BASE_URL}/login`, {
    username,
    password,
  });
  const { token } = response.data;
  localStorage.setItem("token", token); // JWT 저장
}
