const fs = require('fs')

fs.readdir('../../images',  (err, files)=> console.log(files))