// These styles apply to every route in the application
import "swiper/css";
import "swiper/css/navigation";
import "../public/assets/css/style.css";
import "node_modules/react-modal-video/scss/modal-video.scss";
import "react-toastify/dist/ReactToastify.css";
;
import "./globals.css";
import { LanguageProvider } from "context/Languagecontext";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <LanguageProvider>
      <html lang="en">
        <body className=" font-siliguri">
          {children}
        </body>
      </html>
    </LanguageProvider>
  );
}
