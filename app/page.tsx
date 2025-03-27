"use client";

import { useState } from "react";
import CameraFeed from "@/components/CameraFeed";
import WeightResult from "@/components/WeightResult";

export default function Home() {
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-3xl font-bold text-center mb-8">Useless Weight Predictor</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
        <div className="flex justify-center items-center bg-gray-200 p-4 rounded-lg shadow-lg">
          <CameraFeed onCapture={setImageSrc} />
        </div>

        <div className="flex justify-center items-center bg-gray-200 p-4 rounded-lg shadow-lg">
          <WeightResult imageSrc={imageSrc} />
        </div>
      </div>
    </main>
  );
}