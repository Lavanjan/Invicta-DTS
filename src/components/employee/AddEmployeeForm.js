import React, { Component } from 'react'
import { Form, Input, InputNumber, Button } from 'antd';
import { employee } from '.';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

export class AddEmployeeForm extends Component {
    state={
        id:'001',
        name:'',
        email:'',
        number:'',
        department:'',
        employee:''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,

        });
    }
    onFinish= (event) => {        
        
           const employee={
                employeeId:this.state.id,
                employeeName:this.state.name,
                employeeEmail:this.state.email,
                employeeMobileNumber:this.state.email,
                employeeDepartment:this.state.department
            }
    
        this.props.addemployee(employee);
        
        
    }
    render() {
        return (
            <div>
                <Form {...layout} name="nest-messages" onFinish={this.onFinish} validateMessages={validateMessages}>
                    <Form.Item
                        name="Name"
                        label="Name"
                        onChange={this.handleChange}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input name="name"/>
                    </Form.Item>
                    <Form.Item
                        name="Email"
                        onChange={this.handleChange}
                        label="Email"
                        rules={[
                            {
                                required:true
                            },
                        ]}
                    >
                        <Input name="email"/>
                    </Form.Item>
                    <Form.Item
                        name="Number"
                        onChange={this.handleChange}
                        label="Number"
                        rules={[
                            {
                                required:true
                            },
                        ]}
                    >
                        <Input name="number"/>
                    </Form.Item>
                    <Form.Item
                        name="Department"
                        onChange={this.handleChange}
                        label="Department"
                        rules={[
                            {
                                required:true
                            },
                        ]}
                    >
                        <Input name="department"/>
                    </Form.Item>                   
                    
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
                        <Button type="primary" htmlType="submit">
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default AddEmployeeForm
