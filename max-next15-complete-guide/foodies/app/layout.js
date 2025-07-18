import Header from "@/components/main-header/header";
import "./globals.css";

export const metadata = {
  title: "Foodies App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
