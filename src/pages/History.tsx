import Layout from "../components/Layout";
import Discription from "../components/Discription";
import { useOrderHistory } from "../lib/queries";
import dayjs from "dayjs";

export default function History() {
    const { data } = useOrderHistory();
    const orders = data.data?.data || [];

    const sortedOrders = [...orders].sort((a, b) =>
        dayjs(b.orderedAt).diff(dayjs(a.orderedAt))
    );

    const formatDate = (dateString: string) => {
        return dayjs(dateString).format("YYYY-MM-DD HH:mm:ss");
    };

    return (
        <Layout>
            <Discription title="환전 내역" description="환전 내역을 확인하실 수 있어요." />

            <div className="px-20 ">
                <div className="bg-white py-4 border border-gray-300 rounded-2xl overflow-hidden">
                    <table className="w-full table-fixed">
                        <thead>
                            <tr className="border-t border-b border-gray-300">
                                <th className="py-[14px] pl-10 text-left text-[14px] font-medium text-[#6B7684]">거래 ID</th>
                                <th className="w-[180px] py-[14px] text-left text-[14px] font-medium text-[#6B7684]">거래 일시</th>
                                <th className="py-[14px] text-right text-[14px] font-medium text-[#6B7684]">매수 금액</th>
                                <th className="py-[14px] text-right text-[14px] font-medium text-[#6B7684]">체결 환율</th>
                                <th className="py-[14px] pr-10 text-right text-[14px] font-medium text-[#6B7684]">매도 금액</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sortedOrders.map((order) => (
                                <tr key={order.orderId} className="hover:bg-gray-50">
                                    <td className="py-6 pl-10 font-medium text-[#333D4B]">{order.orderId}</td>
                                    <td className="w-[180px] py-6 font-medium text-[#333D4B]">{formatDate(order.orderedAt)}</td>
                                    <td className="py-6 text-right font-medium text-[#333D4B]">
                                        {order.fromAmount.toLocaleString()} {order.fromCurrency}
                                    </td>
                                    <td className="py-6 text-right font-medium text-[#333D4B]">
                                        {order.appliedRate.toLocaleString()}
                                    </td>
                                    <td className="py-6 pr-10 text-right font-medium text-[#333D4B]">
                                        {order.toAmount.toLocaleString()} {order.toCurrency}
                                    </td>
                                </tr>
                            ))}
                            {orders.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="py-20 text-center text-gray-500">
                                        환전 내역이 없습니다.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </Layout>
    );
}
