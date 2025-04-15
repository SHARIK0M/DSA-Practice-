// let n = 1234
// let res=0
// for(let i =0 ; i<4 ;i++){
//     let rem = n%10
//     res = res*10+rem
//     n=Math.floor(n/10)
// }

// console.log(res) 

// --------------------------------------------------------------------------------------------------------


// sum of digits 

// function sumOfDigits(n){
//     if(n==0){
//         return 0
//     }

//     return (n%10) + sumOfDigits(Math.floor(n/10))
// }

// console.log(sumOfDigits(1234));  // 1+2+3+4 = 10

// --------------------------------------------------------------------------------------------------------

// sum of product 

// function ProductOfDigits(n){
//     if(n%10==n){
//         return n
//     }

//     return (n%10) *  ProductOfDigits(Math.floor(n/10))
// }

// console.log(ProductOfDigits(55)); // 5*5 = 25

// n-- vs --n

// --------------------------------------------------------------------------------------------------------


// reverce a Number recursive 

// let res = 0 

// function Rnum (n){
//     if(n==0){
//         return 
//     } 
//     let rem = n%10
//     res = res*10+rem
//   Rnum(Math.floor(n/10))

// }

// console.log(Rnum(1234))

// console.log(res);

// --------------------------------------------------------------------------------------------------------

// function palendrome (n){

//     function rnum2 (n,res=0){
//         if(n==0){
//             return res
//         }
    
//         let rem = n%10
    
//         return rnum2(Math.floor(n/10),res*10+rem)
//     }
//     return n=== rnum2(n)
// }


// function rnum2 (n,res=0){
//     if(n==0){
//         return res
//     }
//     let rem = n%10

//     return rnum2(Math.floor(n/10),res*10+rem)
// }


// console.log(pal(12321))



// count the number of zero in number 


// function cz(n,c=0){
//     if(n==0){
//         return c
//     }
//     let rem = n%10
//     if(rem==0){
//         c++
//     }

//      return cz(Math.floor(n/10),c)

// }

// console.log(cz(10230));

// // --------------------------------------------------------------------------------------------------------

// finding array is sorted or not 

// function arrs(arr,index=0){
//     if(index === arr.length-1){
//         return true
//     }
//     return arr[index] <= arr[index+1] && arrs(arr,index+1)
// }

// let arr = [1,2,3,9,4,5]

// console.log(arrs(arr));


// linear seach in recurtion 

// function lS(arr,tar,i=0){
//      if(i==arr.length){
//         return false
//      }
     
//      if(arr[i]==tar){
//         return true 
//      }
//      return lS(arr,tar,i+1)
// }
// let arr = [1,23,4,5,2]

// console.log(lS(arr,2));


// return lists 

// function targetsindex (arr,tar,i=0,list=[]){
//     if(arr.length == i){
//         return list
//     }

//     if(arr[i]==tar){
//         list.push(i)
//     }
//     return rl(arr,tar,i+1,list)
// }

// let arr = [1,2,3,4,5,6,3]

// console.log(rl(arr,3));

// without veriable 

// function wv(arr,tar,index=0){
//     if(arr.length === index){
//         return []
//     }

//     let result = wv(arr,tar,index+1)

//     if(arr[index]==tar){
//         return [index,...result]
//     }else{
//         return result
//     }
// }

// let arr = [2,2,4,5,3,2]

// console.log(wv(arr,2))
