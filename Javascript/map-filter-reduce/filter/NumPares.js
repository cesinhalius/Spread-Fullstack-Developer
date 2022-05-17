function filterPares(arr){
    const numPares = arr.filter((item)=> item % 2 === 0);
    

    return numPares;
}

function filterImpares(array){
    const numImpares = array.filter((item) => item % 2 !== 0);

    return numImpares;
}


console.log(filterPares([1,2,3,4,5,6,7,8,9]))
console.log(filterImpares([1,2,3,4,5,6,7,8,9]))