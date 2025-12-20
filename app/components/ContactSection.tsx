import { Phone, Mail, MapPin, Instagram, Facebook } from 'lucide-react';

export default function ContactSection() {
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
                        {/* <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full flex items-center justify-center transition-all transform hover:scale-110 shadow-lg">
                            <Facebook className="w-6 h-6 text-white" />
                        </a> */}
                    </div>
                </div>

            </div>
        </section>
    );
}
