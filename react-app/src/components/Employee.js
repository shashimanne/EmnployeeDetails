
import React from 'react'

export const Employee = () => {
    const employees=[{employeeId:1001,name:"Jhon",salary:50000,departmentId:101},
        {employeeId:1002,name:"Sara",salary:50000,departmentId:102},
        {employeeId:1003,name:"Amit",salary:50000,departmentId:103},
        {employeeId:1004,name:"Jhon",salary:50000,departmentId:104}];
  return (
   <div>
    <table border={5}>
        <thead><td>Id</td><td>name</td><td>salary</td><td>DeptId</td></thead>
        <tbody>
            {
                employees.map((employee)=>
                <tr><td>{employee.employeeId}</td><td>{employee.name}</td><td>{employee.salary}</td><td>{employee.departmentId}</td>
                </tr>         
                )
            }
                       
        </tbody>
        </table>
   </div>
   )
}