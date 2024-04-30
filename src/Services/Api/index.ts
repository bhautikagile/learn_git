import axios, { AxiosInstance } from "axios";
import { API_BASE } from "../../Utils/Constants";

const apiInstance: AxiosInstance = axios.create({
  baseURL: API_BASE
})

export default apiInstance;