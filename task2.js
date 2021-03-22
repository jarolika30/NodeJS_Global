const fs = require('fs');
const csvFilePath = './csv/nodejs-hw1-ex1.csv';
const csv = require('csvtojson');
const stream = fs.createWriteStream('text.txt', { flags: 'a+' });

fs.createReadStream(csvFilePath)
  .pipe(csv())
  .on('data', (row) => {
    stream.write(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  })
  .on('error',(err)=>{
    console.log('Error during reading process:', err);
  });