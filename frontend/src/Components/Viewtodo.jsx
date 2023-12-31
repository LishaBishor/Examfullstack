
import React, { useEffect, useState } from 'react'
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import Header from './Header';

const Viewtodo = () => {
    const[todo,setTodo]=useState([]);
    const deleteTodo=(id)=>{
        axios.delete("http://localhost:7000/api/deletetodo/"+id) 
        .then((response)=>{
         if(response.data.message==="deleted sucessfully"){
             alert(response.data.message);
             window.location.reload(false);
         }
        })
        .catch(err=>console.log(err))
     }

    const fetchTododata=()=>{
        axios.get("http://localhost:7000/api/viewtodoAll")
       .then((response)=>{
        console.log(response.data)
       setTodo(response.data);
       })
    }
    useEffect(()=>{
        fetchTododata();
    },[])
  return (
    <div  style={{paddingTop:"100px"}} className='App'>
        <Header/>
        <TableContainer>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{fontfamily:"cursive", color:'red'}}>Title</TableCell>
                        <TableCell  style={{fontfamily:"cursive", color:'red'}}>EmployeeId</TableCell>
                        <TableCell  style={{fontfamily:"cursive", color:'red'}}>Status</TableCell>
                        
                       
                    </TableRow>
                </TableHead>
                <TableBody>
                    {todo.map((val,index)=>{
                        return<TableRow key={index}>
                            <TableCell>{val.title}</TableCell>
                            <TableCell>{val.userid}</TableCell>
                            <TableCell>{val.completed}</TableCell>
                            <TableCell ><Button style={{fontfamily:"cursive", color:'red'}} onClick={()=>deleteTodo(val._id)}>Delete</Button></TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </div>
  )
}

export default Viewtodo