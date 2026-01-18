import axios from "axios";
import { Configuration } from "./api";
import { AuthAPIApi, ExchangeRateAPIApi, OrderAPIApi, WalletAPIApi } from "./api";
import { getAuthToken, removeAuthToken } from "./auth";

const apiConfig = new Configuration({
    basePath: "/api",
    accessToken: () => {
        return getAuthToken() || "";
    },
});

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && (error.response.status === 401 || error.response.data?.code === "UNAUTHORIZED")) {
            removeAuthToken();
            window.location.href = "/";
        }
        return Promise.reject(error);
    }
);

export const authApi = new AuthAPIApi(apiConfig, undefined, axiosInstance);
export const exchangeRateApi = new ExchangeRateAPIApi(apiConfig, undefined, axiosInstance);
export const orderApi = new OrderAPIApi(apiConfig, undefined, axiosInstance);
export const walletApi = new WalletAPIApi(apiConfig, undefined, axiosInstance);
