import "./globals.css";
import { Inter } from "next/font/google";
import  ThemeProvider  from "@/components/theme-provider";
import { AuthProvider } from "@/contexts/auth-context";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { DarkModeProvider } from "@/contexts/DarkModeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blood Connect",
  description: "A platform for blood donation and supply",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <DarkModeProvider>
          <AuthProvider>
            <div className="flex flex-col min-h-screen">
              <Header />
              <main className="flex-grow">{children}</main>
              <Footer />
            </div>
            </AuthProvider>
            </DarkModeProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
