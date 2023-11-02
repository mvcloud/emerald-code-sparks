export const getHistory = (key) => {
    try{
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
    catch(err){
        console.error("Failed getting history from local storage: ", err);
        return null;
    }
};

export const setHistory = (key, value) => {
    try{
        localStorage.setItem(key, JSON.stringify(history));
    }
    catch(err){
        console.error("Failed setting history from local storage: ", err);
    }
};

export const removeHistory = (key) => {
    try{
        localStorage.removeItem(key);
    }
    catch(err){
        console.error("Failed removing history from local storage: ", err);
    }
};

export const clearAllHistroy = () => {
    try {
        localStorage.clear();
    }
    catch(err){
        console.error("Failed clearing histroy from local storage: ", error);
    }
};
