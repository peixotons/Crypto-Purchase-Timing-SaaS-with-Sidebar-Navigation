import React from 'react';
import BitcoinPrice from './BitcoinPrice';
import MayerMultiple from './MayerMultiple';
import FearGreedIndex from './FearGreedIndex';
import StatusIndicator from './StatusIndicator';
import BitcoinChart from './BitcoinChart';
const Dashboard = () => {
  return <div className="space-y-6">
      <BitcoinPrice />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <MayerMultiple />
        <FearGreedIndex />
        <StatusIndicator />
      </div>
      <BitcoinChart />
    </div>;
};
export default Dashboard;