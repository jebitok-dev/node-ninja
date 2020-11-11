//file system(fs) ----> node modules(important feature)
const fs = require('fs');

//reading files 
fs.readFile('././docs/blog1.txt', (err, data) => {
    if(err) {
        console.log(err);
    }
    //buffer
    console.log(data);
})

// writing files


// directories


// deleting files 