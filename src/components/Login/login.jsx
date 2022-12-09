import React from 'react';
import { useState } from 'react';

const Login = () => {

    const [email,setUser]=useState('')
    const [pass,setPass]=useState('')

    const hendlerToken=async()=>{
        const user ={
            email:email,
            password:pass
        }
       let res=await fetch('https://reqres.in/api/users',{
        method:'post',
        headers:{'content-type':'application/json'},
        body:JSON.stringify(user)
        
    })
     res = await res.json()
     localStorage.setItem('token',res.token)

     }
          


    return (
        <div>
            <input onChange={(e)=>setUser(e.target.value)} type="text" />
            <input onChange={(e)=>setPass(e.target.value)} type="text" />
            <button onClick={hendlerToken} >Login</button>
        </div>
    );
    }

export default Login;
