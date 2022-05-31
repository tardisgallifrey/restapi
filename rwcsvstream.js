var fs = require('fs');
var csvWriter = require('csv-write-stream')

const csvfile = "data.csv";
const data = [
    { id: 3, title: "Tyler" },
    { id: 4, title: "Dave"},
    { id: 5, title: "Janice"}
];


function writecsv(item){
    if (!fs.existsSync(csvfile)){
        writer = csvWriter({ headers: ["id", "title"]});
    }else{
        writer = csvWriter({sendHeaders: false});
    }

    writer.pipe(fs.createWriteStream(csvfile, {flags: 'a'}));
    writer.write(item);
    writer.end();
}

data.map( writecsv );