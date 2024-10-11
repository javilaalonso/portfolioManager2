import { useState } from 'react'
import Head from 'next/head'
import PortfolioSummary from '@/components/PortfolioSummary'
import StockList from '@/components/StockList'
import AddStockForm from '@/components/AddStockForm'
import { StockProvider } from '@/context/StockContext'

export default function Home() {
  const [activeTab, setActiveTab] = useState('summary')

  return (
    <StockProvider>
      <div className="min-h-screen bg-gray-100">
        <Head>
          <title>Stock Portfolio Manager</title>
          <meta name="description" content="Manage your stock portfolio" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className="container mx-auto px-4 py-8">
          <h1 className="text-4xl font-bold mb-8 text-center">Stock Portfolio Manager</h1>
          
          <div className="mb-4">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex">
                <button
                  onClick={() => setActiveTab('summary')}
                  className={`${
                    activeTab === 'summary'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Summary
                </button>
                <button
                  onClick={() => setActiveTab('addTransaction')}
                  className={`${
                    activeTab === 'addTransaction'
                      ? 'border-indigo-500 text-indigo-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ml-8`}
                >
                  Add Transaction
                </button>
              </nav>
            </div>
          </div>

          {activeTab === 'summary' ? (
            <div className="grid gap-8">
              <PortfolioSummary />
              <StockList />
            </div>
          ) : (
            <div className="bg-white shadow-md rounded-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Add New Stock</h2>
              <AddStockForm />
            </div>
          )}
        </main>
      </div>
    </StockProvider>
  )
}