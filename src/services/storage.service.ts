// Function to get data from local storage
export const getDataFromLocalStorage = <T>(key: string): T | null => {
    if (typeof window !== 'undefined') {
        const data = localStorage.getItem(key);
        if (data) {
            return JSON.parse(data) as T;
        }
    }
    return null;
};

// Function to set data in local storage
export const setDataInLocalStorage = <T>(key: string, data: T): void => {
    if (typeof window !== 'undefined') {
        localStorage.setItem(key, JSON.stringify(data));
    }
};