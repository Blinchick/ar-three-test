import { useState } from 'react';
import localFont from 'next/font/local';
import ARScene from '../components/ARscene';
import { ThreeEvent } from '@react-three/fiber';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});

const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export default function Home() {
  const [modelVisible, setModelVisible] = useState(false);
  const [modelPosition, setModelPosition] = useState<[number, number, number]>([0, 0, 0]);

  const handlePlaceModel = () => {
    setModelVisible(true);
  };

  const handlePlaneClick = (event: ThreeEvent<MouseEvent>) => {
    if (event.intersections.length > 0) {
      const { x, y, z } = event.intersections[0].point;
      setModelPosition([x, y, z]);
    }
  };

  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col items-center min-h-screen p-8 font-sans`}
    >
      <main className="flex flex-col items-center gap-4">
        <h1 className="text-2xl font-semibold text-center">Welcome to the AR Experience</h1>
        
        <button
          onClick={handlePlaceModel}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Place Model
        </button>
        
        <div className="w-full h-[400px] mt-10 border border-gray-300 rounded-lg">
          <ARScene modelVisible={modelVisible} modelPosition={modelPosition} onPlaneClick={handlePlaneClick} />
        </div>
      </main>
    </div>
  );
}
