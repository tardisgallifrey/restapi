const express = require("express"); //Import Express
const app = express(); //Create Express Application on the app variable
const cors = require("cors"); //CORS is needed to make this work in modern browsers
app.use(express.json()); //used the json file
app.use(cors()); //use CORS
var fs = require("fs"); //required for file I/O, this for write
var rs = require("fs"); //this stream is for reading only
const csv = require("csv-parser"); //required for csv reading
var csvWriter = require("csv-write-stream"); //required for csv writing


var data='';
csvfile = 'data.csv';
var maxID = 0;
//Give initial data to the server
//This is a JSON array of Objects

//Must write the first record with headers
writer = csvWriter({ headers: ["title", "id"]});
writer.pipe(fs.createWriteStream(csvfile));
writer.write({ title: "George", id: 1 });
writer.end();



//NOTE: as I progress, this will be moved to a file save
//and later a MySQL save
const customers = [
  { title: "Josh", id: 2 },
  { title: "Tyler", id: 3 },
  { title: "Alice", id: 4 },
  { title: "Candice", id: 5 },
];
maxID = 5;

//Function to write one single object to csv file
function writecsv(item){
    //don't send titles
    writer = csvWriter({sendHeaders: false});
    
    //Pipe through csv-writer, set to append    
    writer.pipe(fs.createWriteStream(csvfile, {flags: 'a'}));
    writer.write(item);
    writer.end();
}

//Write initial data to csv file
customers.map( writecsv );


//Default
//Read Request Handlers
// Display the Message when the URL consist of '/'
app.get("/", (request, response) => {
  response.send("Welcome to Dave's Node REST API!");
  console.log("User didn't append an api call.");
});

//GET
// Display the List Of Customers when URL consists of api/customers
//Express has a built in method for GET
// and the response object has a built in method for send
app.get("/api/customers", (request, response) => {
    var customerlist = [];

    var readStream = rs.createReadStream(csvfile, 'utf8');

    readStream.on('data', (chunk) => {

        //read a chuck, append to data
        data += chunk;
        }
    )
    .pipe(csv())            //pipe data to csv
            .on('data', (row) => {
                customerlist.push(row);
                maxID = parseInt(row.id);
            })
            .on('end', () => {
                response.send(customerlist);
            });

  console.log("User requested all records [GET].");
});

//GET{id}
// Display the Information Of a Specific Customer when you mention the id.
//The ':' is for identification of the variable in the Express call
//You would not use it in forming the URL
//True URL = localhost/api/customers/4 not customers/:4
app.get("/api/customers/:id", (request, response) => {

    var answer = {};
    found = false;

    var readStream = rs.createReadStream(csvfile, 'utf8');

    readStream.on('data', (chunk) => {

        //read a chuck, append to data
        data += chunk;
        }
    )
    .pipe(csv())            //pipe data to csv
            .on('data', (row) => {
                if(row.id === request.params.id){
                    answer = row;
                    found = true;
                }
            })
            .on('end', () => {
                if(found){
                    response.send(answer);
                }else{
                    response.status(404).send("Record not found");
                    console.log("User requested GET, but not found")
                }
            });

  console.log("User requested GET by ID number [GET]");
}
);

//POST
//CREATE Request Handler
//CREATE New Customer Information
app.post("/api/customers", (request, response) => {
  
  //Increment the customer id for the new customer object
  //The order of fields must match exactly with the CSV file
  //left to right
  const customer = {
    title: request.body.title,
    id: maxID + 1
  };

  
  writecsv(customer);
  response.send(customer);
  console.log("New Record Added");
});

//PUT
//Update Request Handler
// Update Existing Customer Information
app.put("/api/customers/:id", (request, response) => {
  //First, find the correct record and GET it, same as GET by id
  const customer = customers.find((c) => c.id === parseInt(request.params.id));

  //If it can't be found, print an error
  if (!customer) {
    res
      .status(404)
      .send(
        '<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!!</h2>'
      );
  }
  customer.title = request.body.title;
  response.send(customer);
});

//DELETE
//Delete Request Handler
// Delete Customer Details
app.delete("/api/customers/:id", (request, response) => {
  var answer = {};
  var customers =[];
  var found = false;

  var readStream = rs.createReadStream(csvfile, 'utf8');

  readStream.on('data', (chunk) => {

      //read a chuck, append to data
      data += chunk;
      }
  )
  .pipe(csv())            //pipe data to csv
          .on('data', (row) => {
              if(row.id === request.params.id){
                  //do nothing
                  answer = row;
                  found = true;
              }else{
                customers.push(row);
              }
          })
          .on('end', () => {
              if(found){
                customers.map( writecsv );
                response.send(answer);

              }else{
                  response.status(404).send("Record not found");
                  console.log("User requested DELTE, but not found")
              }
          });

console.log("User requested DELETE by ID number");
}
);

//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));
