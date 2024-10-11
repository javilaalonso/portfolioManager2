import React, { useState } from 'react';
import { useStockContext } from '../context/StockContext';

const AddStockForm: React.FC = () => {
  const { addStock } = useStockContext();
  const [symbol, setSymbol] = useState('');
  const [name, setName] = useState('');
  const [purchasePrice, setPurchasePrice] = useState('');
  const [currentPrice, setCurrentPrice] = useState('');
  const [quantity, setQuantity] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addStock({
      id: Date.now().toString(),
      symbol,
      name,
      purchasePrice: parseFloat(purchasePrice),
      currentPrice: parseFloat(currentPrice),
      quantity: parseInt(quantity),
    });
    setSymbol('');
    setName('');
    setPurchasePrice('');
    setCurrentPrice('');
    setQuantity('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="symbol" className="block text-sm font-medium text-gray-700">Symbol</label>
        <input
          type="text"
          id="symbol"
          value={symbol}
          onChange={(e) => setSymbol(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="purchasePrice" className="block text-sm font-medium text-gray-700">Purchase Price</label>
        <input
          type="number"
          id="purchasePrice"
          value={purchasePrice}
          onChange={(e) => setPurchasePrice(e.target.value)}
          required
          step="0.01"
          min="0"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="currentPrice" className="block text-sm font-medium text-gray-700">Current Price</label>
        <input
          type="number"
          id="currentPrice"
          value={currentPrice}
          onChange={(e) => setCurrentPrice(e.target.value)}
          required
          step="0.01"
          min="0"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
      </div>
      <div>
        <label htmlFor="quantity" className="block text-sm font-medium text-gray-700">Quantity</label>
        <input
          type="number"
          id="quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          min="1"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ri