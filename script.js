const express = require('express'); //Import Express
const app = express(); //Create Express Application on the app variable
const cors = require('cors'); //CORS is needed to make this work in modern browsers
app.use(express.json()); //used the json file
app.use(cors());        //use CORS
 
//Give initial data to the server
//This is a JSON array of Objects

//NOTE: as I progress, this will be moved to a file save
//and later a MySQL save
const customers = [
    {title: 'George', id: 1},
    {title: 'Josh', id: 2},
    {title: 'Tyler', id: 3},
    {title: 'Alice', id: 4},
    {title: 'Candice', id: 5}
]
 

   
//Default
//Read Request Handlers
// Display the Message when the URL consist of '/'
app.get('/', (request, response) => {
    response.send('Welcome to Dave\'s Node REST API!');
    console.log("User didn't append an api call.");
});

//GET
// Display the List Of Customers when URL consists of api/customers
//Express has a built in method for GET
// and the response object has a built in method for send
app.get('/api/customers', (request, response)=> {
        
        response.send(customers);
        console.log("User requested all records [GET].");
    }
);

//GET{id}
// Display the Information Of a Specific Customer when you mention the id.
//The ':' is for identification of the variable in the Express call
//You would not use it in forming the URL
//True URL = localhost/api/customers/4 not customers/:4
app.get('/api/customers/:id', (request, response) => {

    //I re-wrote this from the lambda statement:
    //      c => c.id === parseInt(req.params.ide)
    // to the function body so that one can see the 
    // parameter to .find() is a callback function.
    //Intellisense shows that the c receives the customer
    //objects from customers.find() and loops through each one until found
    //UPDATE: The function def worked in Postman, but only the lambda in Reactjs
    const customer = customers.find( c => c.id === parseInt(request.params.id)  );

    //If there is no valid customer ID, then display an error with the following message

    if (!customer){
        response.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Ooops... Cant find what you are looking for!</h2>');
        console.log("User requested GET, but no record found [GET]");
    }

    response.send(customer);
    console.log("User requested GET by ID number [GET]");
});

//POST
//CREATE Request Handler
//CREATE New Customer Information
app.post('/api/customers', (request, response)=> {

    //The original code used customers.length to determine next 
    //customer ID number to use.
    //However, if you delete a record, or more, length no 
    //longer determines the highest ID number.

    //This the beginning routine, finds the highest ID actually in use.

    //Set our maximum ID variable
    var maxID = 0;

    //Find the highest ID in our array of customers
    customers.forEach( (element)=> {
        if( maxID < parseInt(element.id)){

            maxID = parseInt(element.id);
        }
    })

//Increment the customer id for the new customer object
    const customer = {
        id: maxID + 1,
        title: request.body.title
    };

    //push() is a javascript array method
    customers.push(customer);
        response.send(customer);
    console.log("New Record Added");    
}
);
 
//PUT
//Update Request Handler
// Update Existing Customer Information
app.put('/api/customers/:id', (request, response) => {

    //First, find the correct record and GET it, same as GET by id
    const customer = customers.find( c => c.id === parseInt(request.params.id) );
    
    //If it can't be found, print an error
    if (!customer){
         res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!!</h2>');
    }
    customer.title = request.body.title;
    response.send(customer);
});
 
//DELETE
//Delete Request Handler
// Delete Customer Details
app.delete('/api/customers/:id', (req, res) => {
 
//If we can't find the record, we can't delete it
const customer = customers.find( c=> c.id === parseInt(req.params.id));
if(!customer) res.status(404).send('<h2 style="font-family: Malgun Gothic; color: darkred;">Not Found!!</h2>');
 
//Find the array index of the customer record requested for deletion
const index = customers.indexOf(customer);

//splice method deletes members of array
//This says, Remove item at index, only 1 item,
//then "splice" the array back together
customers.splice(index,1);
 
res.send(customer);
});


 
//PORT ENVIRONMENT VARIABLE
const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Listening on port ${port}..`));