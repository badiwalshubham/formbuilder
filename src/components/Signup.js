"use client";
import React from 'react'
import { useState } from 'react'
import { Button, Checkbox, FormControlLabel, TextField, Typography } from '@mui/material'
import './components.css'
import SideImg from '../assets/th.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {

  const history = useRouter();

  const [inpval, setInpval] = useState({
    name: "",
    email: "",
    password: ""
  })

  const [data, setData] = useState([]);
  console.log(inpval);

  const getdata = (e) => {
    // console.log(e.target.value);


    const { value, name } = e.target;
    // console.log(value,name);


    setInpval(() => {
      return {
        ...inpval,
        [name]: value
      }
    })

  }

  const addData = (e) => {
    e.preventDefault();

    const { name, email, password } = inpval;

    if (name === "") {
      toast.error(' name field is requred!', {
        position: "top-center",
      });
    } else if (email === "") {
      toast.error('email field is requred', {
        position: "top-center",
      });
    } else if (!email.includes("@")) {
      toast.error('plz enter valid email addres', {
        position: "top-center",
      });
    } else if (password === "") {
      toast.error('password field is requred', {
        position: "top-center",
      });
    } else if (password.length < 5) {
      toast.error('password length greater five', {
        position: "top-center",
      });
    } else {
      console.log("data added succesfully");
      history.push('/login')
      localStorage.setItem("useryoutube", JSON.stringify([...data, inpval]));

    }

  }

  // const {register,handleSubmit,formState:{errors}}=useForm()



  return (
    <div className="Auth">
      <Image src={SideImg} alt="" onSubmit={addData} />

      <form action="" method="post"   >
        <Typography variant='h4'>Sign Up</Typography>
        <div className="formgroup">

          <TextField
            // {...register('name',{required:"Name Field Required",
            // maxLength:{value:15,message:'Maximun 15 Characters'}})} 
            sx={{ mb: 2.5 }} onChange={getdata}
            type='text' name='name' label="Name" color="success" variant="outlined" />
          {/* <Typography color="error" variant='span'>{errors?.name && errors.name.message}</Typography> */}

          <TextField
            // {...register('email',{required:"Email Field Required"})} 
            sx={{ mb: 2.5 }} onChange={getdata}
            type='email' name='email' label="Email" color="success" variant="outlined" />
          {/* <Typography color="error" variant='span'>{errors?.email && errors.email.message}</Typography> */}

          <TextField
            // {...register('psw',{required:"Password Field Required",
            // maxLength:{value:15,message:"Maximun 15 Characters"},
            // minLength:{value:4,message:"Minimun 4 Characters"}})} 
            sx={{ mb: 2.5 }} onChange={getdata}
            type='password' name='password' label="Password" color="success" variant="outlined" />
          {/* <Typography color="error" variant='span'>{errors?.psw && errors.psw.message}</Typography> */}

          {/* <FormControlLabel control={<Checkbox color="success"/>} label="Remember Me" /> */}
          <Button onClick={addData} type='submit' variant="contained">Create Account</Button>

        </div>
        <p className='mt-4'>Already Have an Account <span> <Link href="/login">Sign In</Link></span> </p>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Signup