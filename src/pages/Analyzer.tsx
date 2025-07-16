import React from 'react';
import { Search } from 'lucide-react';
const Analyzer = () => {
  return <div className="bg-[#1e1145] rounded-lg p-6 shadow-lg min-h-[600px]">
      <div className="flex items-center gap-2 mb-4">
        <Search className="w-5 h-5 text-blue-400" />
        <h2 className="text-xl font-bold text-white">
          Definir Thresholds de Análise
        </h2>
      </div>
      <p className="text-gray-400 mb-6">
        Configure os valores limite para identificar sinais de compra históricos
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label className="block text-gray-400 mb-2">
            Mayer Multiple (máximo)
          </label>
          <input type="text" placeholder="Ex: 0.90" className="w-full bg-[#2d1a5a] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <p className="text-xs text-gray-400 mt-2">
            Valores abaixo de 1.0 indicam Bitcoin negociado abaixo da tendência
            histórica
          </p>
        </div>
        <div>
          <label className="block text-gray-400 mb-2">
            Fear & Greed Index (máximo)
          </label>
          <input type="text" placeholder="Ex: 25" className="w-full bg-[#2d1a5a] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
          <p className="text-xs text-gray-400 mt-2">
            Valores baixos (0-25) indicam medo extremo no mercado
          </p>
        </div>
      </div>
      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-md flex items-center justify-center gap-2 transition-colors">
        <Search className="w-5 h-5" />
        Analisar Histórico
      </button>
      <button className="w-full mt-4 border border-gray-600 text-gray-400 font-medium py-3 rounded-md hover:bg-[#2d1a5a] transition-colors">
        Limpar
      </button>
    </div>;
};
export default Analyzer;