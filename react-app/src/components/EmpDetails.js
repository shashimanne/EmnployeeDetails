import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const EmpDetails = () => {
    //const [employee,setEmployee,department,setDepartment] = useState([]);
    const[emp, setEmp] = useState({
      departmentId: '',
      employeeId: '',
      name: '',
      salary: '',
    });
    const[dept, setDept] = useState({
      departmentId: '',
      name: ''
    });

    const {id}=useParams();
    useEffect(() => {
        axios.get("http://localhost:9191/employee/"+id).then(response=>{
            console.log("response from API: ", response.data)
            setEmp(response.data.employee);
            setDept(response.data.department);
            console.log("about to set emp:", response.data.employee);
            console.log("dept is: ",dept)
            console.log("emp is: ",emp);

        }
        ).catch(error=>console.log(error));
    },[id])


  return (
    <div>
      
            {emp && (
                <div>
                    <h2>Employee Details</h2>
                    <div className='text-left'>
                        <p>Name: {emp.name}</p>
                        <p>salary: {emp.salary}</p>
                        <p>DepartmentID: {emp.departmentId}</p>
                        <p>ID: {emp.employeeId}</p>
                    </div>

                </div>
            )}
            {dept && (
                <div>
                    <h2>Departemnt Details</h2>
                    <p>ID: {dept.departmentId}</p>
                    <p>Name: {dept.name}</p>
                    
                </div>
            )}
            
            
        </div>
    );
}
