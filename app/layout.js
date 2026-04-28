import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
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
    "Top-rated packers and movers in Kochi, Kerala. We provide professional home shifting services, household relocation, and interstate moving from Kerala to anywhere in India with safety and care.",
  keywords: [
    "packers and movers kochi",
    "best packers and movers in kochi",
    "packers and movers near me",
    "home shifting services",
    "household relocation services",
    "relocation services company",
    "interstate movers from kerala",
    "affordable home shifting service",
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

        <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-3 md:bottom-24 md:right-8 md:flex-row md:items-center">
          <a
            href="tel:+919562763030"
            className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-sky-600 text-white shadow-lg shadow-sky-600/30 transition hover:bg-sky-700"
            aria-label="Call Best Packers and Movers"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21 11.36 11.36 0 003.55.57 1 1 0 011 1V20a1 1 0 01-1 1A16 16 0 014 5a1 1 0 011-1h3.5a1 1 0 011 1 11.36 11.36 0 00.57 3.55 1 1 0 01-.21 1.11l-2.24 2.13z" />
            </svg>
          </a>
          <a
            href="https://wa.me/919562763030?text=Hello%20Best%20Packers%20and%20Movers,%20I%20need%20help%20with%20a%20move."
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-600"
            aria-label="Chat on WhatsApp with Best Packers and Movers"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-6 w-6"
              aria-hidden="true"
            >
              <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 0 5.37 0 12a11.98 11.98 0 001.64 6.15L0 24l5.96-1.57A11.94 11.94 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.19-3.48-8.52zm-8.52 18.01c-2.12 0-4.19-.55-5.99-1.59l-.43-.26-3.54.94.95-3.46-.28-.44A9.93 9.93 0 012.07 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.53-6.78c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15s-.77.97-.94 1.17c-.17.2-.34.22-.63.08-.3-.15-1.27-.47-2.42-1.49-.9-.8-1.51-1.78-1.69-2.08-.17-.3-.02-.46.13-.61.14-.14.3-.34.45-.51.15-.17.2-.28.3-.47.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.23-.24-.58-.48-.5-.66-.51-.17 0-.37-.01-.56-.01s-.53.08-.8.38c-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.06 2.9 1.2 3.1.14.2 2.08 3.2 5.03 4.49.7.3 1.24.48 1.66.62.7.23 1.34.2 1.85.12.56-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.18-1.41-.07-.13-.26-.2-.55-.35z" />
            </svg>
          </a>
        </div>
      </body>
    </html>
  );
}
