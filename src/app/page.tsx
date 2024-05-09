'use client'

import styles from "./page.module.css";
import { stockService } from "@/services/stock.service";
import { utils } from '@/lib/utils'
import { useEffect, useState } from "react";
import StockLIst from "@/components/StockLIst";
import Loading from "@/components/base components/Loading";
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

  const onDeleteStock = (id: string) => {
    stockService.removeStock(id);
    setStocks(prevStocks => prevStocks && prevStocks.filter(stock => stock.id !== id));
  }

    const handleAddStock = (ev: React.FormEvent<HTMLFormElement>) => {
      ev.preventDefault();
      if (!stockName || null) return
      const stockToAdd = utils.generateStock(stockName);
      stockService.addStock(stockToAdd);
      setStocks(prevStocks => (prevStocks && [...prevStocks, stockToAdd]))
      setStockName('');
    };
    
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStockName(event.target.value);
  };

  if (!stocks) return <Loading />;
  else return (
    <main>
      <section className={styles.container}>
        <h1>
          Stock Tracker
        </h1>
        <StockLIst stocks={stocks} onDeleteStock={onDeleteStock} />
        <form onSubmit={handleAddStock}>
          <input
            type="text"
            value={stockName}
            onChange={handleChange}
          />
          <button type="submit">Add Stock</button>
        </form>

      </section>
    </main>
  )
}
