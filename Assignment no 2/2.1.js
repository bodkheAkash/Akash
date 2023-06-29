var mym=require('./2.js')
 var n=3;
var result=mym.isprime(n);
if(result)
  console.log("The "+n+"is prime");
else
   console.log("The"+n+" is not prime")
var fac=5;
console.log("The factorial "+fac+"is"+mym.calfat(fac));
var result1=mym.perfect(10)
if(result1)
 console.log("Is perfect no")
else
 console.log("Is not a perfect no")