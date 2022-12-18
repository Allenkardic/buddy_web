import axios from "axios";
import instance from "./instance";

type PayloadType = {
  email: string;
  password: string;
};
async function loginRequest(payload: PayloadType) {
  try {
    const { data } = await instance.post("login", payload, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    const token = data?.data?.token;
    localStorage.setItem("token", token);
    return data?.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      const result = error.response?.data;
      alert(result.message);
      return result;
    } else {
      alert(error);
      return error;
    }
  }
}

export default loginRequest;
