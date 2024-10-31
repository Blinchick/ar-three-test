import dynamic from "next/dynamic";
import localFont from "next/font/local";
import { useState } from "react";

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

interface ModelType {
  name: string;
  src: string;
  iosSrc: string;
}

const models: ModelType[] = [
  {
    name: "Rumba Dancing",
    src: "/models/rumba-dancing.glb",
    iosSrc: "/models/rumba-dancing.usdz",
  },
  {
    name: "Twerk Dancing",
    src: "/models/twerk-dancing.glb",
    iosSrc: "/models/twerk-dancing.usdz",
  },
  {
    name: "Breakdance",
    src: "/models/breakdance.glb",
    iosSrc: "/models/breakdance.usdz",
  },
  {
    name: "Catwalk",
    src: "/models/catwalk.glb",
    iosSrc: "/models/catwalk.usdz",
  },
  {
    name: "Hip Hop Dancing",
    src: "/models/hip-hop-dancing.glb",
    iosSrc: "/models/hip-hop-dancing.usdz",
  },
];
export default function Home() {
  const [selectedModel, setSelectedModel] = useState(models[0]);

  const handleModelChange = (model: ModelType) => {
    setSelectedModel(model);
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center min-h-screen p-8 font-sans`}
    >
      <main className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold text-center">
          Welcome to the AR Experience
        </h1>
        <div className="flex flex-wrap justify-center">
          <Model glbSrc={selectedModel.src} iosSrc={selectedModel.iosSrc} />
        </div>
        <div className="flex flex-wrap justify-center gap-2 mt-4">
          {models.map((model) => (
            <button
              key={model.name}
              onClick={() => handleModelChange(model)}
              className="p-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              {model.name}
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
