import './ui/globals.css'
import AppHeader from "./ui/header/header";
import AppFooter from "./ui/footer/footer";
import { inter } from "./ui/fonts";


export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
    >
      <body className={`${inter.className} antialiased`}>
        <AppHeader />
        {children}
        <AppFooter />
      </body>
    </html>
  );
}
// -> By adding the Inter to the <body> element, the font will be applied throghout the application
// -> antialiased - Tailwind css class which smooths out the font
