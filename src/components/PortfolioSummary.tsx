import React from 'react';
import { useStockContext } from '@/context/StockContext';

const PortfolioSummary: React.FC = () => {
  const { stocks } = useStockContext();

  const calculateTotalNAV = () => {
    return stocks.reduce((total, stock) => total + stock.currentPrice * stock.quantity, 0);
  };

  const calculateTotalReturn = () => {
    const totalCost = stocks.reduce((total, stock) => total + stock.purchasePrice * stock.quantity, 0);
    const totalValue = calculateTotalNAV();
    return ((totalValue - totalCost) / totalCost) * 100;
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Portfolio Summary</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="text-gray-600">Total NAV</p>
          <p className="text-3xl font-bold">${calculateTotalNAV().toFixed(2)}</p>
        </div>
        <div>
          <p className="text-gray-600">Total Return</p>
          <p className={`text-3xl font-bold ${calculateTotalReturn() >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {calculateTotalReturn().toFixed(2)}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioSummary;