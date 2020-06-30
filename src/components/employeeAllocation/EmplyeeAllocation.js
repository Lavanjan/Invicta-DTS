import React, { Component } from 'react'
import { Form, Input, Button, Select, Popconfirm } from 'antd';
import { PlusCircleOutlined, ClearOutlined } from '@ant-design/icons';
import { PageHeader } from 'antd';
import Table from '../table/TableAllocatiion'

const layout = {
    labelCol: {
        span: 10,
    },
    wrapperCol: {
        span: 16,
    },
};

const validateMessages = {
    required: '${label} is required!',
}
const { Option } = Select;

export class EmplyeeAllocation extends Component {

    formRef = React.createRef();

    constructor(props) {

        super(props);
        this.state = {
            newEmployee: '',
            data: '',
            project: '',
            employees: '',
            currentEmployee: {
                empName: [],
                key: ''
            },
            dataSource: [],

        }        
    }

    handleChangeProject = (value) => {
        this.setState({
            project: value,
        });
    };
    handleChangeEmployee = (value) => {
        this.setState({
            currentEmployee: {
                empName: value,
                key: Date.now()
            }
        });
    }

    handleSubmit = (event) => {
        this.setState({
            newEmployee: this.state.currentEmployee.empName,
            currentEmployee: {
                empName: ''
            },

        })
        alert();


        this.formRef.current.resetFields();
    }

    render() {        
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="Allocate Employees"
                />
                <Form {...layout} name="employee-allocation" onFinish={this.handleSubmit} ref={this.formRef} validateMessages={validateMessages}>

                    <Form.Item
                        name="project"
                        label="Project"
                        rules={[
                            {
                                // required: true,
                            },
                        ]}
                    >
                        <Select
                            showSearch
                            style={{ width: 400 }}
                            placeholder="Select a Project"
                            optionFilterProp="children"
                            onChange={this.handleChangeProject}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="Project-01">Project-01</Option>
                            <Option value="Project-02">Project-02</Option>
                            <Option value="Project-03">Project-03</Option>
                            <Option value="Project-04">Project-04</Option>
                            <Option value="Project-05">Project-05</Option>
                        </Select>,
                </Form.Item>
                    <Form.Item
                        name="select-employee"
                        label="Select Employee"
                        rules={[
                            {
                                // required: true,
                            },
                        ]}>
                        <Select
                            mode="multiple"
                            style={{ width: 400 }}
                            placeholder="Please select"
                            placeholder="Select a Employee"
                            optionFilterProp="children"
                            onChange={this.handleChangeEmployee}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="sansikan">sansikan</Option>
                            <Option value="lavanjan">lavanjan</Option>
                            <Option value="sivapiriyan">sivapiriyan</Option>
                            <Option value="sivathanushan">sivathanushan</Option>
                            <Option value="sivakumar">sivakumar</Option>
                        </Select>
                        &nbsp;
                        <Button type="primary" htmlType="submit" style={{ width: 100 }}>
                            <PlusCircleOutlined />  Add
                        </Button>
                    </Form.Item>
                </Form>             

                            <Table />
            </div >
        )
    }
}

export default EmplyeeAllocation