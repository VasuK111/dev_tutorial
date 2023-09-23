// Synchronous
// const start = prompt("Start")
// const end = prompt("End")

//Asynchronous
let promise = new Promise(function(resolve,reject){
    alert("I am an alert in Promise")
    resolve(56)
})


console.log("Start");
setTimeout(function(){
    console.log("Hello two");
},2000);
console.log("End");
console.log(promise)

// Promises are used for parallel execution. It means promise of code execution so that a process can asynchronously.
// Whole point of using a promise is to avoid using callback functions & falling into the callback hell.

let p = new Promise((resolve,reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
    console.log("I am a promise and I am fulfilled");
    resolve(true);    
},5000)
})
console.log(p)
// Promise is pending
// undefined
// I am a promise and I am fulfilled
/*Promise {<pending>}
[[Prototype]]
: 
Promise
[[PromiseState]]
: 
"fulfilled"
[[PromiseResult]]
: 
true*/

let pe = new Promise((resolve,reject)=>{
    console.log("Promise is pending");
    setTimeout(()=>{
    console.log("I am a promise and I am rejected");
    reject(new Error("I am error"))
},5000)
})
console.log(pe)
/*Promise is pending
undefined
I am a promise and I am rejected
Uncaught (in promise) Error: I am error
    at <anonymous>:5:12 */

p.then((value)=>{
    console.log(value)
})
 // This will give the value   
pe.catch((error)=>{
    console.log("Some error occured in pe")
})

// This will catch the error
// output will be:
/*I am a promise and I am fulfilled
true
I am a promise and I am rejected
Some error occured in pe*/

//Another way to write is 
pe.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})

/* Promise chaining and Multiple Handlers are different. 
Promise chaining says that whenever you attach a handler(.then/ .catch etc) to a promise, wait for it
to run & then attach the returned value to a new promise, then that runs and so on a chain of promises 
get formed. 
Multiple Handlers is when you attach multiple handlers to one same promise. */

// PROMISE API

let p1 = new Promise((resolve,reject)=>{
    setTimeout (() => {
        resolve("Value 1");
},1000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout (() => {
        resolve("Value 2");
},2000)
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout (() => {
        resolve("Value 3");
},3000)
})


/* p1.then((value)=>{
    console.log(value);
})

p2.then((value)=>{
    console.log(value);
})

p3.then((value)=>{
    console.log(value);
}) */

let promise_all = Promise.all([p1,p2,p3]) // Works only when all promises get resolved
promise_all.then((value)=>{
    console.log(value);
})

let promise_all2 = Promise.allSettled([p1,p2,p3]) // Works even when all promises do not get resolved, i.e some are rejected
promise_all2.then((value)=>{
    console.log(value);
})

let promise_all3 = Promise.race([p1,p2,p3]) // Returns the promise with shortest callback time first if it's an error one then it throws an error!!
promise_all3.then((value)=>{
    console.log(value);
})

let promise_all4 = Promise.any([p1,p2,p3]) // Returns the promise which gets resolved first i.e without an error one.
promise_all4.then((value)=>{
    console.log(value);
})

// ASYNC & AWAIT
// We can make any function async & then wait for the promises inside it.
// Used to pause the execution of a program which is otherwise not possible in jS.
async function Weather(){
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("27 Deg");
    },1000)
})
    let bangaloreWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("15 Deg");
    },5000)
})
  console.log("Fetching Delhi's Weather Please Wait...")
  let delhiW = await delhiWeather
  console.log("Fetched Delhi's Weather:"+ delhiW)
  console.log("Fetching Bangalore's Weather Please Wait...")
  let bangaloreW = await bangaloreWeather
  console.log("Fetched Bangalore's Weather:"+ bangaloreW)
  return[delhiW,bangaloreW]
}
console.log("Welcome to Weather Room")
Weather().then((value)=>{
    console.log(value);
})

// Put all the code inside try variable and add a catch method after it if incase
// you feel that there might be some error .

