export const showObject = (obj: any) => {
    if (obj === undefined){
        return "undefined";
    }else if (obj === null){
        return "null";
    }else if (Array.isArray(obj) && obj.length === 0){
        return "[]";
    }else{
        return JSON.stringify(obj).toString();
    }
};