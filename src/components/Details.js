"use client";
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation';
import { Card, CardContent, CardHeader, } from '@mui/material';
import Button from '@mui/material/Button';
import Dashboard from '../app/Dashboard/page'

const Details = () => {

    const [logindata, setLoginData] = useState([]);


    const history = useRouter();

    const [show, setShow] = useState(false);

    var todayDate = new Date().toISOString().slice(0, 10);
  

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const Birthday = () => {
        const getuser = localStorage.getItem("user_login");
        if (getuser && getuser.length) {
            const user = JSON.parse(getuser);
         
            setLoginData(user);


            const userbirth = logindata.map((el, k) => {
                return el.date === todayDate
            });

            if (userbirth) {
                setTimeout(() => {
                    console.log("ok");
                    handleShow();
                }, 3000)
            }
        }
    }

    const userlogout = ()=>{
        localStorage.removeItem("user_login")
        history("/");
    }

    useEffect(() => {
        Birthday();
    }, [])

    return (
        <>
            {
                logindata.length === 0 ? "errror" :
                    <>
                        <h1>detials page</h1>
                        <h1>{logindata[0].name}</h1>
                        <Button onClick={userlogout}>LogOut</Button>
                        <Dashboard/>

                {
                    logindata[0].date === todayDate ? 
                    <Card show={show} onHide={handleClose}>
                            <CardHeader closeButton>
                                <title>{logindata[0].name} 😄</title>
                            </CardHeader>
                            <CardContent>Wish you many many happy returns of the day ! 🍰</CardContent>
                            <Card>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                                <Button variant="primary" onClick={handleClose}>
                                    Save Changes
                                </Button>
                            </Card>
                        </Card>:""
                }   
                     
                    </>
            }
        </>
    )
}

export default Details






















