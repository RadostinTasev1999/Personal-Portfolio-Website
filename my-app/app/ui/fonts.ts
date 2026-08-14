//! -> This file will be used to keep the fonts that will be used throughout the application
/*
    Next.js automatically optimizes fonts in the application when using next/font module
    -> it downloads font files at build time and hosts them with other static assets
    -> whenever user visits the application, there are no additional network requests for fonts for which
       would impact performance
*/

import { Inter,Montserrat } from "next/font/google";

export const inter = Inter({subsets: ['latin']})
export const montserrat = Montserrat({subsets: ['latin']})