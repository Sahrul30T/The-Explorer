export const setStorage = (key, value)=>{
    try {
         localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log(error)
    }
}

export const getStorage = (key)=>{
    try {
         const value=localStorage.getItem(key)
         if (value!== null){
            return JSON.parse(value)
         }
    } catch (error) {
        console.log(error)
    }
}

export const removeStorage = (key)=>{
    try {
         
         localStorage.removeItem(key)
    } catch (error) {
        console.log(error)
    }
}