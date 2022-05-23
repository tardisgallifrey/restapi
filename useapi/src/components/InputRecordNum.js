import { useState } from 'react';
import GetById from '../crud/GetById';
import React from 'react';

export default function InputRecordNum(props){
    //Establish a record ID property as a state variable
    const [id, setId] = useState("");
    const [flag, setFlag] = useState(false);

    const click = (event) => {
        event.preventDefault();
        if(id !== ""){
            setFlag(true);
        }
        
    }

    return(
        <React.Fragment>
            <form>
                <input
                    name='id'
                    type='text'
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
            </form>
            <button onClick={click} >Get Record</button>
            <div>
                { flag ? <GetById url={props.url} id={id} /> : <h3>Enter a record number only</h3>}
            </div>
        </React.Fragment>
    )
}