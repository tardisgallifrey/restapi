import React from "react";

//I can't explain why this works this way, 
//But, if I use the Layout component for my HOME page in the router,
//I get a double home page.  Correct, but double.
//
//So, this fragment that does nothing solves the problem.
//Again, I don't know why.

//05/23/2022 Update: 
//Found out that this component "lives" below the Layout
//component in the hierarchy.  Discovered by placing the titles
//here instead of in Layout and the menu appeared above the titles.
//Upon seeing that, I realized the menu needed to be a top line menu.
//Setting menu up that way corrects double home page titles and REALLY
//Cleans up the page flow.

export const Home = () => {

    return(
        <React.Fragment>
            <h1>Node/Express API testing</h1>
            <h3>React Fetch Data with REST API Example</h3>
        </React.Fragment>
    );
}