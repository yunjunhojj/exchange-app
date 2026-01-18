import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import ExchangeForm from "./ExchangeForm";
import type { ExchangeRateResponse } from "../lib/api";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const mockMutateQuote = vi.fn();
const mockMutateOrder = vi.fn();
const mockInvalidateQueries = vi.fn();

vi.mock("../lib/queries", () => ({
    useOrderQuoteMutation: () => ({
        mutate: mockMutateQuote,
        isPending: false,
    }),
    useCreateOrderMutation: () => ({
        mutate: mockMutateOrder,
        isPending: false,
    }),
}));

vi.mock("@tanstack/react-query", async () => {
    const actual = await vi.importActual("@tanstack/react-query");
    return {
        ...actual,
        useQueryClient: () => ({
            invalidateQueries: mockInvalidateQueries,
        }),
    };
});

const mockRates: ExchangeRateResponse[] = [
    {
        exchangeRateId: 1,
        currency: "USD",
        rate: 1300,
        changePercentage: 0.01,
        applyDateTime: "2023-01-01T00:00:00Z",
    },
    {
        exchangeRateId: 2,
        currency: "JPY",
        rate: 900,
        changePercentage: -0.01,
        applyDateTime: "2023-01-01T00:00:00Z",
    },
];

const renderWithClient = (ui: React.ReactNode) => {
    const queryClient = new QueryClient();
    return render(
        <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>
    );
};

describe("ExchangeForm", () => {
    beforeEach(() => {
        vi.clearAllMocks();
    });

    it("랜더링 테스트", () => {
        renderWithClient(<ExchangeForm rates={mockRates} />);

        expect(screen.getByText("살래요")).toBeInTheDocument();
        expect(screen.getByText("팔래요")).toBeInTheDocument();
        expect(screen.getByPlaceholderText("")).toBeInTheDocument(); // Amount input
        expect(screen.getByText("환전하기")).toBeInTheDocument();
    });

    it("에러 테스트", async () => {
        renderWithClient(<ExchangeForm rates={mockRates} />);

        const input = screen.getByRole("spinbutton");
        fireEvent.change(input, { target: { value: "-100" } });

        await waitFor(() => {
            expect(mockMutateQuote).not.toHaveBeenCalled();
        }, { timeout: 600 });
    });

    it("쿼리 호출 테스트", async () => {
        renderWithClient(<ExchangeForm rates={mockRates} />);

        const input = screen.getByRole("spinbutton");
        fireEvent.change(input, { target: { value: "100" } });

        await waitFor(() => {
            expect(mockMutateQuote).toHaveBeenCalledWith(
                expect.objectContaining({
                    fromCurrency: "KRW",
                    toCurrency: "USD",
                    forexAmount: 100,
                }),
                expect.anything()
            );
        }, { timeout: 1000 });
    });
});
