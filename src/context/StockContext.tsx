import React, { createContext, useState, useContext } from 'react';
import { Stock, StockContextType } from '../types';
import { getCurrentPrice } from '../utils/stockApi';

// ... (resto del código existente)

export const StockProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [stocks, setStocks] = useState<Stock[]>([]);

  const addStock = async (stock: Omit<Stock, 'currentPrice'>) => {
    try {
      const currentPrice = await getCurrentPrice(stock.symbol);
      const newStock = { ...stock, currentPrice };
      setStocks([...stocks, newStock]);
    } catch (error) {
      console.error('Error al añadir la acción:', error);
      // Aquí podrías manejar el error, por ejemplo, mostrando un mensaje al usuario
    }
  };

  const updateStock = async (id: string, updatedStock: Partial<Stock>) => {
    try {
      const currentPrice = await getCurrentPrice(updatedStock.symbol || '');
      setStocks(stocks.map(stock => 
        stock.id === id ? { ...stock, ...updatedStock, currentPrice } : stock
      ));
    } catch (error) {
      console.error('Error al actualizar la acción:', error);
      // Aquí podrías manejar el error, por ejemplo, mostrando un mensaje al usuario
    }
  };

  const refreshPrices = async () => {
    try {
      const updatedStocks = await Promise.all(stocks.map(async (stock) => ({
        ...stock,
        currentPrice: await getCurrentPrice(stock.symbol)
      })));
      setStocks(updatedStocks);
    } catch (error) {
      console.error('Error al actualizar los precios:', error);
      // Aquí podrías manejar el error, por ejemplo, mostrando un mensaje al usuario
    }
  };

  // ... (resto del código existente)
};

// ... (resto del código existente)