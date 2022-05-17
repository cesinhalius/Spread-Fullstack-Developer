const banana ={
    value: 4,
}

const limao = {
    value:3,
}


function MapComThis(arr, thisArg){
    return arr.map(function(item){
        return item * this.value;
    }, thisArg);
}

const nums = [1, 2];

console.log('this --> banana', MapComThis(nums, banana));

console.log('this --> limão', MapComThis(nums, limao));