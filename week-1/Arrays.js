// ARRAY METHOD ...

// arr = [1,2,3,4,5,6,7,8,9,1]

// arr.push(0)

// arr.pop()

// arr.shift()

// arr.unshift(88)

// delete arr[0] // there is empty shows

// console.log(arr.copyWithin(3,4)) // end optinal

// console.log(arr.concat(arr))

// arr.flat()

// console.log(arr.at(0)) // 1

// console.log(arr.toString()) 

// console.log(arr.join("-")) // 1-2-3-4-5-6-7-8-9

// console.log(arr.slice(0,5)) // return new array

// console.log(arr.splice(0,1,"SHARIK","B")) //array.splice(start, deleteCount, item1, item2, ...)

// console.log(arr.indexOf(2))

// console.log(arr.lastIndexOf(2))

// console.log(arr.includes(1))

// console.log(arr.find((val)=>val<=2))

// console.log(arr.findLast((val)=>val<=2))

// console.log(arr.findIndex((val)=>val<=2))

// arr.sort()

// arr.reverse()

// console.log(arr.toReversed())

// console.log(arr.toSorted((a,b)=>b-a))

// arr.forEach((val)=>console.log(val<=2))

// console.log(arr.map((val)=>val<=2))

// console.log(arr.filter((val)=>val<=2))

// console.log( arr.reduce((acc, cur) => acc + cur, 0))

// console.log(arr)

// --------------------------------------------------------------------------------------------------------


// Find the Maximum and Minimum Element in Array

// let min = arr[0]
// let max = arr[0]

// for(let i=0;i<arr.length;i++){
//     if(max<arr[i]){
//         max=arr[i]
//     }
//     if(min>arr[i]){
//         min=arr[i]
//     }
// }

// console.log(max)
// console.log(min)

// --------------------------------------------------------------------------------------------------------

// Sum of All Elements in Array

// console.log(arr.reduce((acc,val)=>acc+val))

// --------------------------------------------------------------------------------------------------------

// reverce an array 

// console.log(arr)

// for(let i =0 ; i<Math.floor(arr.length/2) ;i++){
//     [arr[i] , arr[arr.length -1 -i]] = [arr[arr.length -1 -i] , arr[i]]
// }

// console.log(arr)

// --------------------------------------------------------------------------------------------------------

// Remove Duplicates from Array

// let res = [ ...new Set(arr)]

// console.log(res)

// step = 2 
// let res = arr.filter((iteam,index)=>{
//     return arr.indexOf(iteam)==index
// })

//  step 3 

// let seen = {}
// let res=[]
// let c =1

// for(let i =0 ;i<arr.length;i++){
//     if(!seen[arr[i]]){
//         res.push(arr[i])
//         seen[arr[i]]=c
//     }else{
//         c++
//         seen[arr[i]]=c
//     }
// }

// console.log(res,seen)

// --------------------------------------------------------------------------------------------------------

// Left or Right Rotate an Array (by k steps)

// Right

// let k=2 

// function R(arr,k){
//     let n= arr.length 
//     k=k%n

//     return arr.slice(n-k).concat(arr.slice(0,n-k))
// }

// function L(arr,k){
//     let n = arr.length 
//      k=k%n

//     return arr.slice(0,n-k).concat(arr.slice(n-k))
// }

// console.log(R(arr,k))
// console.log(L(arr,k))



// --------------------------------------------------------------------------------------------------------


// Sort 0s, 1s, and 2s (Dutch Flag Problem)
// let arr = [2,2,1,2,0,0,2,1]


// function Dutch (arr){
// let start =0
// let mid =0
// let end = arr.length-1



// while(mid<=end){
//     if(arr[mid]===0){
//         [arr[mid],arr[start]] = [arr[start],arr[mid]]
//         mid++
//         start++
//     }else if(arr[mid]===1){
//         mid++
//     }else{
//         [arr[mid],arr[end]] = [arr[end],arr[mid]]
//         end--
//     }
// }

// return arr
// }

// console.log(Dutch(arr))



// --------------------------------------------------------------------------------------------------------

// let arr1 = [1, 3, 5, 15,];
// let arr2 = [2, 4, 6, 8,11,14];
// let i = 0, j = 0;
//     let merged = [];

// while(i<arr1.length && j<arr2.length){
//     if(arr1[i]>arr2[j]){
//         merged.push(arr2[j])
//         j++
//     }else{
//         merged.push(arr1[i])
//         i++
//     }
// }


// while(i<arr1.length){
//     merged.push(arr1[i])
//     i++
// }

// while(j<arr2.length){
//     merged.push(arr2[j])
//     j++
// }

//     console.log(merged)


// --------------------------------------------------------------------------------------------------------

// function Subarray(arr,tag){
//     let start = 0 
//     let sub = 0

//     for(let i =0 ;i<arr.length;i++){
//         sub+=arr[i]

//         while(sub>tag){
//             sub-=arr[start]
//             start++
//         }

//         if(sub===tag){
//             console.log(sub)
//             return true
//         }
//     }
//     return false
// }

// let arr = [1,3,2,5,6,4,8]
// let tag = 20

// console.log(Subarray(arr,tag))

// --------------------------------------------------------------------------------------------------------


// Kadane’s Algorithm (Maximum Subarray Sum)

// let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

// let cur = 0
// let max = arr[0]

// for(let i = 0 ;i<arr.length;i++ ){
//     cur +=arr[i]

//     if(cur>max){
//         max=cur
//     }

//     if(cur<0){
//         cur=0
//     }
// }

// console.log(max)

// --------------------------------------------------------------------------------------------------------

// move to 0 to end 

// arr = [0,3,5,0,0,3,9,0]

// let nonindex = 0

// for(let i = 0 ; i<arr.length ; i++){
//     if(arr[i]!==0){
//         arr[nonindex] = arr[i]
//         nonindex++
//     }
// }

// while (nonindex<arr.length){
//     arr[nonindex] = 0
//     nonindex++
// }

// console.log(arr)

// --------------------------------------------------------------------------------------------------------

// find the missing number 

// arr = [1,3,4,5]

// let total = (5*6) / 2
// let sum =0

// for (let i=0;i<arr.length ;i++){
//     sum+=arr[i]
// }

// console.log(total-sum)

// --------------------------------------------------------------------------------------------------------


// function isSorted(arr) {
//     for (let i = 0; i < arr.length - 1; i++) {
//         if (arr[i] > arr[i + 1]) {
//             return false; // Found an unsorted pair
//         }
//     }
//     return true; // No issues found
// }

// --------------------------------------------------------------------------------------------------------
