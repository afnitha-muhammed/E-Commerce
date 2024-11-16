import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import shopping from '../assets/shopping.jpg';
import axios from 'axios';

function Auth() {
    const navigate = useNavigate()
    const [user, setUser] = useState()
    const [userDetails, setuser] = useState({
        username: "",
        password: ""
    })

    const handleSubmit = async e => {
        e.preventDefault();
        const { username, password } = userDetails
        if (!username || !password) {
            toast.info("Please Fill the form Completely")

        }
        else {
            const user = { username, password };
            console.log(user);
            // send the username and password to the server
            const response = await axios.post(
                "https://fakestoreapi.com/users",
                user
            );
            // set the state of the user
            // setUser(response.data)
            // console.log(response)
            
            // store the user in localStorage
            if( user.username == 'mor_2314' || user.password == '83r5^_')
                {
            sessionStorage.setItem('username', username)
            sessionStorage.setItem('token', true)
            console.log(response)
            toast.info("Login Sucessfull")
            setuser({
                                email: "",
                                password: ""
                            })
                            navigate('/')
        }
            else{
                alert('Invalid Username or Password')
            }
        }}
        return (
            <div>

                <div className="container-fluid bg-primary">
                    <div className="row">
                        <div className="col-md-1"></div>
                        <div className="col-md-10 my-5 bg-white rounded">
                            <div className="row">
                                <div className="col-md-6 p-3 d-flex align-items-center justify-content-center bg-white rounded">
                                    <img src={shopping} alt="" width={'100%'} />
                                </div>
                                <div className="col-md-6 p-5">
                                    <Card style={{ width: '100%' }} className='p-5 mt-3 d-flex align-items-center justify-content-center border-2 border-primary'>
                                        <Card.Body>
                                            <Card.Title>
                                                <div className='d-flex align-items-center justify-content-center'>
                                                    <img alt="" width={'200px'} className='imgg' />
                                                </div>
                                                <Link to={'/'} style={{textDecoration:'none'}}><h3 className='text-center'>E-CART</h3></Link>
                                                <h6 className='text-center text-secondary'>Sign in to Explore Shopping</h6>
                                            </Card.Title>
                                            <form action="" className='p-3'>
                                                <div className='my-3'>
                                                    <input type="text" className='form-control' placeholder='username' onChange={(e) => setuser({ ...userDetails, username: e.target.value })} />
                                                </div>
                                                <div className='my-3'>
                                                    <input type="text" className='form-control' placeholder='password' onChange={(e) => setuser({ ...userDetails, password: e.target.value })} />
                                                </div>
                                                <div className='d-flex align-items-center justify-content-center'>
                                                    <Button type='button' variant="primary" className='btn' onClick={handleSubmit}>Login</Button>
                                                </div>
                                            </form>

                                        </Card.Body>
                                    </Card>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>
                </div>
                <ToastContainer position='top-center' autoClose={2000} />
            </div>
        )
    }

    export default Auth
