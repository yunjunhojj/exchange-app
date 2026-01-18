import { useWalletSummary, useExchangeRates } from "../lib/queries";
import Layout from "../components/Layout";
import WalletStatus from "../components/WalletStatus";
import ExchangeRateList from "../components/ExchangeRateList";
import ExchangeForm from "../components/ExchangeForm";
import Discription from "../components/Discription";

export default function Home() {
    const { data: walletData } = useWalletSummary();
    const { data: ratesData } = useExchangeRates();

    const wallets = walletData.data?.data?.wallets || [];
    const totalKrwBalance = walletData.data?.data?.totalKrwBalance || 0;
    const rates = ratesData.data?.data || [];

    return (
        <Layout>
            <Discription title="환율 정보" description="실시간 환율을 확인하고 간편하게 환전하세요." />
            <div className="grid grid-cols-2 gap-6 px-20">
                <section className="flex flex-col gap-6">
                    <ExchangeRateList rates={rates} />
                    <WalletStatus totalKrwBalance={totalKrwBalance} wallets={wallets} />
                </section>
                <section>
                    <ExchangeForm rates={rates} />
                </section>
            </div>
        </Layout>
    );
}
