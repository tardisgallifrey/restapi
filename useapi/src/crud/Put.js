/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

export default function Put(props){
    const [record, setRecord] = useState({});

    // error function makes Promise error handling
    // easier
    const errorfunc = (error) => {
        //manually set a 1 item JSON with error message
        //helps to not allow error to break rendering
        setRecord({title: "Error during API call", id: 1});
        alert(error.message);
    }

    useEffect( () => {
            const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: props.title })
            };

            fetch(props.url + '/' + props.id, requestOptions)
                .then(
                    response => response.json(),
                    error => errorfunc(error)
                )
                .then(
                    response => setRecord(response),
                    error => errorfunc(error)    
                );
            },[]);

    return(
        <React.Fragment>
            <h3>You modified: {record.id} to {record.title}</h3>
        </React.Fragment>
    );

}