import React, { useEffect, useState } from "react";

export default function Put(props){
    const [record, setRecord] = useState({});

    useEffect( () => {
            const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title: props.title })
            };

            fetch(props.url + '/' + props.id, requestOptions)
                .then(response => response.json())
                .then(response => {
                    console.log(response);
                    setRecord(response);
                });

            },[]);

    return(
        <React.Fragment>
            <h3>You modified: {record.id} to {record.title}</h3>
        </React.Fragment>
    );

}