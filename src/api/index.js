import { BASE_URL } from "../../config";
import axios from "axios";

export const restApi = axios.create({
  baseURL: BASE_URL,
});
