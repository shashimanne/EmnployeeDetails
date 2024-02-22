import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export const AddEmployees = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate= useNavigate();


    const addEmployee = (data) => {
        axios.post("http://localhost:9191/employee/", data)
            .then(response => {
                console.log(response);
                navigate("/employeeService")
                alert("Employee added successfully");
            })
            .catch(error => console.log(error));
    }

    return (
        <div>
            <br></br>
            <h1>Add Employee</h1>
            <br></br>
            <form onSubmit={handleSubmit(addEmployee)}>
                <div>
                    <label>Employee Name:</label>
                    <input type="text" id="name" {...register('name', { required: true })} />
                </div>
                <br></br>
                <div>
                    <label>Employee Department ID:</label>
                    <input type="number" id="departmentId" {...register('departmentId', { required: true })} />
                </div>
                <br></br>
                <div>
                    <label>Salary:</label>
                    <input type="number" id="salary" {...register('salary', { required: true })} />
                </div>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
