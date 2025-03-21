import axios from "axios";
const BASEURL = "https://api.bargram.ir/api/";
const apiClient = axios.create({
  baseURL: BASEURL,
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem('token'??null)}`
  },
});
import { useToast,useRouter } from "#imports";
const { showToast } = useToast();
const router = useRouter();


const handleApiError = (error) => {
  if (error.response) {
    const status = error.response.data.code;
    const message = error.response.data?.message || "An error occurred";
    console.log(error.response.data.error);
    switch (status) {
      case 400:
        showToast(message, "error");
        // router.push('/auth/login')
        break;
      case 401:
        showToast(error.response.data.error, "error");
        router.push('/auth/login')
        break;
      case 404:
        console.error(message);
        break;
      case 500:
        console.error(message);
        break;
      default:
        console.error(`Error: ${message}`);
    }
  } else if (error.request) {
    console.error("No response received from server");
  } else {
    console.error(`Error setting up request: ${error.message}`);
  }
};

const apiGet = async (url, params = {}) => {
  try {
    const response = await apiClient.get(url, { params });
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

const apiPost = async (url, data) => {
  try {
    const response = await apiClient.post(url, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

const apiPut = async (url, data) => {
  try {
    const response = await apiClient.put(url, data);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

const apiDelete = async (url) => {
  try {
    const response = await apiClient.delete(url);
    return response.data;
  } catch (error) {
    handleApiError(error);
    throw error;
  }
};

export default {
  apiGet,
  apiPost,
  apiPut,
  apiDelete,
};
