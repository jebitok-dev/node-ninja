//Global Object =--> accessing global object
console.log(global);
//after 3seconds
global.setTimeout(() => {
    console.log("in the timeout")
    clearInterval(int);
}, 3000);

//after 1 second
const int = setInterval(() => {
    console.log('in the interval')
}, 1000)

//get current directory of file you're working on on node
console.log(__dirname); //absolute path of current folder
console.log(__filename)

// console.log(document.querySelector)