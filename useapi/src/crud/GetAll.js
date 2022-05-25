/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';


export default function GetAll(props){

    //This sets up a state variable and a setState function
    //and gives an initial, but empty assignment
    //post will contain an array
  const [post, getPost] = useState([])

  // error function makes Promise error handling
  // easier
  const errorfunc = (error) => {
    //manually set a 1 item JSON array with error message
    //helps to not allow error to break rendering
    getPost([{title: "Error during API call", id: 1}]);
    alert(error.message);
  }
  
  //The fetch function called by useEffect
  useEffect( ()=> {

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
      };

    //typical Promise consumption form is:
    //  mypromise(params)
    //    .then(
    //      (resolve) => { what to do if success },
    //      (reject) => { what to do if an error }
    //     )
    //
    // Most lessons on fetch don't show the reject callback,
    // but it is still there

    fetch(props.url, requestOptions)                                                                                                                                                                                                                                     ////////
      .then(
        response => response.json(), 
        error => errorfunc(error)
          //Easiest to format error message as array for render
          //below
        )
      .then(
        response => getPost(response), 
        error => errorfunc(error)
        )
  }, []);

  return(
    <React.Fragment>
        <h3>Get all records</h3>
            <ul>
            {post.map((item, i) => {
                return <li key={i}>{item.id} {item.title}</li>
            })}
            </ul>  
    </React.Fragment>
  );

}