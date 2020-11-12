// streams & buffers
// streams --> start using data, before it has finished 

const fs = require('fs');
const readStream = fs.createReadStream('././docs/blog3.txt')

//event listener 
readStream.on('data', (chunk) => {
    console.log('.....NEW CHUNK.....')
    console.log(chunk.toString())
} )