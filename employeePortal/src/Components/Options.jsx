import React from "react";
import { Link, useParams } from "react-router-dom";

const Options = () => {
    // Obtain id from URL parameters
    const { id } = useParams(); 
   
    return (
        <>
            <nav>
                <ul>
                    {/* Pass the id as a parameter to the EmployeeData component */}
                    <li> <Link to={`/employee/${id}`}> My Details </Link> </li>
                    <li> 
                        <Link to="/search">Search</Link>
                    </li>
                    <li> <Link to="/organization-chart">Organization Chart</Link> </li>
                </ul>
            </nav>
        </>
    )
}

export default Options;
