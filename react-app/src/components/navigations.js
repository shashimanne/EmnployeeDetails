import React from 'react'
import { Link } from "react-router-dom";

export const Naviagtions = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-primary">
      <div className="container-fluid">
        <div>
        <a className="navbar-brand text-white fs-4" href="#home">Employee Management</a>
        </div> 
        
        <div className='float-right'>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <Link to="/employees"  className="nav-link text-white">Get all employees</Link>
            </li>
            <li className="nav-item">
            <Link to="/department"  className="nav-link text-white"> department</Link>
            </li>
            <li className="nav-item">
            <Link to="/addDepartment"  className="nav-link text-white"> add Department</Link>
            </li>
            <li className="nav-item">
            <Link to="/employeeService"  className="nav-link text-white"> employees </Link>
            </li>
            <li className="nav-item">
            <Link to="/addEmployee"  className="nav-link text-white"> Add Employees </Link>
            </li>
            
          </ul>
          
        </div>
        </div>
      </div>
    </nav>
    )
}