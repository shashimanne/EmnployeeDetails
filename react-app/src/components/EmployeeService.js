 
import axios from 'axios'
import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom';

export const EmployeeService = () => {
    const [count , setCount] = useState(0);

    const [employees , setEmployees] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:9191/employee/").then(response=>{
            console.log(response.data)
            setEmployees(response.data);
        }
        ).catch(error=>console.log(error));
    },[])

    return (
        <div> 
        <table border={2}>
            <thead><td>EmployeeId</td><td>name</td><td>salary</td><td>departmentId</td></thead>
            <tbody>
                {
                     employees.map((emp)=>
                     <tr><td>{emp.employeeId}</td>
                         <td><Link to={`/getEmployee/${emp.employeeId}`}>{emp.name}</Link></td>
                         <td>{emp.salary}</td>
                         <td>{emp.departmentId}</td>
                     </tr>
                     
                     )
                }
                </tbody>
        </table>
        </div>
    )
}