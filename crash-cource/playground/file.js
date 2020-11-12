//file system(fs) ----> node modules(important feature)
const fs = require('fs');

//reading files (asynchronous function)
// fs.readFile('././docs/blog1.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     }
//     //buffer
//     console.log(data.toString());
// })

// console.log('last line')

// writing files
fs.writeFile('././docs/blog1.txt', 'hello world', () => {
    console.log('file was written')
})

fs.writeFile('././docs/blog12.txt', 'hello again', () => {
    console.log('file was written')
})
// directories


// deleting files 