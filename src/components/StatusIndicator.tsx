import React from 'react';
import { AlertTriangle } from 'lucide-react';
const StatusIndicator = () => {
  return <div className="bg-[#1e1145] rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-2">
        <AlertTriangle className="w-5 h-5 text-orange-400" />
        <h3 className="text-orange-400 font-medium">Status Atual</h3>
      </div>
      
      <div className="mt-6">
        <div className="text-4xl font-bold text-orange-500">AGUARDAR</div>
        
      </div>
    </div>;
};
export default StatusIndicator;