import { Metadata } from "next";
import "./globals.css";
import Navbar from "../components/NavBar";
import AuthProvider from "../components/AuthProvider";
import CustomStyles from "../providers/ThemeProvider"; // Make sure this is named correctly

export const metadata: Metadata = {
  title: "MojMalyInsta",
  description: "maly lepsi ako velky",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="sk">
      <body>
        <AuthProvider>
          <CustomStyles>
            <div style={{ minHeight: '95vh', display: 'flex', flexDirection: 'column' }}>
              <main style={{ flexGrow: 1 }}>
                {children}
              </main>
              <Navbar /> {/* No need to pass toggleDarkMode function */}
            </div>
          </CustomStyles>
        </AuthProvider>
      </body>
    </html>
  );
}
