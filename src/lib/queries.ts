import { useMutation } from "@tanstack/react-query";
import { authApi } from "./api-client";
import type { LoginRequest } from "./api";

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: (data: LoginRequest) => {
            return authApi.login(data);
        },
    });
};
