import type { Metadata } from "next";
import "../globals.css";
import Header from "@/components/header";
import { karla } from "../font";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import WhatsappBtn from "@/components/whatsapp-btn";

export const metadata: Metadata = {
  metadataBase: new URL("https://imsaasia.com/"),
  title: "IMS Systems Pte Ltd",
  description:
    "Intelligent data filtering, data reduction algorithms, IIoT edge computing, Real-time control, and Monitoring, Portable Data Loggers, Accelerometers, Tilt Sensors, SMART Sensors, ASC Sensors, Gantner Instruments",
  openGraph: {
    siteName: "IMS Systems Pte Ltd",
    title: "IMS Systems Pte Ltd",
    url: "https://imsaasia.com/",
    description:
      "Intelligent data filtering, data reduction algorithms, IIoT edge computing, Real-time control, and Monitoring, Portable Data Loggers, Accelerometers, Tilt Sensors, SMART Sensors, ASC Sensors, Gantner Instruments",
    type: "website",
    locale: "en_SG",
  },
  twitter: {
    card: "summary",
    title: "IMS Systems Pte Ltd",
    description: "Total Solutions Provider",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${karla.className} dark:bg-gray-900`}>
        <ThemeContextProvider>
          <Header />
          {children}
          <Footer />
          <WhatsappBtn />
          <ThemeSwitch />
        </ThemeContextProvider>
      </body>
    </html>
  );
}
