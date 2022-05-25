var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var xhr = new XMLHttpRequest();

//Set an endpoint URL
const url = "http://localhost:8080/api/customers";
//var xhr = new XMLHttpRequest();



let myfetch = new Promise( (myResolve, myReject) => {
    //let req = new XMLHttpRequest();

    xhr.responseType='json';

    xhr.open('GET', url);

    xhr.send();

    xhr.onload = function() {
      if (xhr.readyState === 4 && xhr.status == 200) {
        myResolve(xhr.responseText);
      }

    };
    

  });
    

// "Consuming Code" (Must wait for a fulfilled Promise)
myfetch.then(
    //should print JSON?
  function(value) { console.log(value) },
  
)
