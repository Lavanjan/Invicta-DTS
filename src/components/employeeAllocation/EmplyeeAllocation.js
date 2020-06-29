import React, { Component } from 'react'
import { Form, Input, Button, Select,Table,Popconfirm} from 'antd';
import { PlusCircleOutlined, ClearOutlined } from '@ant-design/icons';
import {DeleteOutlined} from '@ant-design/icons';
import { PageHeader } from 'antd';



const layout = {
    labelCol: {
        span: 10,
    },
    wrapperCol: {
        span: 16,
    },
};

const { Option } = Select;
export class EmplyeeAllocation extends Component {
    constructor(props) {
        super(props);
        this.state={
            items:[],
            currentItem:{
                text:[],
                key:''
            }
            
        }        
        this.columns = [
            {
                title: 'Name',
                dataIndex: 'name',
                width: '30%',               
                
            },
            {
                title: 'Roll As',
                dataIndex: 'roll-as',
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Select
                            showSearch
                            style={{ width: 200 }}
                            placeholder="Select Roll As"
                            optionFilterProp="children"                            
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="04">Project Manager</Option>
                            <Option value="05">Team Lead</Option>
                        </Select>
                    ) : null,
            },                    
            {
                title: 'Operation',
                dataIndex: 'operation',
                render: (text, record) =>
                    this.state.dataSource.length >= 1 ? (
                        <Popconfirm title="Sure to delete?" onConfirm={() => this.handleDelete(record.key)}>
                            <a><DeleteOutlined /></a>
                        </Popconfirm>
                    ) : null,
            },
            
        ];
        // this.state = {
        //     dataSource: [
        //         {
        //             key: '0',
        //             name: 'Edward King 0',
                    
                    
        //         },
        //         {
        //             key: '1',
        //             name: 'Edward King 1',
                    
                    
        //         },
        //     ],
        //     count: 2,
        // };
    }

    handleDelete = key => {
        const dataSource = [...this.state.dataSource];
        this.setState({
            dataSource: dataSource.filter(item => item.key !== key),
        });
    };
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };   
    
    render() {
        const { dataSource } = this.state;        
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="Allocate Employees"
                />
                <Form {...layout} name="employee-allocation" onFinish={this.onAdd}>
                    <Form.Item
                        name="project"
                        label="Project"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select
                            showSearch
                            style={{ width: 400 }}
                            placeholder="Select a Project"
                            optionFilterProp="children"  
                            name="project"
                            value={this.state.project}
                            onSelect={this.handleChange}                                       
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="01">Project-01</Option>
                            <Option value="02">Project-02</Option>
                            <Option value="03">Project-03</Option>
                            <Option value="04">Project-04</Option>
                            <Option value="05">Project-05</Option>
                        </Select>,
                </Form.Item>
                    <Form.Item
                        name="select-employee"
                        label="Select Employee"
                        rules={[
                            {
                                required: true,
                            }
                        ]}>
                        <Select                            
                            mode="multiple"
                            style={{ width: 400 }}
                            placeholder="Please select"
                            placeholder="Select a Employee"
                            optionFilterProp="children"                   
                            name="employee"
                            value={this.state.employee}
                            onChange={this.handleChange}             
                            
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="01">Employee-01</Option>
                            <Option value="02">Employee-02</Option>
                            <Option value="03">Employee-03</Option>
                            <Option value="04">Employee-04</Option>
                            <Option value="05">Employee-05</Option>
                            <Option value="06">sivapiriyan-05</Option>
                            <Option value="07">sivathanushan-05</Option>
                            <Option value="08">sivakumar-05</Option>
                        </Select>
                        &nbsp;
                        <Button type="primary" htmlType="submit" style={{ width: 100 }}>
                            <PlusCircleOutlined />  Add 
                        </Button>
                    </Form.Item>                    
                </Form>
                <Table                    
                    // components={components}                    
                    bordered
                    dataSource={dataSource}
                    columns={this.columns}
                    style={{width:800,marginLeft:200}}
                />
            

            </div >
        )
    }
}

export default EmplyeeAllocation