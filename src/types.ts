export interface Stock {
  id: string;
  symbol: string;
  name: string;
  purchasePrice: number;
  currentPrice: number;
  quantity: number;
}

export interface StockContextType {
  stocks: Stock[];
  addStock: (stock: Omit<Stock, 'currentPrice'>) => Promise<void>;
  updateStock: (id: string, updatedStock: Partial<Stock>) => Promise<void>;
  deleteStock: (id: string) => void;
  refreshPrices: () => Promise<void>;
}