import { useState } from 'react';
import React from 'react';
import Put from '../crud/Put';

export default function InputModified(props){
    //Establish a customer title property as a state variable
    const [title, setTitle] = useState("");
    const [id, setID] = useState("");
    const [flag, setFlag] = useState(false);

    const click = (event) => {
        event.preventDefault();
        
        if(title.length > 0){
          setFlag(true)
        }
        
    }
    
      return (
        <React.Fragment>
        <form className="input-style">
            <input 
              placeholder='name'
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <input 
              size='3'
              placeholder='0'
              type="text" 
              value={id}
              onChange={(e) => setID(e.target.value)}
            />
        </form>
        <button onClick={click}>Modify Customer</button>
        { flag ? <Put url={props.url} title={title} id={id}/> : <h3>Enter customer name and record num.</h3>}
        </React.Fragment>
      );
}