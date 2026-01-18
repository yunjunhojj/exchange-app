import { useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { removeAuthToken } from "../lib/auth";

export default function Layout({ children }: { children: ReactNode }) {
    const [tab, setTab] = useState<"exchange" | "history">("exchange");
    const navigate = useNavigate();

    const handleLogout = () => {
        removeAuthToken();
        navigate("/login");
    };

    const tabBase =
        "px-3 py-2 text-[20px] transition-colors duration-150";
    const tabActive = "font-bold text-[#36414C]";
    const tabInactive = "font-semibold text-[#8899AA] hover:text-[#36414C]";
    const tabGap = "ml-2";

    return (
        <div className="min-h-screen">
            <header className="border-b border-gray-300 bg-white">
                <div className="px-10 py-4">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex shrink-0 items-center">
                            <span className="text-[24px] font-bold">Exchange app</span>
                        </div>

                        <div className="flex items-center">
                            <button
                                onClick={() => setTab("exchange")}
                                className={`${tabBase} ${tab === "exchange" ? tabActive : tabInactive}`}
                            >
                                환전 하기
                            </button>
                            <button
                                onClick={() => setTab("history")}
                                className={`${tabBase} ${tabGap} ${tab === "history" ? tabActive : tabInactive}`}
                            >
                                환전 내역
                            </button>
                            <button
                                onClick={handleLogout}
                                className="ml-10 rounded-2xl bg-blue-500 px-3 py-2 text-[20px] font-semibold text-white transition-colors duration-150 hover:bg-blue-600"
                            >
                                Log out
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <main className="max-w-[1440px] mx-auto">
                {children}
            </main>
        </div>
    );
}