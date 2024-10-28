import localFont from "next/font/local";

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
        <model-viewer
          src="/models/po_kung_fu_panda_chi_master.glb"
          ar
          ar-modes="webxr"
          style={{ width: "100%", height: "500px" }}
        >
          <button slot="ar-button" id="enter-ar">
            Enter AR
          </button>
        </model-viewer>
      </main>
    </div>
  );
}
