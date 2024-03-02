import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from 'react-router-dom';
import '../Employee.css'; 
import { LoginDetailsContext } from "../Context/LoginDetailsProvider";

const EmployeeData = () => {
    const { id } = useParams(); 
    const [employeeData, setEmployeeData] = useState(null);
    const [showDetails, setShowDetails] = useState(false);
    const { setLoginData } = useContext(LoginDetailsContext);  

    useEffect(() => {
        const getEmployeeDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:8080/employee/${id}`);
                setEmployeeData(response.data);
                console.log(response.data);
                // You can also set login data if needed
                // setLoginData(response.data);
            } catch (error) {
                console.log("Unable to fetch the employee details", error);
            }
        }
        getEmployeeDetails();
    }, [id, setLoginData]); 

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }

    return (
        <>
            <h2>Employee Details:</h2>
            {employeeData && (
                <div className="employee-container">
                    <h3 className="name" onClick={toggleDetails}>
                        {employeeData.emp_name} 
                        <span className={`toggle-icon ${showDetails ? 'rotate' : ''}`}>+</span>
                    </h3>
                    <div className={`details ${showDetails ? 'show' : ''}`}>
                        <h3>Employee ID: {employeeData.emp_id}</h3>
                        <h3>Designation: {employeeData.designation}</h3>
                        <h3>Level: {employeeData.level}</h3>
                        <h3>Email-id: {employeeData.email}</h3>
                        <h3>Cell_no: {employeeData.cell_no}</h3>
                        <h3>Department: {employeeData.department && employeeData.department.d_name}</h3>
                        <h3>Reporting Manager: {employeeData.manager && employeeData.manager.m_name}</h3>
                    </div>
                </div>
            )}
        </>
    );
}

export default EmployeeData;
