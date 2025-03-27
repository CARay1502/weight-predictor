"use client";

import React, { useEffect, useState } from "react";

const WeightResult = ({ imageSrc }: { imageSrc: string | null }) => {
  const [fakeWeight, setFakeWeight] = useState<number | null>(null);
  const [weightClass, setWeightClass] = useState<string | null>(null);

  useEffect(() => {
    if (imageSrc) {
      setFakeWeight(null);

      setTimeout(() => {
        const randomWeight = Math.floor(Math.random() * (1000 - 20 + 1)) + 20;
        setFakeWeight(randomWeight);

        let category = "";
        if (randomWeight < 100) {
            category = "Baby Gronk Class";
        } else if (randomWeight < 200) {
            category = "Kai Cenat Class";
        } else if (randomWeight < 300) {
            category = "Taylor Swift class"
        } else if (randomWeight < 450) {
            category = "Lizzo Class" 
        } else if (randomWeight <600) {
            category = "Caseoh Titan Class"
        } else if (randomWeight <800) {
            category = "Your Mom God Tier Class"
        }

        setWeightClass(category)

      }, 2000);
    } 
  }, [imageSrc]);

  if (!imageSrc) return null;

  return (
    <div className="text-center mt-4 items-center justify-center">
      <img src={imageSrc} alt="weight picture" className="rounded-lg shadow-lg max-h-75 min-w-full mb-4" />
      <p className="text-xl font-bold text-black">Predicted Weight: {fakeWeight} lbs</p>
      <p className="text-xl font-bold text-black mb-4">Weight Class: {weightClass} </p>
    </div>
  );
};

export default WeightResult;
