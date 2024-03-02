import React from "react";
import Login from "./Components/Login";
import EmployeeData from "./Components/EmployeeData";
import Chart from "./Components/Chart";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SearchBar from "./Components/SearchBar";
import LoginDetailsProvider from "./Context/LoginDetailsProvider";
import Options from "./Components/Options";
import SearchByName from "./Components/SearchByName";

const App = () => {
  return (
      <>
        <LoginDetailsProvider>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/details/:id" element={<Options />}/>
            <Route path="/employee/:id" element={<EmployeeData />} /> 
            <Route path="/search" element={<SearchBar/>}/>
            <Route path="/organization-chart" element={<Chart />} />
            <Route path="/search-by-name/:name" element={<SearchByName />} />
          </Routes>
        </LoginDetailsProvider >
    </>
  );
}

export default App;