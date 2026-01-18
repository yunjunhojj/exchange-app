import type { ExchangeRateResponse } from "../lib/api";

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
                            <h5>{CURRENCY_MAP[rate.currency]}</h5>
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

const CURRENCY_MAP = {
    USD: "미국 달러",
    JPY: "일본 엔화",
    EUR: "유로",
    GBP: "영국 파운드",
    CHF: "스위스 프랑",
    CAD: "캐나다 달러",
    AUD: "호주 달러",
    CNY: "중국 위안",
    HKD: "홍콩 달러",
    SGD: "싱가포르 달러",
    NZD: "뉴질랜드 달러",
    SEK: "스웨덴 크로나",
    NOK: "노르웨이 크로나",
    DKK: "덴마크 크로네",
    PLN: "폴란드 즈워티",
    HUF: "헝가리 포린트",
    CZK: "체코 코루나",
    BRL: "브라질 헤알",
    MXN: "멕시코 페소",
    ZAR: "남아프리카 공화국 랜드",
    TRY: "터키 리라",
    INR: "인도 루피",
    THB: "태국 바트",
    VND: "베트남 동",
    PHP: "필리핀 페소",
    MYR: "말레이시아 링깃",
    TWD: "대만 달러",
    KRW: "대한민국 원",
}