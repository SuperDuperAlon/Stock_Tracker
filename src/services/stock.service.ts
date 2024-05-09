// CRUDL

// READ
// UPDATE

import { getDataFromLocalStorage, setDataInLocalStorage } from '@/services/storage.service';
import { stockData } from '@/lib/data';

export const stockService = { queryStocks, addStock, removeStock }

const STORAGE_KEY: string = 'StockDB';
_checkAndCreateStockDB()

// TODO: Move to Util file
function queryStocks() {
    if (typeof window === 'undefined' || !window.localStorage) return console.log('no local storage');
    else return getDataFromLocalStorage(STORAGE_KEY)
}

// TODO: Move to Util file
function addStock(stockToAdd: Stock) {
    if (typeof window === 'undefined' || !window.localStorage) return
    const existingStocks = getDataFromLocalStorage(STORAGE_KEY) || [];
    const updatedStocks = [...existingStocks as Stock[], stockToAdd];
    setDataInLocalStorage(STORAGE_KEY, updatedStocks);
}

function removeStock(id: string) {
    if (typeof window === 'undefined' || !window.localStorage) return
    const existingStocks: Stock[] = getDataFromLocalStorage(STORAGE_KEY) || [];
    const updatedStocks = existingStocks.filter(stock => stock.id !== id);
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