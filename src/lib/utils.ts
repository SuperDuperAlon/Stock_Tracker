export const utils = { generateRandomId, priceFromHigh52w, generateStock, capitalizeWord }

function generateRandomId(): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let id = '';
    for (let i = 0; i < 8; i++) {
        id += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return id;
}

function priceFromHigh52w(price: number, high_52w: number) {
    return ((price / high_52w) * 100).toFixed(2)
}


function generateStock(stockName: string) {
    return {
        ticker: stockName.substring(0, 3).toUpperCase(),
        name: stockName,
        price: Math.random() * 100,
        high_52w: Math.random() * 100,
        id: generateRandomId()
    }
}

function capitalizeWord(word: string): string {
    return word.charAt(0).toUpperCase() + word.slice(1);
}