import React, { useState, useEffect } from "react";

const DNAMolarCalculator = () => {
  const [mass, setMass] = useState(0);
  const [basePairCount, setBasePairCount] = useState(1);
  const [molar, setMolar] = useState(0);

  useEffect(() => {
    const moles = calculateMoles(mass, basePairCount);
    setMolar(moles);
  }, [mass, basePairCount]);

  function calculateMoles(mass, basePairCount) {
    const gPerMol = 660;
    const g = mass * Math.pow(10, -9);
    const basePairMolWeight = gPerMol * basePairCount;
    const moles = g / basePairMolWeight;
    return moles * Math.pow(10, 12); // Convert to picomoles
  }

  return (
    <div className="flex flex-col space-y-3 max-w-lg">
      <label className="flex flex-row justify-between items-center">
        <span>質量 (Mass) [ng]:</span>
        <input
          type="number"
          value={mass}
          onChange={(e) => setMass(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 text-right"
        />
      </label>
      <label className="flex flex-row justify-between items-center">
        <span>塩基数 (Base Pair Count) [bp]:</span>
        <input
          type="number"
          value={basePairCount}
          onChange={(e) => setBasePairCount(Number(e.target.value))}
          className="p-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-300 text-right"
        />
      </label>
      <p className="text-xl font-semibold text-right">
        {molar.toFixed(3)} pmol
      </p>
    </div>
  );
};

export default DNAMolarCalculator;
