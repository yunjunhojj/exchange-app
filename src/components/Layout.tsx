import { type ReactNode } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { removeAuthToken } from "../lib/auth";

export default function Layout({ children }: { children: ReactNode }) {
    const navigate = useNavigate();
    const location = useLocation();

    // Determine active tab based on current path
    const isExchangeActive = location.pathname === "/";
    const isHistoryActive = location.pathname === "/history";

    const handleLogout = () => {
        removeAuthToken();
        navigate("/login");
    };

    const tabBase =
        "px-3 py-2 text-[20px] transition-colors duration-150 cursor-pointer";
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
                                onClick={() => navigate("/")}
                                className={`${tabBase} ${isExchangeActive ? tabActive : tabInactive}`}
                            >
                                환전 하기
                            </button>
                            <button
                                onClick={() => navigate("/history")}
                                className={`${tabBase} ${tabGap} ${isHistoryActive ? tabActive : tabInactive}`}
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

            <main className="max-w-[1440px] mx-auto pb-[50px]">
                {children}
            </main>
        </div>
    );
}