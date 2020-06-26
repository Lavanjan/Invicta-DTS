import React, { Component } from 'react'
import { Typography } from 'antd';
import { Form, Input, Button, Select,message} from 'antd';
import { PageHeader } from 'antd';
import {PlusCircleOutlined,ClearOutlined} from '@ant-design/icons';

const success = () => {
    message.success('This is a success message');
  };
const { Option } = Select;
const { TextArea } = Input;
const { Title } = Typography;
const layout = {
    labelCol: {
        span: 7,
    },
    wrapperCol: {
        span: 11,
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
export class AddDefectDetails extends Component {

    constructor(props) {
        super(props)
        this.state = {
            
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmit = (event) => {
        alert("sss");
        message.success('This is a success message')
        event.preventDefault()
       }
    render() {

        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="Add New Defect"                    
                />              
                <Form {...layout} onFinish={this.handleSubmit} name="nest-messages" validateMessages={validateMessages}>
                    <Form.Item
                        name="defect"
                        label="Defect"
                        value={this.state.defect}
                        onChange={this.handleChange}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Input placeholder="Defect" />
                    </Form.Item>
                    <Form.Item
                        name="description"
                        label="Description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <TextArea
                            placeholder="Enter Brief Description"
                            autoSize={{ minRows: 3, maxRows: 5 }}
                        />
                    </Form.Item>
                    <Form.Item
                        name="type"
                        label="Type"
                        value={this.state.type}
                        onChange={this.handleChange}                        
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select defaultValue="Type" style={{ width: 550 }}>
                            <Option value="Front_End">Front End</Option>
                            <Option value="Back_End">Back End</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="status"
                        label="Status"
                        value={this.state.status}
                        onChange={this.handleChange}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select defaultValue="Status" style={{ width: 550 }}>
                            <Option value="New">New</Option>
                            <Option value="Open">Open</Option>
                            <Option value="Fixed">Fixed</Option>
                            <Option value="Closed">Closed</Option>
                            <Option value="Re-open">Re-open</Option>
                            <Option value="Postpone">Postpone</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="serverity"
                        label="Serverity"
                        value={this.state.serverity}
                        onChange={this.handleChange}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select defaultValue="Serverity" style={{ width: 550 }}>
                            <Option value="High">High</Option>
                            <Option value="Medium">Medium</Option>
                            <Option value="Low">Low</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="priority"
                        label="Priority"
                        value={this.state.priority}
                        onChange={this.handleChange}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select defaultValue="Priority" style={{ width: 550 }}>
                            <Option value="High">High</Option>
                            <Option value="Medium">Medium</Option>
                            <Option value="Low">Low</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        name="entered_By"
                        label="Entered By"
                        value={this.state.entered_By}
                        onChange={this.handleChange}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select defaultValue="Entered By" style={{ width: 550 }}>
                            <Option value="Sanjsijan">Sanjsijan</Option>
                            <Option value="Lavanjan">Lavanjan</Option>
                            <Option value="Sivapiriyan">Sivapiriyan</Option>
                            <Option value="Gobika">Gobika</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="assign_To"
                        label="Assign To"
                        value={this.state.assign_To}
                        onChange={this.handleChange}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select defaultValue="Assign To" style={{ width: 550 }}>
                            <Option value="Sanjsijan">Sanjsijan</Option>
                            <Option value="Lavanjan">Lavanjan</Option>
                            <Option value="Sivapiriyan">Sivapiriyan</Option>
                            <Option value="Gobika">Gobika</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="found_In"
                        label="Found In"
                        value={this.state.found_In}
                        onChange={this.handleChange}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select defaultValue="Found In" style={{ width: 550 }}>
                            <Option value="Rel-1">Rel-1</Option>
                            <Option value="Rel-2">Rel-2</Option>
                            <Option value="Rel-3">Rel-3</Option>
                            <Option value="Rel-4">Rel-4</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        name="available_In"
                        label="Aailable In"
                        value={this.state.available_In}
                        onChange={this.handleChange}
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select defaultValue="Available In" style={{ width: 550 }}>
                            <Option value="Rel-1">Rel-1</Option>
                            <Option value="Rel-2">Rel-2</Option>
                            <Option value="Rel-3">Rel-3</Option>
                            <Option value="Rel-4">Rel-4</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 14 }}>
                        <Button type="danger" style={{ width: 100 }}>
                            <ClearOutlined />
                            Clear
                        </Button>
                        &nbsp;
                        <Button type="primary" htmlType="submit" style={{ width: 100 }}>
                            <PlusCircleOutlined />  Submit
                        </Button>

                    </Form.Item>
                </Form>

            </div>
        )
    }
}

export default AddDefectDetails
