/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';


export default function GetAll(props){

    //This sets up a state variable and a setState function
    //and gives an initial, but empty assignment
    //post will contain an array
  const [post, getPost] = useState([])
  
  //The fetch function called by useEffect
  useEffect( ()=> {

    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
      };

    //Not using the options parameter, yet
    fetch(props.url, requestOptions)                                                                                                                                                                                                                                     ////////
      .then((response) => response.json())
      .then((response) => {
        //getPost is my setState function
        getPost(response)
      })
  
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