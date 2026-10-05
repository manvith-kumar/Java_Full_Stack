for(let i=0;i<=1;i++) {
    console.log("==================================================");
    console.log();
    console.log("==================================================");
}

console.log();

//for-of loop
let arr=[10,20,30,40,50,60];
for(let val of arr) {
    console.log(val);
}
console.log();
let str="Javascript";
for(let c of str) {
    console.log(c);
}

console.log();

//for-in loop -> gives index values
for(let idx in arr) {
    console.log(idx); //output -> 0 1 2 3 4 5 
}
console.log();
for(let idx in str) {
    console.log(idx); //output -> 0 1 2 3 4 5 6 7 8 9
}

console.log();

//forEach loop
arr.forEach((val,idx,a)=>{
    console.log(val,"-> ",idx,"->",a);
})

console.log("=====================MAP FUNCTION============================");

let prices=[500,102,456,7812,1542,4512,510,12,741,41,54841];
console.log(prices);
let discountedPrices = prices.map((x)=>{
    return x-x/10;
})
console.log(discountedPrices);

let newPrice = prices.map((x)=>{
    return x+250;
})
console.log(newPrice);

console.log("=======================FILTER FUNCTION==========================");

let filteredPrices = discountedPrices.filter((x)=>{
    return x>=500 && x<=5000;
})
console.log(filteredPrices);

console.log("=======================REDUCE FUNCTION==========================");

filteredPrices.reduce((pre, curval, curidx, a)=>{
    console.log(pre,"->", curval,"->", curidx,"->", a)
})
console.log();
const totalPrice = filteredPrices.reduce((acl, val)=>{
    return acl+val;
},500)
console.log(totalPrice);