 
import axios from 'axios'
import React, {useEffect, useState} from 'react'

export const Department = () => {
                    
    const [departments , setDepartments] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:9191/department/").then(response=>{
            console.log(response.data)
            setDepartments(response.data);
        }
        ).catch(error=>console.log(error));
    },[])

    return (
        <div > 
        <table border={2}>
            <thead><td>DepartmentId</td><td>DepartmentName</td></thead>
            <tbody>
                {
                     departments.map((dept)=>
                     <tr><td>{dept.departmentId}</td><td>{dept.name}</td>
                     </tr>
                     
                     )
                }
                </tbody>
        </table>
        </div>
    )
}