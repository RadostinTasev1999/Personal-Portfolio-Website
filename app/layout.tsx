import '@/components/ui/globals.css';
import AppHeader from '../components/homepage/header/header';
import AppFooter from '../components/homepage/footer/footer';
import { inter } from "../components/ui/fonts";
import 'dotenv/config';
// import {navigationLinks} from '@/app/lib/placeholder-data';
import { navigationLinks } from '@/lib/placeholder-data';
import { logo } from '@/lib/placeholder-data';
import { socialLinks } from '@/lib/placeholder-data';


export default function RootLayout({ children }: LayoutProps<"/">) {
  
  return (
    <html
      lang="en"
      className='scroll-smooth'
    >
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <body className={`${inter.className} antialiased`}>
        <AppHeader 
            navigationLinks={navigationLinks}
            logo={logo}
          />
          <main className="min-h-screen bg-[url(/background2.png)] bg-cover bg-center bg-fixed">
            {children}
          </main>
        <AppFooter 
          socialLinks={socialLinks}
        />
      </body>
    </html>
  );
}
// -> By adding the Inter to the <body> element, the font will be applied throghout the application
// -> antialiased - Tailwind css class which smooths out the font
