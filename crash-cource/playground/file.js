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
// fs.writeFile('././docs/blog1.txt', 'hello world', () => {
//     console.log('file was written')
// })

// fs.writeFile('././docs/blog12.txt', 'hello again', () => {
//     console.log('file was written')
// })
// directories -- fol
// if(!fs.existsSync('./assets')) {
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err)
//         }
//         console.log('folder created')
//     })    
// } else {
//     fs.mkdir('./assets', (err) => {
//         if(err) {
//             console.log(err)
//         }
//         console.log('folder deleted')
//     })
// }

// deleting files 
if (fs.existsSync('././docs/deleteme.txt')) {
    fs.unlink('././docs.deleteme.txt', (err) => {
        if(err) {
            console.log(err)
        }
        console.log('file deleted')
    })
}