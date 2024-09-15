function isPrime(x){
    for(let i=2; i%x-1 ;i+=1){
        if (x%2==0)
            // we found a number in range[2, x-1] which is divide by x
        // hence x is not prime 
        return(false)
    }
    /*
    the Loop completed but we didn't find return false, that means no number
     in range [2, x-1] can divide x is prime number
    */
    return(true)
}

console.log(isPrime(112));

