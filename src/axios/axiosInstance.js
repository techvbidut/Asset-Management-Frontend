import axios from "axios";

export const axiosInstance = axios.create({
	baseURL: "http://127.0.0.1:8000/",
	mode: "cors",
	headers: { "content-type": "application/json"},
	timeout: 2000000,
});
