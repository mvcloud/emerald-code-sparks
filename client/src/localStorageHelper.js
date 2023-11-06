export const getHistory = (key) => {
    try{
        //console.log(`Getting ${key} to `);
        const data = localStorage.getItem(key);
        return data ? JSON.parse(data) : null;
    }
    catch(err){
        console.error("Failed getting history from local storage: ", err);
        return null;
    }//get last visited path from local storage
};

export const setHistory = (key, value) => {
    try{
        //console.log(`Setting ${key} to `, value);
        localStorage.setItem(key, JSON.stringify(value));
    }
    catch(err){
        console.error("Failed setting history from local storage: ", err);
    }
};//store last visited path in local storage

export const removeHistory = (key) => {
    try{
        localStorage.removeItem(key);
    }
    catch(err){
        console.error("Failed removing history from local storage: ", err);
    }
};//function that may be helpful if the local storage is full

export const clearAllHistroy = () => {
    try {
        localStorage.clear();
    }
    catch(err){
        console.error("Failed clearing histroy from local storage: ", err);
    }
};//function that may be helpful if the local storage is full or if new user logged in
