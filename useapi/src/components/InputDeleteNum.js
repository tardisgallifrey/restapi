import { useState } from 'react';
import Delete from '../crud/Delete';
import React from 'react';

//This is our component that allows us to set up
//so that we may call the DELETE component.

//Much of what is here is detailed in the InputRecordValue
//component.  Read comments there for more info.

export default function InputDeleteNum(props){
    //Establish a record ID property as a state variable
    const [id, setId] = useState("");
    const [flag, setFlag] = useState(false);

    const forceUpdate = () => {
        setId("");
        setFlag(false);
      }

    const click = (event) => {
        event.preventDefault();

        if(id.length !== 0){
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
            <button onClick={click} >Delete Record</button>
            { flag ? <Delete url={props.url} id={id}/> : <h3>Enter customer record num.</h3>}
            <button onClick={forceUpdate} >Delete another?</button>
        </React.Fragment>
    )
}