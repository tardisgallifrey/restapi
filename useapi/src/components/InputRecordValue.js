import { useState } from 'react';
import React from 'react';
import Post from '../crud/Post';

export default function InputRecordValue(props){
    //Establish a customer title property as a state variable
    const [title, setTitle] = useState("");
    const [flag, setFlag] = useState(false);

    const click = (event) => {
        event.preventDefault();
        
        if(title.length > 0){
          setFlag(true)
        }
        
    }
    
      return (
        <React.Fragment>
        <form>
          <label>Name:
            <input 
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </label>
          <button onClick={click}>Add Customer</button>
        </form>
        { flag ? <Post url={props.url} title={title} /> : <h3>Enter customer name.</h3>}
        </React.Fragment>
      );
}