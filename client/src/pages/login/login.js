
import React, { useEffect } from "react";
import {Button, Form, Input, message} from 'antd';
import {Link, useNavigate} from 'react-router-dom';
import { loginUser } from "../../api/users";

function Login() {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("token")){
            navigate("/")
        }
    }, [])

    const submitData = async (values) => {
        console.log("Login Data: ", values)
        try {
            const response = await loginUser(values)
            if(response.success){
                message.success(response['message'])
                // navigate("/")
            } else {
                message.error(response.message)
            }
        } catch(err){
            message.error(err)
        }
    }
  
    return (
        <>
            <header className="App-header">
                <main className="main-area" mw-500 text-center px-3>
                    <section className="left-section" >
                        <h1>Welcome Back To BookMyShow</h1>
                    </section>
                    <section className="right-section">
                        <Form layout="vertical" onFinish={submitData}>
                            <Form.Item label="Email" htmlFor="email" name="email" className="d-block" rules={[{required: true, message: "Email is mandatory"}]}>
                                <Input id="email" type="text" placeholder="Email goes here" ></Input>

                            </Form.Item>
                            <Form.Item label="Password" htmlFor="password" name="password" className="d-block" rules={[{required: true, message: "Passsword is mandatory"}]}>
                                <Input id="password" type="password" placeholder="Password goes here" ></Input>

                            </Form.Item>
                            <Form.Item className="d-block" >
                                <Button type="primary" block htmlType="submit" style={{fontSize: '1rem', fontWeight: 600}}>
                                    Login
                                </Button>
                            </Form.Item>
                        </Form>
                        <div>
                            <p>
                                New User? <Link to="/registration">Register Now</Link>
                            </p>
                        </div>
                    </section>
                </main>
            </header>
        </>
    )
}

export default Login;
