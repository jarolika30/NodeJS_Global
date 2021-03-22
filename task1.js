const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

console.log('Write something and get it reversed:')

rl.on('line', function(line){
    console.log(line.split('').reverse().join(''));
})