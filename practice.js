// function reverce (n){
//     let res=0
//    while(n){
//     let ram = n%10
//     res=res*10+ram
//     n=Math.floor(n/10)
//    }
//    return res
// }

// console.log(reverce(1234));

// let res = 0
// function rn(n,res=0){
//     if(n==0)
//         return res
//    let rem = n%10
//    res=res*10+rem
//    return rn(Math.floor(n/10),res)
// }

// console.log(rn(1234))


// function arr1 (arr,index=0){
//     if(index==arr.length-1){
//         return true
//     }

//     return arr[index] <= arr[index+1] && arr1(arr,index+1)
// }

// console.log(arr1([1,8,3,3,8]));



// function rl(arr,tar,i=0){
//     if(i==arr.length-1){
//         return []
//     }

//     let result = rl(arr,tar,i+1)

//     if(arr[i]==tar){
//         return [i,...result]
//     }else{
//        return result
//     }
// }

// let arr =[1,2,3,2,43,2,1]

// console.log(rl(arr,2));


function mergeSort(arr){
    if(arr.length < 2){
        return arr
    }
    let mid=Math.floor(arr.length/2)
    let leftArr=arr.slice(0,mid)
    let rightArr=arr.slice(mid)
    console.log("left : ",leftArr);
    console.log("right : ",rightArr);

    
    return merge(mergeSort(leftArr),mergeSort(rightArr))
}

function merge(leftArr,rightArr){

    const sortedArr=[]
    while(leftArr.length && rightArr.length){
        if(leftArr[0] <rightArr[0]){
            sortedArr.push(leftArr.shift())
            console.log("Leftsort : ",sortedArr)
        }else{
            sortedArr.push(rightArr.shift())
            console.log("Rightsort : ",sortedArr)

        }
    }
    console.log("Final sorted :",sortedArr)
    return sortedArr.concat(leftArr,rightArr)
}
console.log(mergeSort([-6,20,8,-2,4]))
