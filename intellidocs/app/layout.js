import {Exo_2 } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { ClerkProvider } from "@clerk/nextjs";
import {shadcn} from "@clerk/themes";



export const metadata = {
  title: "IntelliDOCs",
  description: "AI-powered document analysis and insights",
};

const Exo_2Font = Exo_2({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-rubik",
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
     appearence={{
      baseTheme: shadcn
     }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={Exo_2Font.className}
      >
        <Provider>
        {children}
        </Provider>
      </body>
    </html>
    </ClerkProvider>
  );
}
