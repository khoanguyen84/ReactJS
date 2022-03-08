export function sum(...paras){
    let total = 0;
    for(let i=0; i< paras.length; i++){
        total += paras[i]
    }
    return total;
}

export function multiple(...paras){
    let result = 1;
    for(let i=0; i< paras.length; i++){
        result *= paras[i]
    }
    return result;
}

// export default sum