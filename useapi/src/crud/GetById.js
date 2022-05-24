/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';


export default function GetById(props){

    //This sets up a state variable and a setState function
    //and gives an initial, but empty assignment
    //post will contain an array
  const [post, getPost] = useState([])
  
  //The fetch function
  useEffect( ()=> {

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
      };
    //Not using the options parameter, yet
    fetch(props.url + '/' + props.id, requestOptions)                                                                                                                                                                                                                                     ////////
      .then((response) => response.json())
      .then((response) => {

        //getPost is my setState function
        getPost(response)
      })
  

  },[]);

  return(
    <React.Fragment>
        <h3>Your record is: {post.title}</h3>
    </React.Fragment>
  );

}

