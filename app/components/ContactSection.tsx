'use client';

import { Phone, Mail, MapPin, Instagram } from 'lucide-react';
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactSection() {
    const formRef = useRef(null);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const sendEmail = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setSuccess(false);

        try {
            await emailjs.sendForm(
                'service_1wrtp7u',     // EmailJS'den alacaksın
                'template_rsx4xhg',    // EmailJS'den alacaksın
                formRef.current,
                'dLNnyDvUHr1waKZQk'      // EmailJS'den alacaksın
            );
            
            setSuccess(true);
            formRef.current.reset();
            
            // 5 saniye sonra success mesajını kaldır
            setTimeout(() => setSuccess(false), 5000);
        } catch (err) {
            setError('Bir hata oluştu. Lütfen tekrar deneyin veya doğrudan arayın.');
            console.error('EmailJS Error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
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
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-16">

                    {/* Telefon */}
                    <a href="tel:+905459529315" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2 block">
                        <span className="w-16 h-16 bg-gradient-to-br from-[#c02e2f] to-[#a02525] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <Phone className="w-8 h-8 text-white" />
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Telefon</h3>
                        <p className="text-[#c02e2f] font-medium">0545 952 93 15</p>
                        <p className="text-sm text-gray-500 mt-2">Hemen arayın</p>
                    </a>

                    {/* E-posta */}
                    <a href="mailto:ereglicatering@gmail.com" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2 block">
                        <span className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <Mail className="w-8 h-8 text-white" />
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">E-posta</h3>
                        <p className="text-blue-600 font-medium text-sm">ereglicatering@gmail.com</p>
                        <p className="text-sm text-gray-500 mt-2">Mail gönderin</p>
                    </a>

                    {/* Konum */}
                    <a href="https://maps.app.goo.gl/U1YSsWHe5xcGynQH9" target="_blank" rel="noopener noreferrer" className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transition-all duration-300 transform hover:-translate-y-2 block">
                        <span className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                            <MapPin className="w-8 h-8 text-white" />
                        </span>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Konum</h3>
                        <p className="text-orange-600 font-medium">Cedit Ali Paşa, Yaren Sk. No:8, 59740 Marmaraereğlisi/Tekirdağ</p>
                        <p className="text-sm text-gray-500 mt-2">Haritada görüntüle</p>
                    </a>

                </div>

                {/* Form Section */}
                <div className="max-w-3xl mx-auto bg-white rounded-3xl shadow-2xl p-8 md:p-12">
                    <h3 className="text-3xl font-bold text-gray-900 mb-2 text-center">Teklif İsteyin</h3>
                    <p className="text-gray-600 mb-8 text-center">Formu doldurun, size ulaşalım</p>

                    {/* Success Message */}
                    {success && (
                        <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
                            <p className="text-green-800 text-center font-semibold">
                                ✓ Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.
                            </p>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
                            <p className="text-red-800 text-center">{error}</p>
                        </div>
                    )}

                    <form ref={formRef} onSubmit={sendEmail}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Ad Soyad</label>
                                <input 
                                    type="text" 
                                    name="from_name"
                                    placeholder="Adınız Soyadınız" 
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:border-[#c02e2f] focus:ring-2 focus:ring-[#c02e2f]/20 transition-all outline-none" 
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Telefon</label>
                                <input 
                                    type="tel" 
                                    name="phone"
                                    placeholder="0543 XXX XX XX" 
                                    required
                                    className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:border-[#c02e2f] focus:ring-2 focus:ring-[#c02e2f]/20 transition-all outline-none" 
                                />
                            </div>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">E-posta</label>
                            <input 
                                type="email" 
                                name="from_email"
                                placeholder="ornek@email.com" 
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:border-[#c02e2f] focus:ring-2 focus:ring-[#c02e2f]/20 transition-all outline-none" 
                            />
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Etkinlik Türü</label>
                            <select 
                                name="event_type"
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:border-[#c02e2f] focus:ring-2 focus:ring-[#c02e2f]/20 transition-all outline-none"
                            >
                                <option>Düğün</option>
                                <option>Nişan</option>
                                <option>Kurumsal Etkinlik</option>
                                <option>Diğer</option>
                            </select>
                        </div>

                        <div className="mt-6">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Mesajınız</label>
                            <textarea 
                                rows={4} 
                                name="message"
                                placeholder="Etkinliğiniz hakkında detayları paylaşın..." 
                                required
                                className="w-full px-4 py-3 rounded-xl border border-gray-300 text-black focus:border-[#c02e2f] focus:ring-2 focus:ring-[#c02e2f]/20 transition-all outline-none resize-none"
                            ></textarea>
                        </div>

                        <button 
                            type="submit" 
                            disabled={loading}
                            className="w-full mt-6 bg-gradient-to-r from-[#c02e2f] to-[#a02525] hover:from-[#a02525] hover:to-[#8a1f1f] text-white py-4 rounded-xl font-semibold transition-all transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                        >
                            {loading ? 'Gönderiliyor...' : 'Teklif İste'}
                        </button>
                    </form>
                </div>

                {/* Social Media */}
                <div className="mt-12 text-center">
                    <p className="text-gray-600 mb-4">Sosyal medyadan takip edin</p>
                    <div className="flex justify-center space-x-4">
                        <a href="https://www.instagram.com/ereglicatering/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 active:from-pink-700 active:to-purple-800 rounded-full flex items-center justify-center transition-all transform hover:scale-110 active:scale-100 shadow-lg">
                            <Instagram className="w-6 h-6 text-white" />
                        </a>
                    </div>
                </div>

            </div>
        </section>
    );
}