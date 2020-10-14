//27-4
const fs = require('fs');

fs.writeFile('user-data.txt', 'username = max', err => {
    if (err) {
        console.log(err)
    }else{
        console.log('wrote to file')
    }
})
fs.readFile('user-data.txt', (err, data)=> {
    if(err){
        console.log(err);
    }else {
        console.log(data.toString())
    }
})

