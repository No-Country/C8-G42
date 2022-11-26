const path = require("path");

require("dotenv").config({
     path: path.resolve(__dirname, './../.env')
});

console.log("OTRO", process.env.OTRO);

require("dotenv").config({
    path: path.resolve(__dirname, './../', `${process.env.NODE_ENV}.env`)
});


// console.log("__dirname", __dirname);
console.log("NODE_ENV", process.env.NODE_ENV);