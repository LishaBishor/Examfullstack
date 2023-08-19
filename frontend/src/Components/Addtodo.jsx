
import React, { useState } from 'react'
import Header from './Header'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Addtodo = () => {
    
    const navigate=useNavigate();
    const[todo,setTodo]=useState()
    const inputHandler=(e)=>{
        
        setTodo({
           ...todo,[e.target.name]:e.target.value
        })
        console.log(todo)
    }
    const addEmp=()=>{
       
       
        console.log("add clicked")
        
        axios.post("/api/addtodo",todo)
        .then((response)=>{
            console.log(response)
            if(response.data.message==="Added Successfully"){
                alert(response.data.message)
                navigate("/viewtodo")
            }
            else{
                alert(response.data.message)
            }
        })
        .catch(err=>console.log(err))
    
  
}
  return (
    <div style={{paddingTop:"100px"}} className='App'>
         <Header/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12">
                    <div className="row g-3">
                        
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor=''className='form-label'>Title</label>  
                        <input type='text' className='form-control' name='title'  onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor=''className='form-label'>id</label>  
                        <input type='text' className='form-control' name='id'  onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor=''className='form-label'>UserId</label>  
                        <input type='text' className='form-control' name='userid'  onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-6 col-md-6 col-lg-6">
                        <label htmlFor=''className='form-label'>StatusCompleted</label>  
                        <input type='text' className='form-control' name='completed'  onChange={inputHandler}/>
                        </div>
                       
                        <div className=" col-12 col-sm-6 col-md-6 col-ig-6">
                        <button className="btn btn-danger" onClick={addEmp} >Add</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Addtodo