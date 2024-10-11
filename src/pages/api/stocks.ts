import { NextApiRequest, NextApiResponse } from 'next'
import { Stock } from '@/types'

let stocks: Stock[] = []

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(stocks)
  } else if (req.method === 'POST') {
    const newStock: Stock = {
      id: Date.now().toString(),
      ...req.body
    }
    stocks.push(newStock)
    res.status(201).json(newStock)
  } else if (req.method === 'DELETE') {
    const { id } = req.query
    stocks = stocks.filter(stock => stock.id !== id)
    res.status(200).json({ message: 'Stock deleted successfully' })
  } else {
    res.setHeader('Allow', ['GET', 'POST', 'DELETE'])
    res.status(405).end(`Method ${req.method} Not Allowed`)
  }
}