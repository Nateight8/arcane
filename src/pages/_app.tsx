import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bebas_Neue } from "@next/font/google";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--bebas",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${bebas.variable}`}>
      <Component {...pageProps} />
    </main>
  );
}
