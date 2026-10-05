let num=10.552;
console.log(typeof num);

let str="j";
console.log(typeof str);

let t=true;
console.log(typeof t);

let m=12345678901234567890123456677899000384832678246981n;
console.log(typeof m);

let n=null;
console.log(typeof n);

let s=Symbol(52);
let s1=Symbol(52);
console.log(s);
console.log(typeof s);
console.log(s==s1); // output: false

let s2=10;
let s3=10;
console.log(s2==s3); // output: true
// "==" operator only checks the values...
let s4=10;
let s5="10";
console.log(s4==s5); // output: true