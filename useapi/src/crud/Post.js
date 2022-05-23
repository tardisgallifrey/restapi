import React, { useEffect, useState } from "react";

export default function Post(props){
    const [record, setRecord] = useState({});

    useEffect( () => {
            const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: props.title })
            };

            fetch(props.url, requestOptions)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    setRecord(response);
                });

            },[]);

    return(
        <React.Fragment>
            <h3>You added: {record.title}</h3>
        </React.Fragment>
    );

}