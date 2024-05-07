// CRUDL

// TODO: Create - Add Stock to list
// TODO: Creare - Database - StocksDB in local storage
// READ
// UPDATE
// TODO: Delete Stock From list
// TODO: List stocks   
// TODO: Create - util genereal service 

import { getDataFromLocalStorage, setDataInLocalStorage } from '@/services/storage.service';
import { utils } from '@/lib/utils'

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
            stocks = [
                { ticker: 'AAPL', name: 'Apple', price: 150, high_52w: 180, id: utils.generateRandomId() },
                { ticker: 'MSFT', name: 'Microsoft', price: 200, high_52w: 220, id: utils.generateRandomId() },
                { ticker: 'GOOGL', name: 'Alphabet', price: 1200, high_52w: 1300, id: utils.generateRandomId() },
                { ticker: 'AMZN', name: 'Amazon', price: 1800, high_52w: 2000, id: utils.generateRandomId() },
            ];
        }
        setDataInLocalStorage(STORAGE_KEY, stocks);
    }
}