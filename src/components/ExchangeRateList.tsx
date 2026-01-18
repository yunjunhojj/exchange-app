import type { ExchangeRateResponse } from "../lib/api";
import { CURRENCY_NAME_MAP } from "../lib/constants/currency";

interface ExchangeRateListProps {
    rates: ExchangeRateResponse[];
}

export default function ExchangeRateList({ rates }: ExchangeRateListProps) {
    // USD가 맨 앞에 오도록 정렬
    const sortedRates = rates.sort((a, b) => {
        if (a.currency === "USD") return -1;
        if (b.currency === "USD") return 1;
        return a.currency.localeCompare(b.currency);
    });
    return (
        <div className="grid grid-cols-2 gap-4">
            {sortedRates.map((rate) => {
                const isPositive = rate.changePercentage > 0;
                return (
                    <div key={rate.exchangeRateId} className="p-6 border border-[#E5E7EB] rounded-[20px] bg-white shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-2 text-gray-600">
                            <h4 className="text-[18px] font-semibold">{rate.currency}</h4>
                            <h5>{CURRENCY_NAME_MAP[rate.currency]}</h5>
                        </div>
                        <div className="flex items-baseline gap-1 text-[22px] font-bold text-[#191F28]">
                            <span>{rate.rate.toLocaleString()}</span>
                            <span>KRW</span>
                        </div>
                        <div className={`mt-1 flex items-center gap-1 text-[16px] font-medium ${isPositive ? "text-[#F04452]" : "text-[#3182F6]"}`}>
                            <span>{isPositive ? "▲" : "▼"}</span>
                            <span>
                                {isPositive ? "+" : ""}{(rate.changePercentage * 100).toFixed(1)}%
                            </span>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}
