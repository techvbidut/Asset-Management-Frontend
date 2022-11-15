import logo from './logo.svg';
import './App.css';
import HomePage from './pages/Home';
import ResourceList from './pages/Resources';
import { AllServices } from './services/allServices';
import { useEffect, useState } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Employees from './pages/Employees';

function App() {

  const [data, setData] = useState([])
  useEffect(() => {
    AllServices.getAllEmployees().then((res) => {
      console.log(res.data.data)
      setData(res.data.data);
    }).catch(err => console.log(err));
  }, [])
  return (
    // <div className="App">
    //     <HomePage  data={data} />
    // </div>
    <BrowserRouter>
      <HomePage />
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/resources" element={<ResourceList />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;

const Child = () => {
  return (
    <div>
      <h2> I am Child</h2>
    </div>
  )
}