import type { WalletResponse } from "../lib/api";
import { CURRENCY_SYMBOL_MAP } from "../lib/constants/currency";

interface WalletStatusProps {
    totalKrwBalance: number;
    wallets: WalletResponse[];
}

export default function WalletStatus({ totalKrwBalance, wallets }: WalletStatusProps) {
    const formatCurrency = (amount: number, currency: keyof typeof CURRENCY_SYMBOL_MAP) => {
        return CURRENCY_SYMBOL_MAP[currency] + " " + amount.toLocaleString();
    };

    return (
        <div className="flex flex-col px-8 py-6 border border-gray-300 rounded-2xl bg-[#F7F8F9] h-[620px]">
            <h3 className="text-[24px] font-extrabold text-gray-800 mb-8">내 지갑</h3>
            <div className="space-y-3 h-full">
                {wallets.map((wallet) => (
                    <div key={wallet.currency} className="flex justify-between items-center text-gray-600 text-[20px]">
                        <span className="font-medium">{wallet.currency}</span>
                        <span className="font-semibold">
                            {formatCurrency(wallet.balance, wallet.currency)}
                        </span>
                    </div>
                ))}
            </div>

            <hr className="border-gray-400 h-px w-full" />
            <div className="flex justify-between items-center mt-3">
                <span className="text-[20px] font-medium text-gray-600">총 보유 자산</span>
                <span className="text-[20px] font-bold text-blue-500">
                    {formatCurrency(totalKrwBalance, "KRW")}
                </span>
            </div>
        </div>
    );
}


