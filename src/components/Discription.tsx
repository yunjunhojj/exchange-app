export default function Discription({ title, description }: { title: string; description: string }) {
    return (
        <section className="px-20 py-10 mb-6">
            <h1 className="text-[40px] font-bold text-gray-800">{title}</h1>
            <p className="text-[20px] text-gray-700">{description}</p>
        </section>
    );
}