"use client";

import React, { useRef } from "react";
import Webcam from "react-webcam";

const CameraFeed = ({ onCapture }: { onCapture: (imageSrc: string) => void }) => {
  const webcamRef = useRef<Webcam | null>(null);

  const capture = () => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot();
      if (imageSrc) onCapture(imageSrc);
    }
  };

  return (
    <div className="items-center justify-center">
      <Webcam ref={webcamRef} screenshotFormat="image/jpeg" className="rounded-lg shadow-lg max-h-75 min-w-full" />
      <button onClick={capture} className="min-w-full px-4 py-2 my-4 bg-blue-500 text-white rounded-lg">
        predict your weight
      </button>
    </div>
  );
};

export default CameraFeed;
