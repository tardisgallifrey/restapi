import { Outlet, Link } from "react-router-dom";
import '../App.css';      //We import the CSS here, too

//This is part two of Browser Router set up
//These Links call the components and pages when the 
//Links are activated.  The "to" creates pseudo folder names
//to keep the Internet happy.

export default function Layout(){
  return (
    <div className="App">
      <header className="App-header">
            <nav>
              <Link className="topnav" to="/">Home</Link>
              <Link className="topnav" to="/getall">Get All</Link>
              <Link className="topnav" to="/getbyid">Get One Record</Link>
              <Link className="topnav" to="/modifyrecord">Modify One Record</Link>
              <Link className="topnav" to="/postrecord">Post One Record</Link>
              <Link className="topnav" to="/deleterecord">Delete One Record</Link>
            </nav>
      <Outlet />
      </header>
    </div>
  )
};