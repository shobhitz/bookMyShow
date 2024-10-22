import React from "react";
import {Button, Form, Input, message} from 'antd';
import {Link} from 'react-router-dom';
import { registerUser } from "../../api/users";

function Registration() {

    const submitData = async (values) => {
        console.log("Registration Data: ", values)
        try {
            const response = await registerUser(values)
            if(response.success){
                message.success(response['message'])
            } else {
                message.error(response.message)
            }
        } catch(err){
            message.error(err)
        }
    }

    return (
    <header className="App-header">
            <main className="main-area" mw-500 text-center px-3>
                <section className="left-section" >
                    <h1>Register To BookMyShow</h1>
                </section>
                <section className="right-section">
                    <Form layout="vertical" onFinish={submitData}>
                    <Form.Item label="Name" htmlFor="name" name="Name" className="d-block" rules={[{required: true, message: "Name is mandatory"}]}>
                            <Input id="name" type="text" placeholder="Name goes here" ></Input>
                        </Form.Item>
                        <Form.Item label="Email" htmlFor="email" name="Email" className="d-block" rules={[{required: true, message: "Email is mandatory"}]}>
                            <Input id="email" type="text" placeholder="Email goes here" ></Input>
                        </Form.Item>
                        <Form.Item label="Password" htmlFor="password" name="Password" className="d-block" rules={[{required: true, message: "Passsword is mandatory"}]}>
                            <Input id="password" type="password" placeholder="Password goes here" ></Input>
                        </Form.Item>
                        <Form.Item className="d-block" >
                            <Button type="primary" block htmlType="submit" style={{fontSize: '1rem', fontWeight: 600}}>
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                    <div>
                        <p>
                            Already a user? <Link to="/login">Login</Link>
                        </p>
                    </div>
                </section>
            </main>
        </header>
)
}

export default Registration;