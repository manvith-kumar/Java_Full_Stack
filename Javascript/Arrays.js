//literal way
let arr=[10,20,30,40,50];
console.log(arr);

//new keyword
let skills=new Array("java", "python", "C")
console.log(skills);

console.log("--------------------------------------------");

//Array Inbuilt functions
let arr1=[null, true, 5000, 'javascript'];
console.log(arr1);

arr1.push(6000);
console.log(arr1);

/*
arr1.push(8520, 41); // we can also insert multiple values at the same time the values will be added at the end of the array
console.log(arr1);

arr1.push(...arr); //output: [null,true,5000,'javascript',6000,8520,41,10,20,30,40,50]
console.log(arr1); //"..." is split operator

arr1.push(arr); //output: [null,true,5000,'javascript',6000,8520,41,[10,20,30,40,50]]
console.log(arr1);
*/

arr1.pop(); //removes elements at last in array
arr1.pop();
console.log(arr1);

arr1.shift(); // to delete the element at 0 index
console.log(arr1);

arr1.unshift(456,851,5511); //insert element at first in array
console.log(arr1);

arr1.splice(2,2); //to delete elements at particular indices | 1st param -> strating index | 2nd param -> no of elements to delete
console.log(arr1); //Removes elements from an array and, if necessary, inserts new elements in their place, returning the deleted elements.

arr1.splice(2,0,true,null,5000); //to insert one or more elements at particular index
console.log(arr1); //Inserts new elments at the start of an array, and returns the new length of the array.

console.log("-------------------------------------------------------------");

arr1.splice(1,4,'Java') //first two arguments->to specify starting delete index, no of elements to delete & third argument to insert the value in the place of deleted elements
console.log(arr1);

arr1.reverse();
console.log(arr1);
arr1.sort();
console.log(arr1);
