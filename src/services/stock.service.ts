// CRUDL

// TODO: Create - Add Stock to list
// TODO: Creare - Database - StocksDB in local storage
// READ
// UPDATE
// TODO: Delete Stock From list
// TODO: List stocks   
// TODO: Create - util genereal service 

import { getDataFromLocalStorage, setDataInLocalStorage } from '@/services/storage.service';
import { stockData } from '@/lib/data';

export const stockService = { queryStocks, addStock }

const STORAGE_KEY: string = 'StockDB';
_checkAndCreateStockDB()

// TODO: Move to Util file
function queryStocks() {
    if (typeof window === 'undefined' || !window.localStorage) return console.log('no local storage');
    else return getDataFromLocalStorage(STORAGE_KEY)
}

// TODO: Move to Util file
function addStock(stockToAdd: Stock) {
    if (typeof window === 'undefined' || !window.localStorage) return console.log('no local storage');
    const existingStocks = getDataFromLocalStorage(STORAGE_KEY) || [];
    const updatedStocks = [...existingStocks as Stock[], stockToAdd];
    setDataInLocalStorage(STORAGE_KEY, updatedStocks);
}

// TODO: Move to Util file
function _checkAndCreateStockDB() {
    if (typeof window !== 'undefined') {
        var stocks: Stock[] | null = getDataFromLocalStorage(STORAGE_KEY)
        if (!stocks || !stocks.length) {
            stocks = stockData
        }
        setDataInLocalStorage(STORAGE_KEY, stocks);
    }
}