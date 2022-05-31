// write_stream.js

const fs = require('fs');

const crlf = "\n";
const flags = {
    flags: "a",
    encoding: "utf-8"
    }

let writeStream = fs.createWriteStream('data.csv', flags);

// write some data with a base64 encoding
writeStream.write("15, George"+crlf, 'utf-8');

// the finish event is emitted when all data has been flushed from the stream
writeStream.on('finish', () => {
    console.log('wrote all data to file');
});

// close the stream
writeStream.end();