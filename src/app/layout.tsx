import Header from "@/components/shared/header/header";
import Footer from "@/components/shared/footer/footer";
import StyledComponentsRegistry from "./lib/registry";
import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from 'next/font/google';
import { CartProvider } from "@/components/contexts/cartContext";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Medik Pharmacy",
  description: "Sua saúde é nossa prioridade",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={montserrat.className}>
        <StyledComponentsRegistry>
          <CartProvider>
            <Header />
            {children}
            <Footer />
          </CartProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}

