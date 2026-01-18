import { describe, it, expect } from "vitest";
import { getErrorMessage, DomainExceptionCode } from "./error-codes";

describe("getErrorMessage 테스트", () => {
    it("known error codes 테스트", () => {
        expect(getErrorMessage(DomainExceptionCode.WALLET_INSUFFICIENT_BALANCE)).toBe(
            "지갑의 잔액이 부족합니다."
        );
        expect(getErrorMessage(DomainExceptionCode.CURRENCY_MISMATCH)).toBe(
            "통화 타입이 일치하지 않습니다."
        );
    });

    it("default message 테스트", () => {
        const defaultMsg = "Custom default message";
        expect(getErrorMessage("UNKNOWN_CODE", defaultMsg)).toBe(defaultMsg);
    });

    it("unknown code 테스트", () => {
        expect(getErrorMessage("UNKNOWN_CODE")).toBe("알 수 없는 오류가 발생했습니다.");
    });

    it("api specific error message 테스트", () => {
        expect(getErrorMessage("EXCHANGE_RATE_MISMATCH")).toBe(
            "환율이 변동되었습니다. 다시 시도해주세요."
        );
    });
});
