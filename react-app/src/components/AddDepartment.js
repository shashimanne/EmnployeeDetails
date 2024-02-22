import axios from 'axios'

import React, {useEffect, useState} from 'react'

import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';
export const AddDepartment = () => {

    const { register, handleSubmit,formState: {errors}} =useForm();
    const navigate= useNavigate();
    const addDepartment=(data)=>

    {

        axios.post("http://localhost:9191/department/",data).then((response)=>{  
            console.log(response);
            navigate("/department");
            alert("department added succesfully");

        })
    
            .catch(error=>console.log(error));


    }

    return (

        <div>

            <h1>Add Department</h1>

            <form onSubmit={handleSubmit(addDepartment)}>

                <label> Department Name</label>

                   <input type="text" id="name"  {...register('name', {required: true})} />
                                 
                {errors.name && errors.name.type === "required"  && <span>Deparment name is required</span>}

                <br/>

                {/* <input type="submit" value="Add Department"></input> */}
<button onClick={addDepartment}>Submit</button>
            </form>

        </div>

    )

}

