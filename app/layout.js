import "./globals.css";
import Script from "next/script";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
// const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://best-movers.in"),
  title: {
    default: "Best Packers & Movers | Professional Relocation Services in Kochi",
    template: "%s | Best Packers & Movers",
  },
  description:
    "Top-rated packers and movers in Kochi, Kerala. We provide professional home relocation, office shifting, car transportation, and international moving services with safety and care.",
  keywords: [
    "packers and movers kochi",
    "best packers and movers in kerala",
    "house shifting services kochi",
    "office relocation kochi",
    "car transportation kochi",
    "international movers india",
    "professional packing and moving",
    "affordable movers kochi",
  ],
  authors: [{ name: "Best Packers & Movers" }],
  creator: "Best Packers & Movers",
  publisher: "Best Packers & Movers",
  formatDetection: {
    email: false,
    address: true,
    telephone: true,
  },
  openGraph: {
    title: "Best Packers & Movers | Professional Relocation Services",
    description:
      "Safe, reliable, and affordable packing and moving services in Kochi and across India.",
    url: "https://best-movers.in",
    siteName: "Best Packers & Movers",
    images: [
      {
        url: "/assets/banner.webp",
        width: 1200,
        height: 630,
        alt: "Best Packers & Movers Banner",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Packers & Movers | Professional Relocation Services",
    description:
      "Safe, reliable, and affordable packing and moving services in Kochi and across India.",
    images: ["/assets/banner.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // User should replace this
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        <link rel="canonical" href="https://best-movers.in" />
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              name: "Best Packers & Movers",
              url: "https://best-movers.in",
              logo: "https://best-movers.in/assets/best-packers-logo.png",
              image: "https://best-movers.in/assets/banner.webp",
              description:
                "Professional packing and moving services across India, specializing in home and office relocation.",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Kochi",
                addressRegion: "Kerala",
                addressCountry: "IN",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "9.9312",
                longitude: "76.2673",
              },
              telephone: "+919562763030",
              priceRange: "$$",
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "08:00",
                  closes: "20:00",
                },
              ],
              areaServed: {
                "@type": "Country",
                name: "India",
              },
              sameAs: [
                "https://www.facebook.com/bestpackersmovers",
                "https://www.instagram.com/bestpackersmovers",
              ],
            }),
          }}
        />
      </head>

      <body className="antialiased">
        {/* Google Analytics */}
        {/* {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        )} */}

        {/* Mobile Action Bar */}
        {/* <MobileActionBar /> */}

        <Navbar logo="/assets/best-packers-logo.png" />

        <main className="w-full ">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
