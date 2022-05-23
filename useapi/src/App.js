import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Layouts/Layout';
import { Home } from './pages/Home';
import GetAll from './crud/GetAll';
import InputRecordNum from './components/InputRecordNum';
import InputDeleteNum from './components/InputDeleteNum';
import InputRecordValue from './components/InputRecordValue';
import InputModified from './components/InputModified';
import NoPage from './pages/NoPage';

const url = "http://localhost:8080/api/customers";

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

  

 
