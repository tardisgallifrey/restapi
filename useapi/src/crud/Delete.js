/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

export default function Delete(props){
  const [record, setRecord] = useState({});

  const errorfunc = (error) => {
    setRecord({title: "Error during API call", id: 1});
    alert(error.message);
  }

  useEffect( ()=> {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
            };

      
      fetch(props.url + '/' + props.id, requestOptions)                                                                                                                                                                                                                                     ////////
        .then(
          response => response.json(),
          error => errorfunc(error)
        )
        .then(
          (response) => {setRecord(response);},
          (error) => errorfunc(error)
        )
      },[]);

      return(
        <React.Fragment>
          <h3>You deleted record: {record.id} name: {record.title} </h3>
        </React.Fragment>

      )
}

