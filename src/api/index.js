import axios from "axios";

const baseURL = "http://localhost:3000";

const baseInstance = axios.create({
  baseURL,
});

baseInstance.interceptors.response.use(({ data, status }) => {
  if (status === 200) {
    return data;
  }
  throw new Error("something went wrong");
});

export default baseInstance;
