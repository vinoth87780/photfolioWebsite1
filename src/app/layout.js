import { Inter } from "next/font/google";
import "./globals.css";

import TransitionProvider from "./Components/transitionProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "portpolio page",
  description: "best animated portpolio page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
