import React from "react";

//I can't explain why this works this way, 
//But, if I use the Layout component for my HOME page in the router,
//I get a double home page.  Correct, but double.
//
//So, this fragment that does nothing solves the problem.
//Again, I don't know why.

export const Home = () => {

    return(
        <React.Fragment></React.Fragment>
    );
}