import React, { useEffect, useState } from "react";

export default function Delete(props){
  const [record, setRecord] = useState({});

  useEffect( ()=> {
        const requestOptions = {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json' }
            };

      
      fetch(props.url + '/' + props.id, requestOptions)                                                                                                                                                                                                                                     ////////
        .then((response) => response.json())
        .then((response) => {
          setRecord(response);
        })
      },[props.id, props.url]);

      return(
        <React.Fragment>
          <h3>You deleted record: {record.id} name: {record.title} </h3>
        </React.Fragment>

      )
}

