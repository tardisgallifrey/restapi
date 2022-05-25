/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';


export default function GetById(props){

    //This sets up a state variable and a setState function
    //and gives an initial, but empty assignment
    //post will contain an array
  const [post, getPost] = useState({})

  // error function makes Promise error handling
  // easier
  const errorfunc = (error) => {
    //manually set a 1 item JSON with error message
    //helps to not allow error to break rendering
    getPost({title: "Error during API call", id: 1});
    alert(error.message);
  }
  
  //The fetch function
  useEffect( ()=> {

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
      };
    //Not using the options parameter, yet
    fetch(props.url + '/' + props.id, requestOptions)                                                                                                                                                                                                                                     ////////
      .then((response) => response.json())
      .then(
        response => getPost(response),
        error => errorfunc(error)
        )
  },[]);

  return(
    <React.Fragment>
        <h3>Your record is: {post.title}</h3>
    </React.Fragment>
  );

}

