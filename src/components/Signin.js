"use client";
import React from 'react'
import { Button,Checkbox,FormControlLabel,TextField, Typography } from '@mui/material'
import './components.css'
import { useState } from 'react'
import SideImg from '../assets/th.jpg'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { useForm } from 'react-hook-form'

const Signin = () => {

  const history = useRouter();

    const [inpval, setInpval] = useState({
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
        console.log(localStorage.getItem("useryoutube")); 
        const getuserArr = localStorage.getItem("useryoutube");
       

        const { email, password } = inpval;
        if (email === "") {
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
          
            if (getuserArr && getuserArr.length) {
            
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password
                });

                if (userlogin.length === 0) {
                    alert("invalid details")
                } else {
                    console.log("user login succesfulyy");

                    localStorage.setItem("user_login", JSON.stringify(userlogin))

                  history.push('/homepage')
                }
            }
        }

    }


  // const {register,handleSubmit,formState:{errors}}=useForm()
  

  return (
    <div className="Auth">
      <Image src={SideImg} alt="" />

      <form action="" method="post"  onSubmit={addData} >
        <Typography variant='h4'>Sign In</Typography>
        <div className="formgroup">

        <TextField 
        // {...register('email',{required:"Email Field Required"})} 
        sx={{mb:2.5}} onChange={getdata}
        type='email' name='email' label="Email" color="success" variant="outlined" />
        {/* <Typography color="error" variant='span'>{errors?.email && errors.email.message}</Typography> */}

        <TextField 
        // {...register('psw',{required:"Password Field Required",
        // maxLength:{value:15,message:"Maximun 15 Characters"},
        // minLength:{value:4,message:"Minimun 4 Characters"}})} 
        sx={{mb:2.5}} onChange={getdata}
        type='password' name='password' label="Password" color="success" variant="outlined" />
        {/* <Typography color="error" variant='span'>{errors?.psw && errors.psw.message}</Typography> */}

        {/* <FormControlLabel control={<Checkbox color="success"/>} label="Remember Me" /> */}
        <Button onClick={addData} type='submit' variant="contained">Login</Button>

        </div>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Signin