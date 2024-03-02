import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SearchByName = () => {

    const { name } = useParams();
    const[employeeData, setEmployeeData] = useState([]);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const getSearchedNameData = async() => {
            try {
                const response = await axios.get(`http://localhost:8080/employee/${name}`);
                setEmployeeData(response.data);
                showDetails(true);
            }
            catch(error) {
                console.log("Error fetching data :-(",error);
            }
        }
        getSearchedNameData();
    }, [name]);

    const toggleDetails = () => {
        setShowDetails(!showDetails);
    }

    return (
        <>
            <h2> { name } </h2>
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
    )
}

export default SearchByName;