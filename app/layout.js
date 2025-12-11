import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: 'Ereğli Catering | Marmara Ereğli Profesyonel Catering Hizmeti',
  description: 'Marmaraereğlisi`nin köklü catering firması.Düğün, nişan, kurumsal etkinlikler için profesyonel yemek hizmeti. 15 yıllık deneyim, kusursuz sunum.',
  keywords: 'marmaraereğlisi catering, tekirdağ catering, ereğli catering, ereğli düğün yemeği, ereğli nişan organizasyonu, kurumsal catering',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
