import axios from "axios";
const baseUrl = "https://localhost:3003";

const login = async (user) => {
  console.log(user);
  const res = await axios.post(`${baseUrl}/login`, user);
  return res.data;
};

const register = async (user) => {
  const res = await axios.post(`${baseUrl}/register`, user);
  console.log(res.data);
  return res.data;
};

export default { login, register };