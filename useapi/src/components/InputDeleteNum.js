import { useState } from 'react';
import Delete from '../crud/Delete';
import React from 'react';

export default function InputDeleteNum(props){
    //Establish a record ID property as a state variable
    const [id, setId] = useState("");
    const [flag, setFlag] = useState(false);

    const click = (event) => {
        event.preventDefault();

        if(id.length === 1){
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
            { flag ? <Delete url={props.url} id={id}/> : <h3>Enter customer name and record num.</h3>}
        </React.Fragment>
    )
}