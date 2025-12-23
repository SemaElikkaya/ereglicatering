'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import MenuCard from './MenuCard';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function IftarMenuCarousel({ scrollToSection }: { scrollToSection: (id: string) => void }) {
    return (
        <div className="relative  mx-4 sm:mx-8 md:mx-12 lg:mx-16">
            <style jsx global>{`
    .iftar-menu-carousel {
        padding-bottom: 30px;
    }

    .iftar-menu-carousel .swiper-wrapper {
        margin-bottom: 0 !important;
    }

    .iftar-menu-carousel .swiper-pagination {
        position: absolute !important;
        bottom: 0 !important;
        left: 50% !important;
        transform: translateX(-50%) !important;
        width: auto !important;
        margin-top: 0 !important;
    }

    .iftar-menu-carousel .swiper-pagination-bullet {
        width: 10px;
        height: 10px;
        background: #d1d5db;
        opacity: 1;
        transition: all 0.3s ease;
    }

    .iftar-menu-carousel .swiper-pagination-bullet-active {
        background: linear-gradient(135deg, #c02e2f 0%, #a02525 100%);
        width: 28px;
        border-radius: 5px;
    }
`}</style>

            <Swiper
                className="iftar-menu-carousel"
                modules={[Autoplay, Pagination]}
                navigation
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 24,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 28,
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 32,
                    },
                }}
            >
                {/* SLIDE 1 */}
                <SwiperSlide>
                    <MenuCard
                        img="./image/iftar-menu1.jpg"
                        title="Bol Etli Tas Kebabı Menü"
                        scrollToSection={scrollToSection}
                        items={[
                            'Çorba',
                            'Bol Etli Tas Kebabı',
                            'Pilav',
                            'Mevsim Salata',
                            'Taze Pide & İçecek',
                        ]}
                    />
                </SwiperSlide>

                {/* SLIDE 2 */}
                <SwiperSlide>
                    <MenuCard
                        img="./image/iftar-menu1.jpg"
                        title="Tas Kebaplı Menü"
                        scrollToSection={scrollToSection}
                        items={[
                            'Çorba',
                            'Tas Kebabı',
                            'Pilav',
                            'Mevsim Salata',
                            'Taze Pide & İçecek',
                        ]}
                    />
                </SwiperSlide>

                {/* SLIDE 3 */}
                <SwiperSlide>
                    <MenuCard
                        img="./image/iftar-menu3.jpg"
                        title="Tavuk Soteli Menü"
                        scrollToSection={scrollToSection}
                        items={[
                            'Çorba',
                            'Tavuk Sote',
                            'Pilav',
                            'Mevsim Salata',
                            'Taze Pide & İçecek',
                        ]}
                    />
                </SwiperSlide>

                {/* SLIDE 4 */}
                <SwiperSlide>
                    <MenuCard
                        img="./image/iftar-menu4.jpeg"
                        title="Etli Kuru Fasulyeli Menü"
                        scrollToSection={scrollToSection}
                        items={[
                            'Çorba',
                            'Etli Kuru Fasulye',
                            'Pilav',
                            'Mevsim Salata',
                            'Taze Pide & İçecek',
                        ]}
                    />
                </SwiperSlide>

                {/* SLIDE 5 */}
                <SwiperSlide>
                    <MenuCard
                        img="./image/iftar-menu5.jpg"
                        title="Etli Nohutlu Menü"
                        scrollToSection={scrollToSection}
                        items={[
                            'Çorba',
                            'Etli Nohut',
                            'Pilav',
                            'Mevsim Salata',
                            'Taze Pide & İçecek',
                        ]}
                    />
                </SwiperSlide>

                {/* SLIDE 6 */}
                <SwiperSlide>
                    <MenuCard
                        img="./image/iftar-menu5.jpg"
                        title="Misket Köfteli Menü"
                        scrollToSection={scrollToSection}
                        items={[
                            'Çorba',
                            'Misket Köfte',
                            'Pilav',
                            'Mevsim Salata',
                            'Taze Pide & İçecek',
                        ]}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    );
}
