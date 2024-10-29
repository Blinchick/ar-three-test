import dynamic from "next/dynamic";
import localFont from "next/font/local";

const Model = dynamic(() => import("@/components/Model"), { ssr: false });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center min-h-screen p-8 font-sans`}
    >
      <main className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold text-center">
          Welcome to the AR Experience
        </h1>

        <Model
          glbSrc="/models/ImageToStl.com_hip-hop-dancing.glb"
          iosSrc="/models/hip-hop-dancing.usdz"
        />
        <Model
          glbSrc="/models/rumba-dancing.glb"
          iosSrc="/models/rumba-dancing.usdz"
        />
      </main>
    </div>
  );
}
