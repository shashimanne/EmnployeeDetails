import { useParams } from 'react-router-dom';
import React, {useState} from 'react'

export const Greet = () => {
    const {name}=useParams();
    const [count , setCount] = useState(0);




    return (
        <div><h1> {name}</h1>
        <h2>{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}