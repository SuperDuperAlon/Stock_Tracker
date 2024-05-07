'use client'

import styles from "./page.module.css";
import { stockService } from "@/services/stock.service";
import { utils } from '@/lib/utils'
import { useEffect, useState } from "react";
export default function Home() {

  const [stocks, setStocks] = useState<Stock[] | null>(null);
  const [stockName, setStockName] = useState<string>('');

  useEffect(() => {
    const fetchStocks = () => {
      const fetchedStocks = stockService.queryStocks();
      setStocks(fetchedStocks as Stock[]);
    };
    fetchStocks();
  }, []);

  const handleAddStock = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    if (!stockName || null) return
    // TODO: Create single stock in service

    const stockToAdd = {
      ticker: stockName.substring(0, 3).toUpperCase(),
      name: stockName,
      price: Math.random() * 100,
      high_52w: Math.random() * 100,
      id: utils.generateRandomId()
    };

    stockService.addStock(stockToAdd);
    setStocks(prevStocks => (prevStocks ? [...prevStocks, stockToAdd] : [stockToAdd]))
    setStockName('');
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>  {
    setStockName(event.target.value);
  };


  const priceFromHigh52w = (price: number, high_52w: number) => {
    return ((price / high_52w) * 100).toFixed(2)
  }


  return (
    <main>
      <section className={styles.container}>
        <h1>
          Stock Tracker
        </h1>
        <form onSubmit={handleAddStock}>
          <input
            type="text"
            value={stockName}
            onChange={handleChange}
          />
          <button type="submit">Add Stock</button>
        </form>
        {/* TODO: Move table to component List */}
        <table>
          <thead>
            <tr>
              <th>
                Ticker
              </th>
              <th>
                Company
              </th>
              <th>
                Price
              </th>
              <th>
                From High
              </th>
            </tr>
          </thead>
          {stocks && (
            <tbody>
              {stocks.map((stock) => (
                <tr key={stock.id}>
                  <td>{stock.ticker}</td>
                  <td>{stock.name}</td>
                  <td>${stock.price.toLocaleString()}</td>
                  <td>{priceFromHigh52w(stock.price, stock.high_52w)}%</td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </section>
    </main>
  )
}
