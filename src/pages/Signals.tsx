import React from 'react';
import { Filter } from 'lucide-react';
const Momentos = () => {
  return <div className="bg-[#1e1145] rounded-lg p-6 shadow-lg min-h-[600px]">
      <div className="flex items-center gap-2 mb-6">
        <Filter className="w-5 h-5 text-purple-400" />
        <h2 className="text-xl font-bold text-white">Momentos</h2>
      </div>
      <div className="flex flex-col items-center justify-center py-12">
        <Filter className="w-16 h-16 text-gray-600 mb-4" />
        <h3 className="text-xl font-medium text-white mb-2">
          Nenhum Momento Encontrado
        </h3>
        <p className="text-gray-400 text-center">
          Configure os thresholds na aba "Analisador" para visualizar os
          momentos de compra históricos.
        </p>
      </div>
    </div>;
};
export default Momentos;