import { useState } from 'react';             //needed to have State variables
import React from 'react';                    //needed for Fragment
import Post from '../crud/Post';              //We will call this one

//This allows us to enter a name (First, Last, or Whole) that gets
//added to the customers array.

//Note: The current set up with one each Input component for the
//different parts of the CRUD is a kluge since it breaks DRY.
//Eventually, I need to rewrite this with one INPUT component that
//configures the render based on an input choice, but that's for later.


export default function InputRecordValue(props){
    //Establish a customer title property as a state variable
    const [title, setTitle] = useState("");
    //Establish a flag state variable to conditionally set result text
    const [flag, setFlag] = useState(false);
    
    //borrowed the function name from others,
    //but React will re-render when State variables change values.
    //Simplest here is to reset them to default values as we entered
    //The first time the component is called.  It works.
    //Called by the "Add another POST button"
    const forceUpdate = () => {
      setTitle("");
      setFlag(false);
    }

    //Sets the flag to true to signal the change
    //of results text in the render
    const click = (event) => {
        //We do prevent the default things done (re-render)
        //by adding this method
        event.preventDefault();
        
        //As long as the title text we entered in
        //the input box has at least one character,
        //set the flag to true
        if(title.length > 0){
          setFlag(true)
        }
        
    }

    //This is our render
    //
    // One input box and two buttons
    // Using a placeholder allows us to skip 
    // a label for the INPUT
    // value and onChange fills the state variable 'title'
    // as we type.
    //
    // The first button is conditional " ? : "
    // and it calls the POST component with props
    // when we click the button and make the flag TRUE.
    //  When the flag is false, it just tells the user what to do.
    //
    // The second button calls the forceUpdate function which clears
    // our state variables and re-renders so that we can keep adding
    // more names if we wish.
    
      return (
        <React.Fragment>
        <form className="input-style">
            <input 
              placehoder='name'
              type="text" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
        </form>
        <button onClick={click}>Add Customer</button>
        { flag ? <Post url={props.url} title={title} /> : <h3>Enter customer name.</h3>}
        <button onClick={forceUpdate}>Post another?</button>
        </React.Fragment>
      );
}