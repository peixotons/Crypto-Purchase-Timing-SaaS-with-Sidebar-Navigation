import React from 'react';
import { LineChart } from 'lucide-react';
const MayerMultiple = () => {
  return <div className="bg-[#1e1145] rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <LineChart className="w-5 h-5 text-blue-400" />
        <h3 className="text-blue-400 font-medium">Mayer Multiple</h3>
      </div>
      
      <div className="mt-6">
        <div className="text-4xl font-bold text-white">1.12</div>
        
      </div>
    </div>;
};
export default MayerMultiple;