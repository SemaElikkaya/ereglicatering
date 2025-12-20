'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function LokantaSection({ scrollToSection }: { scrollToSection: (id: string) => void }) {
    return (
        <section id="esnaf-lokantasi" className="py-24 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
            {/* Dekoratif Arka Plan */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-20 left-10 w-72 h-72 bg-[#c02e2f] rounded-full blur-3xl"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#a02525] rounded-full blur-3xl"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">

                {/* Hero Başlık Bölümü */}
                <div className="text-center mb-20">
                    <div className="inline-block mb-6">
                        <span className="text-[#c02e2f] font-semibold text-sm uppercase tracking-widest bg-red-50 px-6 py-2 rounded-full">
                            Geleneksel Lezzet
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                        Ereğli Catering Esnaf Lokantası
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-transparent via-[#c02e2f] to-transparent mx-auto mb-8"></div>
                    <p className="text-lg md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto font-light">
                        Burası sadece bir lokanta değil, bir mahalle hikayesi. Tencere yemeklerinin en samimi hali, her kaşıkta bir anı.
                    </p>
                </div>

                {/* Video ve İçerik Grid */}
                <div className="grid lg:grid-cols-2 gap-12 items-center mb-20 max-w-7xl mx-auto">

                    {/* Video Bölümü */}
                    <div className="order-2 lg:order-1">
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-[#c02e2f] to-[#a02525] rounded-3xl blur-lg opacity-20 group-hover:opacity-30 transition duration-500"></div>
                            <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                                <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800">
                                    <video
                                        className="w-full h-full object-cover"
                                        controls
                                        poster="./image/lokanta-1.jpeg"
                                    >
                                        <source src="./lokanta-tanitim.mp4" type="video/mp4" />
                                        Tarayıcınız video etiketini desteklemiyor.
                                    </video>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* İçerik Bölümü */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#c02e2f] to-[#a02525] rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-lg">
                                    🍲
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Geleneksel Lezzetler</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Geleneğin lezzetle buluştuğu o sıcak yuva. Hala gerçek yemek kültürü yaşatıyoruz.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#c02e2f] to-[#a02525] rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-lg">
                                    👨‍🍳
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Usta Ellerde</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Esnaf lokantaları berekettir, emektir, komşuluktur. Her tabakta özen vardır.
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#c02e2f] to-[#a02525] rounded-xl flex items-center justify-center text-white text-2xl flex-shrink-0 shadow-lg">
                                    ❤️
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Samimi Ortam</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Tencere yemeklerinin en samimi hali, her kaşıkta bir anı. Evinin sıcaklığı.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Fotoğraf Carousel */}
                <div className="mb-20 max-w-3xl mx-auto">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-10">
                        Atmosferimiz
                    </h3>
                    <div className="relative overflow-visible">
                        <Swiper
                            className="rounded-3xl overflow-hidden shadow-2xl"
                            modules={[Navigation, Autoplay]}
                            navigation
                            autoplay={{
                                delay: 3500,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            spaceBetween={0}
                            slidesPerView={1}
                        >
                            <SwiperSlide>
                                <div className="aspect-video bg-gray-200">
                                    <img
                                        src="./image/lokanta-1.jpeg"
                                        alt="Lokanta 1"
                                        className="w-full h-full object-cover active:scale-125 md:hover:scale-125 transition-transform duration-700 "
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="aspect-video bg-gray-200">
                                    <img
                                        src="./image/lokanta-2.jpeg"
                                        alt="Lokanta 2"
                                        className="w-full h-full object-cover active:scale-125 md:hover:scale-125 transition-transform duration-700"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="aspect-video bg-gray-200">
                                    <img
                                        src="./image/lokanta-3.jpeg"
                                        alt="Lokanta 3"
                                        className="w-full h-full object-cover active:scale-125 md:hover:scale-125 transition-transform duration-700"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="aspect-video bg-gray-200">
                                    <img
                                        src="./image/lokanta-4.jpeg"
                                        alt="Lokanta 4"
                                        className="w-full h-full object-cover active:scale-125 md:hover:scale-125 transition-transform duration-700"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="aspect-video bg-gray-200">
                                    <img
                                        src="./image/lokanta-5.jpeg"
                                        alt="Lokanta 5"
                                        className="w-full h-full object-cover active:scale-125 md:hover:scale-125 transition-transform duration-700"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="aspect-video bg-gray-200">
                                    <img
                                        src="./image/lokanta-6.jpeg"
                                        alt="Lokanta 6"
                                        className="w-full h-full object-cover active:scale-125 md:hover:scale-125 transition-transform duration-700"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="aspect-video bg-gray-200">
                                    <img
                                        src="./image/lokanta-7.jpeg"
                                        alt="Lokanta 7"
                                        className="w-full h-full object-cover active:scale-125 md:hover:scale-125 transition-transform duration-700"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="aspect-video bg-gray-200">
                                    <img
                                        src="./image/lokanta-8.jpeg"
                                        alt="Lokanta 8"
                                        className="w-full h-full object-cover active:scale-125 md:hover:scale-125 transition-transform duration-700"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="aspect-video bg-gray-200">
                                    <img
                                        src="./image/lokanta-9.jpeg"
                                        alt="Lokanta 9"
                                        className="w-full h-full object-cover active:scale-125 md:hover:scale-125 transition-transform duration-700"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="aspect-video bg-gray-200">
                                    <img
                                        src="./image/lokanta-10.jpeg"
                                        alt="Lokanta 10"
                                        className="w-full h-full object-cover active:scale-125 md:hover:scale-125 transition-transform duration-700"
                                    />
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className="aspect-video bg-gray-200">
                                    <img
                                        src="./image/lokanta-11.jpeg"
                                        alt="Lokanta 11"
                                        className="w-full h-full object-cover active:scale-125 md:hover:scale-125 transition-transform duration-700"
                                    />
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                {/* İletişim Kartları */}
                <div className="max-w-6xl mx-auto">
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-12">
                        Bizi Ziyaret Edin
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6 lg:gap-8">

                        {/* Adres */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c02e2f] to-[#a02525] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                            <div className="relative bg-white p-6 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#c02e2f] to-[#a02525] rounded-2xl flex items-center justify-center text-white text-3xl lg:text-4xl mx-auto mb-4 lg:mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                    📍
                                </div>
                                <h4 className="text-2xl md:text-xl font-bold text-gray-900 mb-4 text-center">
                                    Adresimiz
                                </h4>
                                <p className="text-gray-600 text-center leading-relaxed">
                                    Bahçelievler, <br />
                                    Atatürk Blv. No:14/A, 59740 <br />
                                    Marmaraereğlisi/Tekirdağ
                                </p>
                                <button
                                    onClick={() => window.open('https://maps.app.goo.gl/NkT8TEr3F4Fyve7x8', '_blank')}
                                    className="w-full bg-gradient-to-r from-[#c02e2f] to-[#a02525] text-white font-semibold py-2 px-6 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                >
                                    Yol Tarifi →
                                </button>
                            </div>
                        </div>

                        {/* Çalışma Saatleri */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c02e2f] to-[#a02525] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                            <div className="relative bg-white p-6 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#c02e2f] to-[#a02525] rounded-2xl flex items-center justify-center text-white text-3xl lg:text-4xl mx-auto mb-4 lg:mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                    🕐
                                </div>
                                <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 text-center">
                                    Çalışma Saatleri
                                </h4>
                                <p className="text-gray-600 mb-2 text-center">
                                    <span className="font-semibold text-gray-800">Hafta İçi:</span> 06:30 - 20:00
                                </p>
                                <p className="text-gray-600 text-center">
                                    <span className="font-semibold text-gray-800">Cumartesi:</span> 06:30 - 20:00
                                </p>
                                <p className="text-gray-600 text-center">
                                    <span className="font-semibold text-gray-800">Pazar:</span> Kapalı
                                </p>
                            </div>
                        </div>

                        {/* Telefon ve Mail */}
                        <div className="relative group">
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-[#c02e2f] to-[#a02525] rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                            <div className="relative bg-white p-6 lg:p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-[#c02e2f] to-[#a02525] rounded-2xl flex items-center justify-center text-white text-3xl lg:text-4xl mx-auto mb-4 lg:mb-6 shadow-lg transform group-hover:scale-110 transition-transform duration-300">
                                    📞
                                </div>
                                <h4 className="text-xl lg:text-2xl font-bold text-gray-900 mb-3 lg:mb-4 text-center">
                                    İletişim
                                </h4>
                                <div className="flex-grow flex flex-col items-center justify-center space-y-3">
                                    <a href="tel:+905436132814" className="text-gray-800 font-semibold text-base lg:text-lg hover:text-[#c02e2f] transition-colors">
                                        📱 0543 613 28 14
                                    </a>
                                    <a href="mailto:ereglicatering@gmail.com"
                                        className="text-gray-800 font-semibold text-sm lg:text-base hover:text-[#c02e2f] transition-colors break-all"
                                    >
                                        ereglicatering@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}