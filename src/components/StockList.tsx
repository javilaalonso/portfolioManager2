import React from 'react';
import { useStockContext } from '@/context/StockContext';
import { Trash2 } from 'lucide-react';

const StockList: React.FC = () => {
  const { stocks, deleteStock } = useStockContext();

  const calculateReturn = (purchasePrice: number, currentPrice: number) => {
    return ((currentPrice - purchasePrice) / purchasePrice) * 100;
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Your Holdings</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Symbol</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-right">Quantity</th>
              <th className="py-3 px-6 text-right">Purchase Price</th>
              <th className="py-3 px-6 text-right">Current Price</th>
              <th className="py-3 px-6 text-right">Return</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {stocks.map((stock) => (
              <tr key={stock.id} className="border-b border-gray-200 hover:bg-gray-100">
                <td className="py-3 px-6 text-left whitespace-nowrap">{stock.symbol}</td>
                <td className="py-3 px-6 text-left">{stock.name}</td>
                <td className="py-3 px-6 text-right">{stock.quantity}</td>
                <td className="py-3 px-6 text-right">${stock.purchasePrice.toFixed(2)}</td>
                <td className="py-3 px-6 text-right">${stock.currentPrice.toFixed(2)}</td>
                <td className="py-3 px-6 text-right">
                  <span className={calculateReturn(stock.purchasePrice, stock.currentPrice) >= 0 ? 'text-green-600' : 'text-red-600'}>
                    {calculateReturn(stock.purchasePrice, stock.currentPrice).toFixed(2)}%
                  </span>
                </td>
                <td className="py-3 px-6 text-center">
                  <button onClick={() => deleteStock(stock.id)} className="text-red-500 hover:text-red-700">
                    <Trash2 size={18} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockList;