import { Configuration } from "./api";
import { AuthAPIApi, ExchangeRateAPIApi, OrderAPIApi, WalletAPIApi } from "./api";
import { getAuthToken } from "./auth";

const apiConfig = new Configuration({
    basePath: "/api",
    accessToken: () => {
        return getAuthToken() || "";
    },
});

export const authApi = new AuthAPIApi(apiConfig);
export const exchangeRateApi = new ExchangeRateAPIApi(apiConfig);
export const orderApi = new OrderAPIApi(apiConfig);
export const walletApi = new WalletAPIApi(apiConfig);
