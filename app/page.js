'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Users, Sparkles, Award, Utensils, Search } from 'lucide-react';
import CustomLightbox from './components/CustomLightbox';

export default function EregliCatering() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('ana-sayfa');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section detection
      const sections = ['ana-sayfa', 'hakkimizda', 'hizmetler', 'menuler', 'galeri', 'iletisim'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Anasayfa', href: 'ana-sayfa' },
    { name: 'Hakkımızda', href: 'hakkimizda' },
    { name: 'Hizmetler', href: 'hizmetler' },
    { name: 'Menüler', href: 'menuler' },
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

  const services = [
    {
      title: "Düğün & Nişan",
      desc: "Hayatınızın en özel gününde unutulmaz lezzetler",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
      icon: Sparkles
    },
    {
      title: "Kurumsal Etkinlikler",
      desc: "Profesyonel organizasyonlar için özel menüler",
      image: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&h=600&fit=crop",
      icon: Users
    },
    {
      title: "Toplu Yemek Hizmetleri",
      desc: "Profesyonel ve hijyenik toplu yemek çözümleri",
      image: "https://images.unsplash.com/photo-1464347744102-11db6282f854?w=800&h=600&fit=crop",
      icon: Utensils
    }
  ];

  const menuCategories = [
    {
      title: "Ana Yemekler",
      items: ["Kuzu Tandır", "Tavuk Şiş", "Balık Izgara", "Et Sote"],
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop"
    },
    {
      title: "Mezeler",
      items: ["Humus", "Cacık", "Atom", "Ezme Çeşitleri"],
      image: "https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&h=400&fit=crop"
    },
    {
      title: "Tatlılar",
      items: ["Baklava", "Künefe", "Sütlaç", "Trileçe"],
      image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=600&h=400&fit=crop"
    }
  ];

  const gallery = [
    "https://images.unsplash.com/photo-1555244162-803834f70033?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1476224203421-9ac39bcb3327?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled
        ? 'bg-white shadow-lg'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo - Her Zaman Solda */}
            <div className="flex items-center">
              <img
                src="/logo.png"
                alt="Ereğli Catering Logo"
                className="h-16 w-auto"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className={`relative transition-colors font-medium ${activeSection === link.href
                    ? scrolled ? 'text-[#c02e2f]' : 'text-white'
                    : scrolled ? 'text-gray-700 hover:text-[#c02e2f]' : 'text-white/90 hover:text-white'
                    }`}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full ${scrolled ? 'bg-[#c02e2f]' : 'bg-white'
                      }`}></span>
                  )}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <button
              onClick={() => scrollToSection('iletisim')}
              className="hidden md:block bg-[#c02e2f] hover:bg-[#a02525] text-white px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Teklif Al
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${scrolled ? 'text-gray-900' : 'text-white'} ${mobileMenuOpen ? 'rotate-180' : ''}`}
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Dropdown Menu */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
          >
            <div className={`py-4 ${scrolled ? 'bg-white' : 'bg-black/80 backdrop-blur-sm'}`}>
              {navLinks.map((link, idx) => (
                <button
                  key={link.href}
                  onClick={() => {
                    scrollToSection(link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 transition-colors ${activeSection === link.href
                    ? scrolled ? 'text-[#c02e2f] font-semibold bg-red-50' : 'text-white font-semibold bg-white/10'
                    : scrolled ? 'text-gray-700 hover:bg-gray-50 hover:text-[#c02e2f]' : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                  style={{ animationDelay: `${idx * 50}ms` }}
                >
                  {link.name}
                </button>
              ))}
              <div className="px-4 pt-3">
                <button
                  onClick={() => {
                    scrollToSection('iletisim');
                    setMobileMenuOpen(false);
                  }}
                  className="w-full bg-[#c02e2f] hover:bg-[#a02525] text-white px-6 py-3 rounded-full transition-all transform hover:scale-105"
                >
                  Teklif Al
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Video */}
      <section id="ana-sayfa" className="relative h-screen overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/hero-video.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
        </div>

        {/* Content - Centered */}
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center px-4 sm:px-6 lg:px-8 max-w-4xl animate-[fadeInUp_1s_ease-out]">
            <h1 className="text-7xl md:text-8xl font-bold text-white mb-6 leading-tight">
              Ereğli Catering
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-12 font-light">
              Lezzetin ve Kalitenin Adresi
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => scrollToSection('menuler')}
                className="bg-[#c02e2f] hover:bg-[#a02525] text-white px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105 hover:shadow-2xl"
              >
                Menülerimizi İncele
              </button>
              <button
                onClick={() => scrollToSection('iletisim')}
                className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-10 py-4 rounded-full text-lg font-semibold transition-all transform hover:scale-105"
              >
                İletişime Geç
              </button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
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
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/90 via-red-900/50 to-transparent flex flex-col justify-end p-8 transition-all duration-500">
                  <service.icon className="w-12 h-12 text-white mb-4 transform transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="text-3xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-200 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
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

      {/* Gallery Section */}
      <section id="galeri" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">Galeri</h2>
            <p className="text-xl text-gray-600">Lezzetlerimizden kareler</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setOpen(true);
                  setIndex(idx);
                }}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group cursor-pointer"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125"
                  />
                </div>
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/40 transition-all duration-500 flex items-center justify-center">
                  <Search className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 transform scale-0 group-hover:scale-100 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CustomLightbox
        images={gallery}
        open={open}
        initialIndex={index}
        onClose={() => setOpen(false)}
      />


      {/* Contact Section */}
      <section id="iletisim" className="py-20 bg-gradient-to-br from-[#f33b3b] to-[#771c1c]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-5xl font-bold mb-6">Hemen İletişime Geçin</h2>
              <p className="text-xl mb-8 text-red-100">
                Hayalinizdeki etkinlik için detaylı bilgi alın ve özel teklifimizi keşfedin.
              </p>

              <div className="space-y-4">
                {[
                  { icon: Phone, text: "+90 555 123 45 67" },
                  { icon: Mail, text: "info@ereglicatering.com" },
                  { icon: MapPin, text: "Ereğli, Konya" }
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-lg">{item.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex space-x-4 mt-8">
                <button className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
                  <Instagram className="w-6 h-6" />
                </button>
                <button className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all transform hover:scale-110">
                  <Facebook className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Adınız Soyadınız"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 transition-all outline-none"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="E-posta Adresiniz"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 transition-all outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Telefon Numaranız"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 transition-all outline-none"
                  />
                </div>
                <div>
                  <textarea
                    rows="4"
                    placeholder="Mesajınız"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 transition-all outline-none resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Gönder
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 Ereğli Catering. Tüm hakları saklıdır.</p>
        </div>
      </footer>

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
  );
}