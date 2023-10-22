import { AxiosResponse } from "axios";
import { axiosInstance } from "./axiosInstance";
import { Product } from "utils/index.types";

export const getProducts = () => {
    return axiosInstance
        .get(`products.json`)
        .then((res: AxiosResponse<Product, any>) => res.data)
        .catch((err) => err.response.data);
};
