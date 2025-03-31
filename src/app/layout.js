import localFont from "next/font/local";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});
// ${geistSans.variable} ${geistMono.variable} antialiased 

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata = {
  title: "Blog App",
  description: "The best blog app!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              <div className="wrapper">
                <Navbar/>
                {children}
                <Footer/>
              </div>
            </div>
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
