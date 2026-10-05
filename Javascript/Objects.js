//literal way
let empDetails={
    name:"Alaiwaaaa",
    role:"developer",
    salary:250000,
    skills:["System design","Microservices","Monolithic Architecture","Event driven","Database designing"],
    address:{
        city:"Guntur",
        zipCode:522201
    }
}

console.log(empDetails);

console.log("============USING NEW KEYWORD===============")

//using new keyword
let emp2=new Object({
    name:"Shiaaaaaaaa",
    role:"developer",
    salary:250000,
    skills:["System design","Microservices","Monolithic Architecture","Event driven","Database designing"],
    address:{
        city:"Guntur",
        zipCode:522201
    }
})

console.log(emp2);

//CRUD operations
console.log("===================CRUD OPERATIONS===============");

console.log(empDetails.name);
console.log(empDetails.skills[1]);

empDetails.skills.map((s)=>{
    console.log(s);
})

console.log(empDetails.address.city);

Object.seal(empDetails); // Prevents addition and deletion of properties, but existing properties can be modified.
Object.freeze(empDetails); // Prevents modification, addition and deletion of properties.

console.log(Object.isFrozen(empDetails));
console.log(Object.isSealed(empDetails));

empDetails.email="aliwaaa@gmail.com"
empDetails.phone=9876543210

delete empDetails.skills;
delete empDetails.name;

empDetails.salary=150000;

console.log(empDetails);

//Object inbuilt function
console.log("====================Object inbuilt function=================");

console.log(Object.keys(empDetails)); // to retrieve only keys
console.log(Object.values(empDetails)); // to retrieve only values

console.log(Object.entries(empDetails)); // to retrieve both keys and values