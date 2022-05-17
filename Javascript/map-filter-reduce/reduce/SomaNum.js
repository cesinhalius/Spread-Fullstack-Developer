function SomaNum(arr){
    return arr.reduce(function(prev, curret){
        console.log({ prev });
        console.log({ curret });
        return prev + curret;
    })
}


const arr = [5, 9];

console.log(SomaNum(arr))