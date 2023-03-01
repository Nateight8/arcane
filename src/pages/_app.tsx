import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Bebas_Neue } from "@next/font/google";
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
// import { Bebas_Neue } from "/Bebe_Neue/BebasNeue-Regular.ttf";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--bebas",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${bebas.variable}`}>
      <Component {...pageProps} />
      {/* <Suspense fallback={null}>
        <Canvas
          gl={{ logarithmicDepthBuffer: true, antialias: false }}
          dpr={[1, 1.5]}
        >
          <Component {...pageProps} />
        </Canvas>
      </Suspense> */}
    </main>
  );
}
