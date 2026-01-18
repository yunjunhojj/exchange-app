import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../lib/queries";
import { setAuthToken } from "../lib/auth";

import { Loader2 } from "lucide-react";
import Logo from "../components/Logo";

export default function Login() {
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);
    const navigate = useNavigate();
    const { mutateAsync: loginMutation, isPending } = useLoginMutation();

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);

        loginMutation(
            { email },
            {
                onSuccess: (response) => {
                    if (response.data.data?.token) {
                        setAuthToken(response.data.data.token);
                        navigate("/");
                    } else {
                        setError("Invalid response from server");
                    }
                },
                onError: (err: any) => {
                    console.error(err);
                    if (err.response && err.response.data && err.response.data.message) {
                        setError(err.response.data.message);
                    } else {
                        setError("Failed to login. Please try again.");
                    }
                },
            }
        );
    };

    return (
        <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-[560px] w-full">
                <div>
                    <Logo />
                    <h2 className="mt-6 text-center text-[48px] font-bold text-gray-700">
                        반갑습니다.
                    </h2>
                    <p className="mt-2 text-center text-[32px] text-gray-600">
                        로그인 정보를 입력해주세요.
                    </p>
                </div>
                <form className="mt-12 space-y-8 bg-[#F7F8F9] border border-gray-300 px-8 py-6 rounded-2xl" onSubmit={handleLogin}>

                    <div>
                        <label htmlFor="email-address" className="mb-2 block text-[20px] font-medium text-gray-600">
                            이메일 주소를 입력해주세요
                        </label>
                        <input
                            id="email-address"
                            name="email"
                            type="email"
                            autoComplete="email"
                            required
                            placeholder="test@test.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-white p-6 text-[20px] font-semibold rounded-2xl text-gray-600 border border-gray-700"
                        />
                    </div>

                    {error && (
                        <div className="text-red-500">
                            {error}
                        </div>
                    )}

                    <div>
                        <button
                            type="submit"
                            className="w-full py-6 text-[22px] font-bold rounded-2xl text-white bg-[#1B2334] hover:bg-[#1B2334]/80"
                            disabled={isPending}
                        >

                            {isPending ? <Loader2 className="animate-spin mr-2 h-4 w-4" /> : "로그인 하기"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
