var fs = require('fs'); //required for file I/O
const csv = require('csv-parser'); //required for csv handling

//csv-parser converts each record in the CSV to a JSON object.
//It ASSUMES the first row contains JSON property names,
//such as id and title.

var data = '';          //data variable

//create readStream object, open file, utf8 required
var readStream = fs.createReadStream('data.csv', 'utf8');

//call readstream method, pass data variable
//and callback function
//also callback function to do something with data
readStream.on('data', (chunk) => {

    //read a chuck, append to data
    data += chunk;
    }
)
.pipe(csv())            //pipe data to csv
.on('data', (row) => {
    //now data converts?
    console.log(row);
  })
  .on('end', () => {
    console.log('CSV file successfully processed');
  });