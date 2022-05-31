/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";

export default function Post(props){
    const [record, setRecord] = useState({});
    
    const errorfunc = (error) => {
        setRecord({title: "Error during API call", id: 1});
        alert(error.message);
    }

    useEffect( () => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: props.title })
        };

        fetch(props.url, requestOptions)
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
            <h3>You added: {record.title}</h3>
        </React.Fragment>
    );

}