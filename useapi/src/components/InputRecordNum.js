import { useState } from 'react';
import GetById from '../crud/GetById';
import React from 'react';

//This is our component function that allows
//us to set up to call the GET by ID component

//Much of what is here is detailed in the InputRecordValue
//component.  Read the comments there for more explanation.

export default function InputRecordNum(props){
    //Establish a record ID property as a state variable
    const [id, setId] = useState("");
    const [flag, setFlag] = useState(false);

    const forceUpdate = () => {
        setId("");
        setFlag(false);
      }

    const click = (event) => {
        event.preventDefault();
        if(id !== ""){
            setFlag(true);
        }
        
    }

    return(
        <React.Fragment>
            <form className="input-style">
                <input 
                    size='3'
                    placeholder='0'
                    name='id'
                    type='text'
                    value={id}
                    onChange={e => setId(e.target.value)}
                    />
            </form>
            <button onClick={click} >Get Record</button>
            { flag ? <GetById url={props.url} id={id} /> : <h3>Enter a record number only</h3>}
            <button onClick={forceUpdate} >Get another?</button>
            
        </React.Fragment>
    )
}