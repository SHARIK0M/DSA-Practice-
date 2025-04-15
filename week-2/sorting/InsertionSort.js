  function insertion(arr){
    for(let i = 1 ; i<arr.length ;i++){
      let insert = arr[i]
      let j=i-1

      while(j>=0 && arr[j]>insert){
        arr[j+1] = arr[j]
        j=j-1
      }
      arr[j+1] = insert
    }
    return arr
  }

  let arr=[1,2,3,4,3,2,2,1]

  console.log(insertion(arr));
  
