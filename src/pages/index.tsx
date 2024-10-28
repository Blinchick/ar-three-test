import { useEffect } from "react";
import dynamic from "next/dynamic";
import localFont from "next/font/local";

const ModelViewer = dynamic(
  () =>
    import("@google/model-viewer").then((mod) => {
      console.log(mod);
      return mod.default;
    }),
  {
    ssr: false,
  }
);

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
        <ModelViewer
          src="/models/po_kung_fu_panda_chi_master.glb"
          ar
          style={{ width: "100%", height: "500px" }}
        />
      </main>
    </div>
  );
}
