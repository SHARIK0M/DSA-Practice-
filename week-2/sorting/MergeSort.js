function mergeSort(arr){
    if(arr.length<2){
        return arr
    }
    let mid = Math.floor(arr.length/2)
    let leftArr = arr.slice(0,mid)
    let rightArr = arr.slice(mid)

    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(left,right){
    let mergedArray = []
    while(left.length && right.length){
        if(left[0]<=right[0]){
            mergedArray.push(left.shift())
        }else{
            mergedArray.push(right.shift())
        }
    }

    return [...mergedArray , ...left,...right]
}

console.log(mergeSort([-6,20,8,-2,4]));
