

var x = 6
var y = -5

var soma = 0;

for(let i = (12 + 1); i< 12; i++) {

    if (i % 2 == 1 || i % 2 == -1) {
        soma += i;
    }
    console.log(soma);
}

console.log(soma)


var input = require("fs").readFileSync("stdin" , "utf8");

let x = parseInt(input);
let y = parseInt(input);

var soma = 0;

for(let i = (x + 1); i < y ; i++) {

    if (i % 2 == 1 || i % 2 == -1) {
        soma += i;
    }
    console.log(soma);
}