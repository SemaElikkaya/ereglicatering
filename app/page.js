'use client';
import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, Instagram, Facebook, Clock, Users, Sparkles, Award, Utensils, Search, HandPlatter } from 'lucide-react';
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

      // Scroll yapılınca menü kapansın
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }

      // Active section detection
      const sections = ['hakkimizda', 'hizmetler', 'menuler', 'galeri', 'iletisim'];
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

    // Menü dışına tıklayınca kapansın
    const handleClickOutside = (event) => {
      const target = event.target;
      if (mobileMenuOpen && !target.closest('nav')) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
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
    "./image/gallery1.jpg",
    "./image/gallery2.jpeg",
    "./image/gallery3.jpeg",
    "./image/gallery4.jpeg",
    "./image/gallery5.jpeg",
    "./image/gallery6.jpeg",
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-500 ${scrolled || mobileMenuOpen
        ? 'bg-white shadow-lg'
        : 'bg-transparent'
        }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3">
            {/* Logo - Her Zaman Solda */}
            <div className="flex items-center cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
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
                  className={`relative transition-colors font-medium active:scale-95 ${activeSection === link.href
                    ? (scrolled || mobileMenuOpen) ? 'text-[#c02e2f]' : 'text-white'
                    : (scrolled || mobileMenuOpen) ? 'text-gray-700 hover:text-[#c02e2f] active:text-[#c02e2f]' : 'text-white/90 hover:text-white active:text-white'
                    }`}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <span className={`absolute -bottom-1 left-0 w-full h-0.5 rounded-full ${(scrolled || mobileMenuOpen) ? 'bg-[#c02e2f]' : 'bg-white'
                      }`}></span>
                  )}
                </button>
              ))}
            </div>

            {/* Desktop CTA Button */}
            <button
              onClick={() => scrollToSection('iletisim')}
              className="hidden md:block bg-[#c02e2f] hover:bg-[#a02525] active:bg-[#8a1f1f] active:scale-95 text-white px-6 py-2 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Teklif Al
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg transition-colors"
            >
              <svg
                className={`w-6 h-6 transition-transform duration-300 ${(scrolled || mobileMenuOpen) ? 'text-gray-900' : 'text-white'
                  } ${mobileMenuOpen ? 'rotate-180' : ''}`}
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
            <div className="py-4 bg-white">
              {navLinks.map((link, idx) => (
                <button
                  key={link.href}
                  onClick={() => {
                    scrollToSection(link.href);
                    setMobileMenuOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 transition-colors ${activeSection === link.href
                    ? 'text-[#c02e2f] font-semibold bg-red-50'
                    : 'text-gray-700 hover:bg-gray-50 hover:text-[#c02e2f]'
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
            preload="metadata"
            poster="./image/hero-poster.jpeg"
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
                  <HandPlatter className="w-12 h-12 text-white mb-4 transform transition-transform duration-500 group-hover:scale-110" />
                  <h3 className="text-2xl font-bold text-white mb-2 transform transition-transform duration-500 group-hover:-translate-y-2">
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {gallery.map((img, idx) => (
              <div
                key={idx}
                onClick={() => {
                  setOpen(true);
                  setIndex(idx);
                }}
                className="relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl active:shadow-md transition-all duration-500 group cursor-pointer"
              >
                <div className="aspect-[4/3]">
                  <img
                    src={img}
                    alt={`Gallery ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-125 group-active:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-red-600/0 group-hover:bg-red-600/40 group-active:bg-red-600/60 transition-all duration-500 flex items-center justify-center">
                  <Search className="w-12 h-12 text-white opacity-0 group-hover:opacity-100 group-active:opacity-100 transform scale-0 group-hover:scale-100 group-active:scale-90 transition-all duration-500" />
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


      {/* Contact Section - Restaurant Style */}
      <section id="iletisim" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-4">İletişime Geçin</h2>
            <p className="text-xl text-gray-600">
              Size en uygun yöntemle ulaşın, hemen teklif alın
            </p>
          </div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">

            {/* Telefon */}
            <a href="tel:+905459529315" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2 block">
              <span className="w-16 h-16 bg-gradient-to-br from-[#c02e2f] to-[#a02525] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Phone className="w-8 h-8 text-white" />
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
              <p className="text-[#c02e2f] font-medium">0545 952 93 15</p>
              <p className="text-sm text-gray-500 mt-2">Hemen arayın</p>
            </a>

            {/* WhatsApp */}
            {/* <a href="https://wa.me/905459529315?text=Merhaba, catering hizmeti hakkında bilgi almak istiyorum." target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2 block">
              <span className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-green-600 font-medium">Mesaj Gönder</p>
              <p className="text-sm text-gray-500 mt-2">Hızlı yanıt</p>
            </a> */}

            {/* E-posta */}
            <a href="mailto:info@ereglicatering.com" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2 block">
              <span className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Mail className="w-8 h-8 text-white" />
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">E-posta</h3>
              <p className="text-blue-600 font-medium text-sm">info@ereglicatering.com</p>
              <p className="text-sm text-gray-500 mt-2">Mail gönderin</p>
            </a>

            {/* Konum */}
            <a href="https://maps.app.goo.gl/U1YSsWHe5xcGynQH9" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2 block">
              <span className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <MapPin className="w-8 h-8 text-white" />
              </span>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Konum</h3>
              <p className="text-orange-600 font-medium">Ereğli Catering</p>
              <p className="text-sm text-gray-500 mt-2">Haritada görüntüle</p>
            </a>

          </div>

          {/* Form Section */}
          <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Teklif İsteyin</h3>
            <p className="text-gray-600 mb-8 text-center">Formu doldurun, size ulaşalım</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
                <input type="text" placeholder="Adınız Soyadınız" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:border-[#c02e2f] focus:ring-2 focus:ring-[#c02e2f]/20 transition-all outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                <input type="tel" placeholder="0543 XXX XX XX" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:border-[#c02e2f] focus:ring-2 focus:ring-[#c02e2f]/20 transition-all outline-none" />
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
              <input type="email" placeholder="ornek@email.com" className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:border-[#c02e2f] focus:ring-2 focus:ring-[#c02e2f]/20 transition-all outline-none" />
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Etkinlik Türü</label>
              <select className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:border-[#c02e2f] focus:ring-2 focus:ring-[#c02e2f]/20 transition-all outline-none">
                <option>Düğün</option>
                <option>Nişan</option>
                <option>Kurumsal Etkinlik</option>
                <option>Diğer</option>
              </select>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
              <textarea rows={4} placeholder="Etkinliğiniz hakkında detayları paylaşın..." className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:border-[#c02e2f] focus:ring-2 focus:ring-[#c02e2f]/20 transition-all outline-none resize-none"></textarea>
            </div>

            <button type="button" className="w-full mt-6 bg-gradient-to-r from-[#c02e2f] to-[#a02525] hover:from-[#a02525] hover:to-[#8a1f1f] text-white py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl">
              Teklif İste
            </button>
          </div>

          {/* Social Media */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Sosyal medyadan takip edin</p>
            <div className="flex justify-center space-x-4">
              <a href="https://www.instagram.com/ereglicatering/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 active:from-pink-700 active:to-purple-800 rounded-full flex items-center justify-center transition-all transform hover:scale-110 active:scale-100 shadow-lg">
                <Instagram className="w-6 h-6 text-white" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg">
                <Facebook className="w-6 h-6 text-white" />
              </a>
            </div>
          </div>

        </div>
      </section>
      {/* WhatsApp Floating Button - Sol Alt Köşe */}
      <a href="https://wa.me/905459529315?text=Merhaba, catering hizmeti hakkında bilgi almak istiyorum."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >
        <div className="relative">
          {/* Ana Buton */}
          <div className="w-16 h-16 bg-green-500 hover:bg-green-600 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 animate-pulse">
            <svg className="w-9 h-9 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>

          {/* Bildirim Badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>

          {/* Hover Tooltip */}
          <div className="absolute left-20 bottom-0 bg-gray-900 text-white px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
            Hızlı Teklif Al 💬
            <div className="absolute left-0 top-1/2 transform -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
          </div>
        </div>
      </a>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2025 Ereğli Catering. Tüm hakları saklıdır.</p>
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