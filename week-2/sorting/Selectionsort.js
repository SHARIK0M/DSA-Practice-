function selection(arr){

    for(let i =0 ;i<arr.length ; i++){
        let minindex = i
        for(let j=i+1 ;j<arr.length;j++){
            if(arr[j]<arr[i]){
                minindex=j
            }
        }
        [arr[i],arr[minindex]] = [arr[minindex],arr[i]]
    }
    return arr
}
let arr = [1,3,2,5,6,4]
console.log(selection(arr));
