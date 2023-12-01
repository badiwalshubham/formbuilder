"use client";
import React from 'react'
import { Button,Checkbox,FormControlLabel,TextField, Typography } from '@mui/material'
import './components.css'
import SideImg from '../assets/th.jpg'
import Image from 'next/image'

// import { useForm } from 'react-hook-form'

const Signin = () => {

  // const {register,handleSubmit,formState:{errors}}=useForm()
  // const onSubmit=(data)=>{
  //   console.log(data);
  // }

  return (
    <div className="Auth">
      <Image src={SideImg} alt="" />

      <form action="" method="post" >
        <Typography variant='h4'>Sign Up</Typography>
        <p>Explore new Features !</p>
        
        <div className="formgroup">
        
        <TextField 
        // {...register('name',{required:"Name Field Required",
        // maxLength:{value:15,message:'Maximun 15 Characters'}})} 
         sx={{mb:2.5}}
        type='text' label="Name" color="success" variant="outlined" />
        {/* <Typography color="error" variant='span'>{errors?.name && errors.name.message}</Typography> */}

        <TextField 
        // {...register('email',{required:"Email Field Required"})} 
        sx={{mb:2.5}}
        type='email' label="Email" color="success" variant="outlined" />
        {/* <Typography color="error" variant='span'>{errors?.email && errors.email.message}</Typography> */}

        <TextField 
        // {...register('psw',{required:"Password Field Required",
        // maxLength:{value:15,message:"Maximun 15 Characters"},
        // minLength:{value:4,message:"Minimun 4 Characters"}})} 
        sx={{mb:2.5}}
        type='password' label="Password" color="success" variant="outlined" />
        {/* <Typography color="error" variant='span'>{errors?.psw && errors.psw.message}</Typography> */}

        <FormControlLabel control={<Checkbox color="success"/>} label="Remember Me" />
        <Button type='submit' variant="contained">Create Account</Button>

        </div>
      </form>
    
    </div>
  )
}

export default Signin