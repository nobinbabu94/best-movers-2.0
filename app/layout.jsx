import "./globals.css";
import Script from "next/script";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
// const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

export const metadata = {
  title: {
    default: "ABC Packers & Movers",
    template: "%s | ABC Packers & Movers",
  },
  description: "Professional packing and moving services across India.",
  metadataBase: new URL("https://yourdomain.com"),
};

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MovingCompany",
              name: "ABC Packers & Movers",
              areaServed: "India",
              telephone: "+919562763030",
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
