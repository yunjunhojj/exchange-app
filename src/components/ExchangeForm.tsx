import { useState, useEffect } from "react";
import { useOrderQuoteMutation, useCreateOrderMutation } from "../lib/queries";
import type { ExchangeRateResponse } from "../lib/api";
import { Loader2, ChevronDown, ArrowDown } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";

interface ExchangeFormProps {
    rates: ExchangeRateResponse[];
}

export default function ExchangeForm({ rates }: ExchangeFormProps) {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState<"USD" | "JPY">("USD");
    const [type, setType] = useState<"BUY" | "SELL">("BUY");
    const [quote, setQuote] = useState<{ krwAmount: number; appliedRate: number } | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [success, setSuccess] = useState<string | null>(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const queryClient = useQueryClient();
    const quoteMutation = useOrderQuoteMutation();
    const orderMutation = useCreateOrderMutation();

    // Debounce quote fetch
    useEffect(() => {
        const timer = setTimeout(() => {
            if (!amount || parseFloat(amount) <= 0) {
                setQuote(null);
                return;
            }

            const forexAmount = parseFloat(amount);
            const fromCurrency = type === "BUY" ? "KRW" : currency;
            const toCurrency = type === "BUY" ? currency : "KRW";

            quoteMutation.mutate(
                { fromCurrency, toCurrency, forexAmount },
                {
                    onSuccess: (data) => {
                        if (data.data.data) {
                            setQuote(data.data.data);
                            setError(null);
                        }
                    },
                    onError: (err: any) => {
                        console.error(err);
                        setQuote(null);
                    }
                }
            );
        }, 500);

        return () => clearTimeout(timer);
    }, [amount, currency, type]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!quote || !amount) return;

        const currentRateObj = rates.find(r => r.currency === currency);
        if (!currentRateObj) {
            setError("Exchange rate not found");
            return;
        }

        setError(null);
        setSuccess(null);
        const forexAmount = parseFloat(amount);

        orderMutation.mutate(
            {
                exchangeRateId: currentRateObj.exchangeRateId,
                fromCurrency: type === "BUY" ? "KRW" : currency,
                toCurrency: type === "BUY" ? currency : "KRW",
                forexAmount
            },
            {
                onSuccess: () => {
                    setSuccess("환전이 완료되었습니다.");
                    setAmount("");
                    setQuote(null);
                    queryClient.invalidateQueries({ queryKey: ["wallets"] });
                },
                onError: (err: any) => {
                    if (err.response && err.response.data && err.response.data.message) {
                        setError(err.response.data.message);
                    } else {
                        setError("환전 실패. 다시 시도해주세요.");
                    }
                }
            }
        )
    };

    const formatKrw = (val: number) => new Intl.NumberFormat('ko-KR').format(val);

    const currentRate = rates.find(r => r.currency === currency)?.rate || 0;

    return (
        <div className="bg-[#F7F8FA] border border-[#E5E7EB] rounded-[20px] p-6 h-full flex flex-col relative">
            <div className="relative mb-6">
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                >
                    <span className="flex items-center justify-center w-6 h-6 text-[40px] rounded-full overflow-hidden">
                        {CURRENCY_EMOJI_MAP[currency]}
                    </span>
                    <span className="text-[24px] font-bold text-[#36414C]">
                        {currency} 환전하기
                    </span>
                    <ChevronDown className={`w-[28px] h-[28px] text-[#36414C] transition-transform ${isDropdownOpen ? "rotate-180" : ""}`} />
                </div>
                {isDropdownOpen && (
                    <div className="absolute top-10 left-0 w-[140px] bg-white rounded-2xl shadow-lg border border-gray-200 z-10 py-2">
                        <div
                            className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 cursor-pointer"
                            onClick={() => {
                                setCurrency("USD");
                                setIsDropdownOpen(false);
                            }}
                        >
                            <span className="w-4 h-4 overflow-hidden rounded-full flex items-center justify-center text-[20px]">🇺🇸</span>
                            <span className="text-[16px] font-medium text-[#333D4B]">미국 USD</span>
                        </div>
                        <div
                            className="flex items-center gap-2 px-4 py-3 hover:bg-gray-50 cursor-pointer"
                            onClick={() => {
                                setCurrency("JPY");
                                setIsDropdownOpen(false);
                            }}
                        >
                            <span className="w-4 h-4 overflow-hidden rounded-full flex items-center justify-center text-[20px]">🇯🇵</span>
                            <span className="text-[16px] font-medium text-[#333D4B]">일본 JPY</span>
                        </div>
                    </div>
                )}
            </div>

            <div className="flex bg-white p-3 rounded-2xl mb-8 border border-gray-300">
                <button
                    onClick={() => {
                        setType("BUY");
                        setAmount("");
                        setQuote(null);
                    }}
                    className={`flex-1 py-4 text-[20px] font-bold rounded-2xl transition-colors leading-[133%] ${type === "BUY"
                        ? "bg-[#F04452] text-white"
                        : "text-[#8B95A1] hover:text-[#6B7684]"
                        }`}
                >
                    살래요
                </button>
                <button
                    onClick={() => {
                        setType("SELL");
                        setAmount("");
                        setQuote(null);
                    }}
                    className={`flex-1 py-3 text-[20px] font-bold rounded-2xl transition-colors leading-[133%] ${type === "SELL"
                        ? "bg-[#3182F6] text-white"
                        : "text-[#8B95A1] hover:text-[#6B7684]"
                        }`}
                >
                    팔래요
                </button>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col flex-1">
                <div>
                    <label className="block text-[20px] font-medium text-gray-600 mb-3">
                        {type === "BUY" ? "매수 금액" : "매도 금액"}
                    </label>
                    <div className="relative">
                        <input
                            type="number"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="block w-full h-[75px] border border-[#E5E7EB] rounded-xl py-6 pl-6 pr-24 text-[20px] font-bold leading-[133%] text-[#191F28] focus:outline-none focus:ring-2 focus:ring-[#3182F6] bg-white placeholder:text-right [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-inner-spin-button]:m-0"
                            placeholder=""
                            style={{ textAlign: "right" }}
                        />
                        <span className="absolute right-6 top-1/2 -translate-y-1/2 text-[16px] font-medium text-[#4E5968]">
                            {currency === "USD" ? "달러" : "엔"} {type === "BUY" ? "사기" : "팔기"}
                        </span>
                    </div>
                </div>

                <div className="flex justify-center my-[18px] z-10 relative">
                    <div className="bg-[#E5E7EB] rounded-full p-1 border-4 border-[#F7F8FA]">
                        <ChevronDown className="w-5 h-5 text-white" />
                    </div>
                </div>

                <div className="mb-auto">
                    <label className="block text-[20px] font-medium text-gray-600 mb-3">
                        필요 원화
                    </label>
                    <div className="relative h-[75px] bg-[#F2F4F6] border border-[#E5E7EB] rounded-xl py-6 px-6 text-right">
                        <span className={`text-[20px] leading-[133%] font-semibold text-gray-600`}>
                            {quote ? formatKrw(quote.krwAmount) : "0"}
                        </span>
                        <span className={`ml-[10px] text-[20px] font-medium ${type === "BUY" ? "text-[#FE5050]" : "text-[#3479EB]"}`}>
                            원 {type === "BUY" ? "필요해요" : "받을 수 있어요"}
                        </span>
                    </div>
                </div>

                <div className="mt-8">
                    <hr className="h-px w-full bg-gray-400 mb-4" />

                    <div className="flex justify-between items-center mb-8 text-[20px] text-gray-600">
                        <span className="font-medium">적용 환율</span>
                        <span className="font-semibold">
                            1 {currency} = {currentRate.toLocaleString()} 원
                        </span>
                    </div>

                    {error && <div className="text-[#FE5050] text-sm mb-4 text-center font-medium">{error}</div>}
                    {success && <div className="text-[#3479EB] text-sm mb-4 text-center font-medium">{success}</div>}

                    <button
                        type="submit"
                        disabled={!quote || orderMutation.isPending || quoteMutation.isPending}
                        className="w-full h-[77px] flex justify-center py-6 bg-[#1B2334] text-white rounded-2xl text-[22px] leading-[133%] font-bold hover:bg-[#2C3545] disabled:bg-[#C5CAD0] transition-colors"
                    >
                        {(orderMutation.isPending || quoteMutation.isPending) && <Loader2 className="animate-spin mr-2 h-6 w-6" />}
                        환전하기
                    </button>
                </div>
            </form>
        </div>
    );
}

const CURRENCY_EMOJI_MAP = {
    USD: "🇺🇸",
    JPY: "🇯🇵",
}