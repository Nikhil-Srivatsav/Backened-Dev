'==' vs '==='

'=='  is Abstract equality.
'===' is Strict equality.


if someone says that == checks value and === cjecks values and types just don't argue with them and ignore them.
understand that he is a fool he has not spent time with javascript.



Now point is both checks value and perform further operations. Then whats the major difference 
Note--> abstract equality checks and performs coercion.
 
strict equality doesnt perform coercion it directly performs operations.

For example

x=10;
y=1;
console.log(x===y);

Case : when objects come into picture 

console.log({}==={}); // o/p would be false


//but now a catch
x={}; 

// This is the concept of object value and we cam see x is pointing to a object now this time ojects are not compared but x is compared and x is pointing so true.
Because we dont know what objects are being pointed out.
console.log(x===x);   o/p would be true
