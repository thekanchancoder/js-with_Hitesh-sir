//  ++++++++++++++ Array methods +++++++++++++++
const myArray = new Array(1, 2, 3, 4, 5);
// console.log(myArray[1]);
myArray.push(6); //last me value ko ad krta h
// console.log(myArray);
myArray.pop(); // last se value ko htata h
// console.log(myArray);

myArray.unshift(9); // start me value ko add krta h
myArray.shift(); // start sevalue ko htane ke liye
// console.log(myArray);

// console.log(myArray.includes(6));
// console.log(myArray.indexOf(5));

const newArr = myArray.join();
// console.log(myArray);
// console.log(newArr);

// slice, splice
// console.log("A", myArray);
const myn1 = myArray.slice(1, 4);  //1 h start index or 4 h end index frist index ko includ nhi krte
// console.log(myn1);
// console.log("B", myArray);
const myn2 = myArray.splice(1, 4); // 1 h index jo add nhi hoga 4 number delete krta h ye original array ko bdl deta h original array [1]
// console.log("c", myArray);
// console.log(myn2);

const hero=["bhagat singh","lakshmi bai","chandra shekhar"]
const marvelHr=["superman","ironman","thor"]

const allheros=marvelHr.concat(hero)
// console.log(allheros);

const newheros=[...marvelHr,...hero]
// console.log(newheros);  //spred oprator

const anothArray=[1,2,3,[5,6,7],8,[9.4,6],[3,2,5]]
const newanothArray=anothArray.flat(Infinity)
// console.log(newanothArray);

// console.log(Array.from("kanchan"));

// console.log(Array.from({name:"kanchan"})); //yaha empty array a jayega


let score1=100
let score2=200
let score3=300
// console.log(Array.of(score1,score2,score3));


//  ++++++++++++  OBJECTS  ++++++++++++++++

const mySym=Symbol("key1")
const jsUser={
    name:"kanchan",
    "full name":"kanchan rathore",
    age:22,
    email: "kanchan@example.com",
    location:"Mainpuri",
    isLoggedIn:"false",
    [mySym]:"mykey1"

}
// console.log(jsUser.age);
// console.log(jsUser["full name"]);
// console.log(jsUser["location"]);
// console.log(jsUser[mySym]);

jsUser.email="kanchan@newemail.com"
// Object.freeze(jsUser)    //freeze krne ke baad object me koi bhi change nhi kr skte
jsUser.email="kanchan@oldemail.com" 
// console.log(jsUser);

jsUser.greeting=function(){
    console.log("hello js User");
    
}
jsUser.greetingTwo=function(){
    console.log(`hello js user,${this.name}`);
    
}
// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());


const tinder=new Object()  // ye singleTon object h
const tinderUser={}      // ye ek non singleTon object h
tinderUser.id="efg234"
tinderUser.name="shree"
tinderUser.isLoggedIn="false"
// console.log(tinderUser);

let regularUser={
    email:"kanchan@23gmail.com",
    fullname:{
userFullname:{
    firstname:"kanchan",
    lastname:"rathore"
}
    }
}
// console.log(regularUser.fullname.userFullname.firstname);

const obj1={
    firstname:"pooja",
    pmob:"46382736739"
}
const obj2={
    name:"neha",
    mob:"463827367786"
}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));

