export const DomainExceptionCode = {
    WALLET_INSUFFICIENT_BALANCE: "WALLET_INSUFFICIENT_BALANCE",
    INVALID_DEPOSIT_AMOUNT: "INVALID_DEPOSIT_AMOUNT",
    INVALID_WITHDRAW_AMOUNT: "INVALID_WITHDRAW_AMOUNT",
    CURRENCY_MISMATCH: "CURRENCY_MISMATCH",
    INVALID_AMOUNT_SCALE: "INVALID_AMOUNT_SCALE",
    EXCHANGE_RATE_CURRENCY_MISMATCH: "EXCHANGE_RATE_CURRENCY_MISMATCH",
    UNSUPPORTED_FOREX_CONVERSION_CURRENCY: "UNSUPPORTED_FOREX_CONVERSION_CURRENCY",
    INVALID_EXCHANGE_RATE_CURRENCY: "INVALID_EXCHANGE_RATE_CURRENCY",
    UNSUPPORTED_CURRENCY_FOR_KRW_CONVERSION: "UNSUPPORTED_CURRENCY_FOR_KRW_CONVERSION",
} as const;

export type DomainExceptionCode = typeof DomainExceptionCode[keyof typeof DomainExceptionCode];

export const ERROR_MESSAGES: Record<string, string> = {
    [DomainExceptionCode.WALLET_INSUFFICIENT_BALANCE]: "지갑의 잔액이 부족합니다.",
    [DomainExceptionCode.INVALID_DEPOSIT_AMOUNT]: "입금 금액이 유효하지 않습니다.",
    [DomainExceptionCode.INVALID_WITHDRAW_AMOUNT]: "출금 금액이 유효하지 않습니다.",
    [DomainExceptionCode.CURRENCY_MISMATCH]: "통화 타입이 일치하지 않습니다.",
    [DomainExceptionCode.INVALID_AMOUNT_SCALE]: "해당 통화의 소수점 자릿수가 올바르지 않습니다.",
    [DomainExceptionCode.EXCHANGE_RATE_CURRENCY_MISMATCH]: "환율 정보와 요청한 통화가 일치하지 않습니다.",
    [DomainExceptionCode.UNSUPPORTED_FOREX_CONVERSION_CURRENCY]: "외화 간 직접 변환은 지원하지 않습니다.",
    [DomainExceptionCode.INVALID_EXCHANGE_RATE_CURRENCY]: "잘못된 환율 정보입니다.",
    [DomainExceptionCode.UNSUPPORTED_CURRENCY_FOR_KRW_CONVERSION]: "지원하지 않는 통화 변환입니다.",
    // API errors
    "EXCHANGE_RATE_MISMATCH": "환율이 변동되었습니다. 다시 시도해주세요.",
};

export function getErrorMessage(code: string, defaultMessage?: string): string {
    return ERROR_MESSAGES[code] || defaultMessage || "알 수 없는 오류가 발생했습니다.";
}
