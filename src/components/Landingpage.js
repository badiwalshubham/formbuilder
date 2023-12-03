"use client";
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Dashboard from '../app/Dashboard/page'
import { Card, CardContent, CardHeader, Button, Modal, Typography, Box, AppBar, Toolbar, Chip } from '@mui/material';


const Landingpage = () => {

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

    const userlogout = () => {
        localStorage.removeItem("user_login")
        history.push('/login');
    }

    useEffect(() => {
        Birthday();
    }, [])

    return (
        <>
            {
                logindata.length === 0 ? "Error" :
                    <>
                        <AppBar position="fixed" >
                            <Toolbar style={{ marginBottom: 0 }}>
                                <Typography variant="h6">Dyano Form Builder </Typography>
                                <Box flexGrow={1} />
                                <Chip sx={{ mr: '2rem', backgroundColor: 'white' }} color='info'
                                    label={logindata.length > 0 && logindata[0].name}
                                    variant="outlined"
                                />  
                                 <Button sx={{ mr: '2rem', backgroundColor: 'white' }}> Form &nbsp; <Dashboard  /> </Button>
                                <Button sx={{ mr: '2rem', backgroundColor: 'white' }} onClick={userlogout}>LogOut</Button>
                            </Toolbar>
                        </AppBar>
                       
                       
                         
                        
                    </>
            }
        </>
    )
}

export default Landingpage






















