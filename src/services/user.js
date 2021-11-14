import axios from "axios";
const baseUrl = "http://localhost:3003";

const login = async (user) => {
  try {
    console.log(user);
    const res = await axios.post(`${baseUrl}/login`, user);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

const register = async (user) => {
  try {
    console.log(user);
    axios.get(`${baseUrl}`).then(res=>console.log(res)).catch(err=>console.log(err));
    const res = await axios.post(`${baseUrl}/register`, user);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default { login, register };