import React from 'react';
import { Clock } from 'lucide-react';
const BitcoinPrice = () => {
  return <div className="flex flex-col md:flex-row justify-between items-start md:items-center bg-[#1e1145] rounded-lg p-4 md:p-6 shadow-lg">
      <div>
        <h1 className="text-2xl md:text-3xl font-bold text-white">
          Bitcoin Today
        </h1>
        <p className="text-sm md:text-base text-gray-400">
          Find out when to buy Bitcoin with Mayer Multiple and Fear & Greed
          Index
        </p>
      </div>
      <div className="mt-4 md:mt-0 text-right w-full md:w-auto">
        <h2 className="text-xl md:text-2xl font-bold text-white">
          US$ 107.873,00
        </h2>
        <p className="text-gray-400">Preço Atual do Bitcoin</p>
        <div className="flex items-center justify-end mt-2 text-xs md:text-sm text-gray-400">
          <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
          <span>Atualização automática a cada 5min</span>
        </div>
      </div>
    </div>;
};
export default BitcoinPrice;