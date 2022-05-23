import { Outlet, Link } from "react-router-dom";
import '../App.css';

export default function Layout(){
  return (
    <div className="App">
      <header className="App-header">
        <h1>Node/Express API testing</h1>
        <h3>React Fetch Data with REST API Example</h3>
            <nav>
                <ul>
                  <li>
                      <Link className="App-link" to="/">Home</Link>
                  </li>
                  <li>
                      <Link className="App-link" to="/getall">Get All</Link>
                  </li>
                  <li>
                      <Link className="App-link" to="/getbyid">Get One Record</Link>
                  </li>
                  <li>
                      <Link className="App-link" to="/modifyrecord">Modify One Record</Link>
                  </li>
                  <li>
                      <Link className="App-link" to="/postrecord">Post One Record</Link>
                  </li>
                  <li>
                      <Link className="App-link" to="/deleterecord">Delete One Record</Link>
                  </li>
                </ul>
            </nav>

      <Outlet />
      </header>
    </div>
  )
};