import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import WhatsAppButton from "../components/WhatsappButton";

export default function IletisimPage() {
    return (
        <main >
            <Navbar activeSection="iletisim" variant="light"/>
            <div className="pt-20">
                <ContactSection />
            </div>
            <WhatsAppButton />
            <Footer />
        </main>
    );
}
