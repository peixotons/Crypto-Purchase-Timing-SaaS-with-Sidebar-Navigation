import React from 'react';
import { Activity } from 'lucide-react';
const FearGreedIndex = () => {
  // Value between 0-100
  const fearGreedValue = 74;
  // Calculate progress bar width
  const progressWidth = `${fearGreedValue}%`;
  return <div className="bg-[#1e1145] rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <Activity className="w-5 h-5 text-purple-400" />
        <h3 className="text-purple-400 font-medium">Fear & Greed Index</h3>
      </div>
      
      <div className="mt-6">
        <div className="flex items-center gap-3">
          <div className="text-4xl font-bold text-white">74</div>
          <span className="bg-green-500 text-white text-xs px-2 py-1 rounded">
            Ganância
          </span>
        </div>
        <div className="w-full h-2 bg-gray-700 rounded-full mt-4">
          <div className="h-2 bg-green-500 rounded-full" style={{
          width: progressWidth
        }}></div>
        </div>
      </div>
    </div>;
};
export default FearGreedIndex;