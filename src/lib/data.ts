import { utils } from '@/lib/utils'

export const stockData: Stock[] = [
    { ticker: 'AAPL', name: 'Apple', price: 150, high_52w: 180, id: utils.generateRandomId() },
    { ticker: 'MSFT', name: 'Microsoft', price: 200, high_52w: 220, id: utils.generateRandomId() },
    { ticker: 'GOOGL', name: 'Alphabet', price: 1200, high_52w: 1300, id: utils.generateRandomId() },
    { ticker: 'AMZN', name: 'Amazon', price: 1800, high_52w: 2000, id: utils.generateRandomId() },
];

export const stockListTableHeaders = ['Ticker', 'Company', 'Price', 'From High', 'Actions'];