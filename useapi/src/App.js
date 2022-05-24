import './App.css';                                               //load CSS for the app
import { BrowserRouter, Routes, Route } from "react-router-dom";  //load Route methods
import Layout from './Layouts/Layout';                            //include Layout, where links are
import { Home } from './pages/Home';                              //Home page
import GetAll from './crud/GetAll';                               //GET all component
import InputRecordNum from './components/InputRecordNum';         //choose Record number
import InputDeleteNum from './components/InputDeleteNum';         //choose record to delete
import InputRecordValue from './components/InputRecordValue';     //choose name to enter
import InputModified from './components/InputModified';           //modify record selections
import 
import NoPage from './pages/NoPage';                              //404 page

//This is the URL for the API.  Change it when it's real not development
const url = "http://localhost:8080/api/customers";

//With Routing, our App function is dedicated to routing with almost no rendering.
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/getall" element={<GetAll url={url} />} />
          <Route path="/getbyid" element={<InputRecordNum url={url} />} />
          <Route path="/postrecord" element={<InputRecordValue url={url} />} />
          <Route path="/modifyrecord" element={<InputModified url={url} />} />
          <Route path="/deleterecord" element={<InputDeleteNum url={url} />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

  

 
