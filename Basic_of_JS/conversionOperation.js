let score = "33abc"

console.log(typeof (score));

let valueInNumber = Number(score);

console.log(typeof (valueInNumber));
console.log(valueInNumber);

/* 
When you covert to Number
1."33"=>33
2."33abc"=>NaN
3.true => 1; false =>0
4.null => 0;
5.undefined =.NaN

when you convert to Bollean
1. 1=>true; 0=>false
2.""(empty)=>false
3."rock"=>true
 */

//  ************* OPERATIONS *********

console.log("1"+2); //12
console.log(1+"2"); //12
console.log("1"+2+2) //122
console.log(1+2+"2"); //32


