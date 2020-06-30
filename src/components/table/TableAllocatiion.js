import React from 'react'
import {Select, Table, Popconfirm } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';


// const newEmployees = [...this.props.employees, this.state.newEmployee];
// const data = newEmployees.map(emp => {
//     return <td>
//         {emp}
//     </td>
// })
const { Option } = Select;

export default function TableAllocatiion() {

    // handleDelete = key => {
    //     const dataSource = [...this.state.dataSource];
    //     this.setState({
    //         dataSource: dataSource.filter(item => item.key !== key),
    //     });
    // };

    const dataSource= [
        {
            name:'siva'
        }
        
    ]

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            width: '30%',

        },
        {
            title: 'Roll As',
            dataIndex: 'roll-as',
            render: (text, record) =>
               dataSource >= 1 ? (
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
                dataSource >= 1 ? (
                    <Popconfirm title="Sure to delete?" >
                        <a><DeleteOutlined /></a>
                    </Popconfirm>
                ) : null,
        },

    ];
   

    return (
        <div>
            <Table
                    
                    bordered
                    dataSource={dataSource}
                    columns={columns}
                    style={{ width: 800, marginLeft: 200 }}
                />
        </div>
    )
}
