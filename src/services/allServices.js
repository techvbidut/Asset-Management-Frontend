import { axiosInstance } from "../axios/axiosInstance";

export const AllServices = {
	getAllEmployees: async () => {
		return axiosInstance({
			method: "get",
			url: "/api/list-employees",
			// data: obj,
		});
	},
	getAllResources: async () => {
		return axiosInstance({
			method: "get",
			url: "/api/list-resources",
			// data: obj,
		});
	},
};
