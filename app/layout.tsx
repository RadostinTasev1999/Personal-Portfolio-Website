import './ui/globals.css';
import AppHeader from './ui/header/Header';
import AppFooter from './ui/footer/Footer';
import { inter } from "./ui/fonts";
import 'dotenv/config';


export default function RootLayout({ children }: LayoutProps<"/">) {
  
  return (
    <html
      lang="en"
      className='scroll-smooth'
    >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${inter.className} antialiased`}>
        <AppHeader />
          <main className="min-h-screen bg-[url(/background2.png)] bg-cover bg-center bg-fixed">
            {children}
          </main>
        <AppFooter />
      </body>
    </html>
  );
}
// -> By adding the Inter to the <body> element, the font will be applied throghout the application
// -> antialiased - Tailwind css class which smooths out the font
