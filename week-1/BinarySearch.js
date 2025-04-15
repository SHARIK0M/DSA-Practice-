// function linearSearch(arr, target) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === target) {
//         return i; // Found at index i
//       }
//     }
//     return -1; // Not found
//   }

//   // --------------------------------------------------------------------------------------------------------

// let arr = [1,2,3,4,5]

// function binarySearch(arr, target) {
//     let left = 0;
//     let right = arr.length - 1;
  
//     while (left <= right) {
//       let mid = Math.floor((left + right) / 2);
  
//       if (arr[mid] === target) {
//         return mid;
//       } else if (arr[mid] < target) {
//         left = mid + 1;
//       } else {
//         right = mid - 1;
//       }
//     }
  
//     return -1; // Not found
//   }

//   console.log(binarySearch(arr,))



// function Bfun (tar, start , end ){
      
//     if (start > end) {
//         return -1
//     }

//     let mid = Math.floor((start+end)/2)

//     if(arr[mid]=== tar){
//         return mid
//     }

//     if(arr[mid]>tar){
//         return Bfun(tar,start,mid-1)
//     }else{
//         return Bfun(tar,mid+1,end)
//     }
// }

// console.log(Bfun(10,0,6))


// rotated sorted array to find target 

// function ra (arr,target){
//   let start = 0
//   let end = arr.length-1 

//    while (start<=end){

//     let mid = Math.floor((start+end)/2)

//     if(arr[mid]==target){
//       return mid 
//     }

//     if(arr[start]<= arr[mid]){
//       if(arr[start]<=target && target < arr[mid]){
//         end =  mid-1
//       }else{
//         start = mid+1
//       }
//     }else{
//       if(arr[mid] < target && target <= arr[end] ){
//         start = mid +1
//       }else{
//         end = mid-1
//       }
//     }

//    }
//    return -1

// }

// let arr = [5,6,1,2,3,4]

// console.log(ra(arr,2));


// same in recursion 

function RBS (arr,tar,s,e){
  if(s>e){
    return -1
  }

  let mid = Math.floor((s+e)/2)

  if(arr[mid]==tar){
    return mid
  }

  if(arr[s]<= arr[mid]){
    if(arr[s]<=tar && tar < arr[mid]){
      return RBS(arr,tar,s,mid-1)
    }else{
     return  RBS(arr,tar,mid+1,e)
    }
  }else{
    if(arr[mid]<tar && tar<=arr[e]){
    return   RBS(arr,tar,mid+1,e)
    }else{
    return  RBS(arr,tar,s,mid-1)
    }
  }
}

let arr = [5,6,1,2,3,4]
console.log(RBS(arr,2,0,5));

