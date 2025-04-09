function linearSearch(arr, target) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        return i; // Found at index i
      }
    }
    return -1; // Not found
  }

  // --------------------------------------------------------------------------------------------------------

let arr = [1,2,3,4,5]

function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === target) {
        return mid;
      } else if (arr[mid] < target) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  
    return -1; // Not found
  }

  console.log(binarySearch(arr,))



function Bfun (tar, start , end ){
      
    if (start > end) {
        return -1
    }

    let mid = Math.floor((start+end)/2)

    if(arr[mid]=== tar){
        return mid
    }

    if(arr[mid]>tar){
        return Bfun(tar,start,mid-1)
    }else{
        return Bfun(tar,mid+1,end)
    }
}

console.log(Bfun(10,0,6))