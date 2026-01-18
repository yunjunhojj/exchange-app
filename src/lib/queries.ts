import { useMutation, useSuspenseQuery } from "@tanstack/react-query";
import { authApi, exchangeRateApi, orderApi, walletApi } from "./api-client";
import type { LoginRequest, OrderQuoteRequest, OrderRequest } from "./api";

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: (data: LoginRequest) => {
            return authApi.login(data);
        },
    });
};

export const useWalletSummary = () => {
    return useSuspenseQuery({
        queryKey: ["wallets"],
        queryFn: () => walletApi.getWallets(),
    });
};

export const useExchangeRates = () => {
    return useSuspenseQuery({
        queryKey: ["exchangeRates"],
        queryFn: () => exchangeRateApi.getLatestExchangeRates(),
        refetchInterval: 60 * 1000,
    });
};

export const useOrderQuoteMutation = () => {
    return useMutation({
        mutationFn: (data: OrderQuoteRequest) => {
            return orderApi.getQuote(data);
        },
    });
};

export const useCreateOrderMutation = () => {
    return useMutation({
        mutationFn: (data: OrderRequest) => {
            return orderApi.order(data);
        },
    });
};

export const useOrderHistory = () => {
    return useSuspenseQuery({
        queryKey: ["orders"],
        queryFn: () => orderApi.getOrders(),
    });
};
