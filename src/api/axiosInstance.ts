import axios from "axios";

const createAxiosInstance = () => {
    const baseURL = "./db/";
    const axiosInstance = axios.create({
        baseURL,
        headers: {
            "Content-Type": "application/json",
        },
    });

    return axiosInstance;
};

export const axiosInstance = createAxiosInstance();
