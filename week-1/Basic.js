function fibonacci (n){
    let fib = [0,1]
    for(let i=2 ; i<n ; i++){
        fib[i]=fib[i-2]+fib[i-1]
    }
    return fib
}

console.log(fibonacci(5))
console.log(fibonacci(3))

// ---------------------------------------------------------------------------------------

function factorial (n){
    let result = 1
    for(let i=2 ; i<=n ;i++){
        result *= i 
    }
    return result 
}

console.log(factorial(5))

// ---------------------------------------------------------------------------------------


function isPrime(n){
    if(n<2){
        return false
    }
    for(let i=2 ;i<n;i++){
        if(n%i===0){
            return false
        }
    }
    return true
}

console.log(isPrime(4))

// having one optimize method math.sqrt  big-o o(sqrt(n)) 

// ---------------------------------------------------------------------------------------/

function IsPowerofTwo (n){
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2==1){
            return false
        }
        n/=2
    }
    return true 
}

console.log(IsPowerofTwo(5))
console.log(IsPowerofTwo(8))  // Big-o o(log)


// using bitwish return (n&(n-1))==0  Big-o o(i)

// ---------------------------------------------------------------------------------------

function recursionfact(n){
  if(n==1){
    return 1
  }
  return n * recursionfact(n-1)
}

console.log(recursionfact(5))


function recursionfibo(n){
   if(n<2){
    return n
   }
    return recursionfibo(n-2) + recursionfibo(n-1)
}

console.log(recursionfibo(6))

