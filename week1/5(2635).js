var map = function(arr, fn) {
    let transArr = [];
    for(let i=0;i<arr.length;i++){
        transArr[i] = fn(arr[i], i);
    }
    return transArr;
};

function plusone(n){ 
    return n + 1; 
}

arr = [1,2,3]
transArr = map(arr, plusone);
console.log(transArr)

