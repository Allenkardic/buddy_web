import axios from "axios";

const BASE_URL = "https://fe-test.revvex.io/api/admin/";

const instance = axios.create({
  baseURL: BASE_URL,
});

export default instance;
