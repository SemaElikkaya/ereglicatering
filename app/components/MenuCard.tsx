interface Props {
    img: string;
    title: string;
    items: string[];
    scrollToSection: (id: string) => void;
}

export default function MenuCard({ img, title, items, scrollToSection }: Props) {
    return (
        <div className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all overflow-hidden h-full">

            <div className="aspect-square overflow-hidden">
                <img
                    src={img}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
            </div>

            <div className="p-6 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-[#c02e2f] transition-colors">
                    {title}
                </h3>

                <div className="bg-gray-50 rounded-2xl p-4 mb-6 flex-1">
                    <ul className="space-y-2">
                        {items.map((item, i) => (
                            <li key={i} className="flex items-start text-gray-700 text-sm">
                                <span className="w-1.5 h-1.5 bg-[#c02e2f] rounded-full mr-3 mt-1.5"></span>
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>

                <button
                    onClick={() => scrollToSection('iletisim')}
                    className="w-full bg-gradient-to-r from-[#c02e2f] to-[#a02525] text-white py-3 rounded-xl font-semibold hover:scale-105 transition"
                >
                    Sipariş Ver
                </button>
            </div>
        </div>
    );
}
