'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { Clock, Users, Sparkles, Award, Utensils, Search, HandPlatter, Scroll } from 'lucide-react';
import CustomLightbox from './components/CustomLightbox';
import ContactSection from './components/ContactSection';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useSearchParams } from 'next/navigation';
import { useRouter } from "next/navigation";
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsappButton';
import Footer from './components/Footer';
import ScrollHandler from './components/ScrollHandler';
import IftarMenuCarousel from './components/IftarMenuCarousel';
import LokantaSection from './components/LokantaSection';



export default function EregliCatering() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('ana-sayfa');
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);
  const router = useRouter();


  const navLinks = [
    { name: 'Hakkımızda', href: 'hakkimizda' },
    { name: 'Hizmetler', href: 'hizmetler' },
    { name: 'Menüler', href: 'menuler' },
    { name: 'İftar Menüleri', href: 'iftar-menuleri' },
    { name: 'Esnaf Lokantası', href: 'esnaf-lokantasi' },
    { name: 'Galeri', href: 'galeri' },
    { name: 'İletişim', href: 'iletisim' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const sections = [
      'ana-sayfa',
      'hakkimizda',
      'hizmetler',
      'menuler',
      'iftar-menuleri',
      'galeri',
      'esnaf-lokantasi',
      'iletisim',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const { offsetTop, offsetHeight } = el;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // ilk yüklemede

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);



  const services = [
    {
      title: "Düğün & Nişan",
      desc: "Hayatınızın en özel gününde unutulmaz lezzetler",
      image: "./image/services1.jpeg",
      icon: Sparkles
    },
    {
      title: "Kurumsal Etkinlikler",
      desc: "Profesyonel organizasyonlar için özel menüler",
      image: "./image/services2.jpeg",
      icon: Users
    },
    {
      title: "Toplu Yemek Hizmetleri",
      desc: "Profesyonel ve hijyenik toplu yemek çözümleri",
      image: "./image/services3.jpeg",
      icon: Utensils
    }
  ];

  const menuCategories = [
    {
      title: "Ana Yemekler",
      items: ["Dana Kavurma", "Patlıcan Musakka", "Tavuk Pirzola", "Elbasan Tava", "Ve Daha Fazlası..."],
      image: "./image/anayemek.avif"
    },
    {
      title: "Mezeler",
      items: ["Haydari", "Cacık", "Havuç Tarator", "Ezme Çeşitleri", "Ve Daha Fazlası..."],
      image: "./image/meze.avif"
    },
    {
      title: "Tatlılar",
      items: ["Baklava", "Tulumba", "Sütlaç", "Trileçe", "Ve Daha Fazlası..."],
      image: "./image/tatli.jpg"
    }
  ];

  const gallery = [
    "./image/gallery1.jpg",
    "./image/gallery2.jpeg",
    "./image/gallery3.jpeg",
    "./image/gallery4.jpeg",
    "./image/gallery5.jpeg",
    "./image/gallery6.jpeg",
  ];

  return (
    <>
      <Suspense fallback={null}>
        <ScrollHandler />
      </Suspense>
      <div className="min-h-screen bg-white">
        <Navbar activeSection={activeSection} />

        {/* Hero Section with Video */}
        <section id="ana-sayfa" className="relative h-screen overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Mobil Video - 768px ALTINDA */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="./image/hero-poster-mobile.jpeg"
              className="block md:hidden w-full h-full object-cover"
            >
              <source src="/hero-video-mobile.mp4" type="video/mp4" />
            </video>

            {/* Desktop Video - 768px ÜSTÜNDE */}
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
              poster="./image/hero-poster.jpeg"
              className="hidden md:block w-full h-full object-cover"
            >
              <source src="/hero-video.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 pointer-events-none"></div>

          </div>

          {/* Content - Centered */}
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl animate-[fadeInUp_1s_ease-out]">
              <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight">
                Ereğli Catering
              </h1>
              <p className="text-2xl md:text-3xl text-white/90 mb-12 font-light">
                Toplu Yemekte Çözüm Ortağınız
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <button
                  onClick={() => scrollToSection('menuler')}
                  className="w-72 bg-[#c02e2f] hover:bg-[#a02525] active:bg-[#8a1f1f] active:scale-95 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-2xl"
                >
                  Menülerimizi İncele
                </button>

                <button
                  onClick={() => scrollToSection('iletisim')}
                  className="w-72 border-2 border-white text-white hover:bg-white hover:text-gray-900 active:bg-gray-100 active:text-gray-900 active:scale-95 px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
                >
                  İletişime Geç
                </button>
              </div>

            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce pointer-events-none">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-[slideDown_1.5s_ease-in-out_infinite]"></div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="hakkimizda" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-5xl font-bold text-gray-900">
                  Ereğli'de <span className="text-red-600">15 Yıldır</span>
                </h2>
                <p className="text-lg text-gray-700 leading-relaxed">
                  2009 yılından bu yana Ereğli ve çevresinde profesyonel catering hizmeti veriyoruz.
                  Düğünlerden kurumsal etkinliklere, özel günlerden büyük organizasyonlara kadar
                  her türlü organizasyonda yanınızdayız.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Deneyimli ekibimiz, kaliteli malzemelerimiz ve hijyen standartlarımızla
                  misafirlerinize unutulmaz bir lezzet deneyimi sunuyoruz.
                </p>
                <div className="grid grid-cols-3 gap-6 pt-6">
                  {[
                    { icon: Users, number: "500+", text: "Mutlu Müşteri" },
                    { icon: Award, number: "1000+", text: "Etkinlik" },
                    { icon: Clock, number: "15", text: "Yıl Deneyim" }
                  ].map((stat, idx) => (
                    <div key={idx} className="text-center">
                      <stat.icon className="w-10 h-10 text-red-600 mx-auto mb-2" />
                      <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.text}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <img
                  src="./image/aboutus2.jpg"
                  alt="About"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-red-600 rounded-3xl -z-10"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="hizmetler" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
              <p className="text-xl text-gray-600">Her etkinlik için özel çözümler</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/50 to-transparent flex flex-col justify-end p-8 min-h-full transition-all duration-500">
                    <div className="space-y-3">
                      <HandPlatter className="w-12 h-12 text-white mb-4 transform transition-transform duration-500 group-hover:scale-110" />
                      <h3 className="text-xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-gray-200 opacity-100 md:opacity-0 md:group-hover:opacity-100 transform translate-y-0 md:translate-y-4  md:group-hover:translate-y-0 transition-all duration-500">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Menu Section */}
        <section id="menuler" className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Menülerimiz</h2>
              <p className="text-xl text-gray-600">Lezzet dolu seçenekler</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {menuCategories.map((category, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                      {category.title}
                    </h3>
                    <ul className="space-y-2">
                      {category.items.map((item, itemIdx) => (
                        <li key={itemIdx} className="flex items-center text-gray-700">
                          <span className="w-2 h-2 bg-red-600 rounded-full mr-3"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button
                onClick={() => scrollToSection('iletisim')}
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Detaylı Menü İçin İletişime Geçin
              </button>
            </div>
          </div>
        </section>

        {/* İftar Menüleri Section */}
        <section id="iftar-menuleri" className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block bg-[#c02e2f]/10 px-6 py-2 rounded-full mb-4">
                <span className="text-[#c02e2f] font-semibold">Ramazan Özel</span>
              </div>
              <h2 className="text-5xl font-bold text-gray-900 mb-4">
                İftar Menüleri
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Ramazan ayına özel hazırladığımız lezzetli iftar paketleri ile sofralarınızı şenlendirin
              </p>
            </div>

            <IftarMenuCarousel scrollToSection={scrollToSection} />
          </div>
        </section>

        {/* Gallery Section */}
        <section id="galeri" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Başlık */}
            <div className="text-center mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Galeri</h2>
              <p className="text-xl text-gray-600">Lezzetlerimizden kareler</p>
            </div>

            {/* Carousel */}
            <div className="relative max-w-3xl mx-auto overflow-visible">
              <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                  enabled: typeof window !== 'undefined' && window.innerWidth >= 768
                }}
                autoplay={{
                  delay: 3500,
                  disableOnInteraction: false,
                }}
                spaceBetween={16}
                slidesPerView={1}
              >

                {gallery.map((img, idx) => (
                  <SwiperSlide key={idx}>
                    <div
                      className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
                    >
                      <div className="aspect-[4/3]">
                        <img
                          src={img}
                          alt={`Gallery ${idx + 1}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-active:scale-125"
                          draggable="false"
                        />
                      </div>

                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-red-600/0 transition-all duration-500 flex items-center justify-center pointer-events-none">
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>

          </div>
        </section>


        <LokantaSection scrollToSection={scrollToSection} />

        {/* Contact Section - Restaurant Style */}
        <ContactSection />

        {/* WhatsApp Floating Button - Sol Alt Köşe */}
        <WhatsAppButton />

        {/* Footer */}
        <Footer />

        <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.1);
          }
        }

        @keyframes slideDown {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(10px);
          }
        }
      `}</style>
      </div >
    </>
  );
}