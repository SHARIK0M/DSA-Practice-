

function quick (arr){
    
    if(arr.length<2){
        return arr
    }
   
    let pivot = arr[arr.length-1]
    let left = []
    let right = []

    for(let i=0 ; i<arr.length -1 ;i++){
        if(arr[i]<pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }

  return [...quick(left),pivot,...quick(right)]
}

let arr=[1,5,23,-8,512,2,3]

console.log(quick(arr));
