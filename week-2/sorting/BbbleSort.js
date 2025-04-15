let swapped 

function Bubble(arr){
    do{
         swapped = false
        for(let i = 0 ; i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
                swapped = true
            }
        }
    }while(swapped)

    return arr
}

let arr = [1,3,2,5,42,4,1]

console.log(Bubble(arr));
