import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import { Table, Input, Button, Space, Tag } from 'antd';
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const data = [
    {
      key: '1',
      defectId: 'de11001',
      description: 'Please Fix the Update Button',
      type: 'Frontend',
      status: ['Open'],
      severity: 'Low',
      priority: 'High',
      enteredBy: 'Lavanjan',
      assignTo: 'Sivapiriyan',
    },
    {
      key: '2',
      defectId: 'de11002',
      description: 'Please Fix the Labels',
      type: 'Backend',
      status: 'Close',
      severity: 'High',
      priority: 'Low',
      enteredBy: 'Sivapiriyan',
      assignTo: 'Lavanjan',
    },
    {
      key: '3',
      defectId: 'de11003',
      description: 'Please Fix the Backgrounds',
      type: 'Frontend',
      status: 'Fixed',
      severity: 'Medium',
      priority: 'Medium',
      enteredBy: 'Sanchigan',
      assignTo: 'Lavanjan',
    },
    {
      key: '4',
      defectId: 'de11004',
      description: 'Please Fix the Text Areas',
      type: 'Backend',
      status: 'Reopen',
      severity: 'High',
      priority: 'Medium',
      enteredBy: 'Lavanjan',
      assignTo: 'Gobiha',
    },
    {
      key: '5',
      defectId: 'de11005',
      description: 'Please Fix the Whole TextField',
      type: 'Backend',
      status: 'Fixed',
      severity: 'Low',
      priority: 'High',
      enteredBy: 'Sivapriyan',
      assignTo: 'Lavanjan',
    },
    {
      key: '6',
      defectId: 'de11006',
      description: 'Please Fix the Send Button',
      type: 'Frontend',
      status: 'Close',
      severity: 'Medium',
      priority: 'Low',
      enteredBy: 'Gobiha',
      assignTo: 'Sanchigan',
    },
    {
      key: '7',
      defectId: 'de11007',
      description: 'Please Fix the Back Button',
      type: 'Frontend',
      status: 'Open',
      severity: 'Low',
      priority: 'High',
      enteredBy: 'Sanchigan',
      assignTo: 'Lavanjan',
    },
    {
      key: '8',
      defectId: 'de11008',
      description: 'Please Fix the Text Fileds',
      type: 'Backend',
      status: 'Close',
      severity: 'High',
      priority: 'Low',
      enteredBy: 'Sivapiriyan',
      assignTo: 'Sanchigan',
    },
    {
      key: '9',
      defectId: 'de11009',
      description: 'Please Fix the Send Button',
      type: 'Frontend',
      status: 'Fixed',
      severity: 'High',
      priority: 'Medium',
      enteredBy: 'Lavanjan',
      assignTo: 'Sivapiriyan',
    },
  ];

export class ViewDefectDetails extends Component {
    state = {
        searchText: '',
        searchedColumn: '',
      };
    
      getColumnSearchProps = dataIndex => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
          <div style={{ padding: 8 }}>
            <Input
              ref={node => {
                this.searchInput = node;
              }}
              placeholder={`Search ${dataIndex}`}
              value={selectedKeys[0]}
              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
              onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
              style={{ width: 188, marginBottom: 8, display: 'block' }}
            />
            <Space>
              <Button
                type="primary"
                onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                icon={<SearchOutlined />}
                size="small"
                style={{ width: 90 }}
              >
                Search
              </Button>
              <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{ width: 90 }}>
                Reset
              </Button>
            </Space>
          </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
        onFilter: (value, record) =>
          record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownVisibleChange: visible => {
          if (visible) {
            setTimeout(() => this.searchInput.select());
          }
        },
        render: text =>
          this.state.searchedColumn === dataIndex ? (
            <Highlighter
              highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
              searchWords={[this.state.searchText]}
              autoEscape
              textToHighlight={text.toString()}
            />
          ) : (
            text
          ),
      });
    
      handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
          searchText: selectedKeys[0],
          searchedColumn: dataIndex,
        });
      };
    
      handleReset = clearFilters => {
        clearFilters();
        this.setState({ searchText: '' });
      };
    
    render() {
        const columns = [
            {
              title: 'DefectID',
              dataIndex: 'defectId',
              dataIndex: 'defectId',
              key: '',
              ...this.getColumnSearchProps('defectId'),
            },
            {
              title: 'Description',
              dataIndex: 'description',
              key: 'description',
              ...this.getColumnSearchProps('description'),
            },
            {
              title: 'Type',
              dataIndex: 'type',
              key: 'type',
              ...this.getColumnSearchProps('type'),
            },
            {
              title: 'Tags',
              dataIndex: 'status',
              key: 'status',
              // render: (status) => (
              //   <>
              //   {status.map((tag) => {
              //     let color;
              //     if (tag === 'open'){
              //       color = 'volcano';
              //     } 
              //     return (
              //       <Tag color = {color} key = {tag}>
              //         {tag.toUpperCase()}
              //       </Tag> 
              //     );
              //   })}
              //   </>
                
              // ),
              // ...this.getColumnSearchProps('status'),
            },
            {
              title: 'Severity',
              dataIndex: 'severity',
              key: 'severity',
              ...this.getColumnSearchProps('severity'),
            },
            {
              title: 'Priority',
              dataIndex: 'priority',
              key: 'priority',
              ...this.getColumnSearchProps('priority'),
            },
            {
              title: 'EnteredBy',
              dataIndex: 'enteredBy',
              key: 'enteredBy',
              ...this.getColumnSearchProps('enteredBy'),
            },
            {
              title: 'Assign To',
              dataIndex: 'assignTo',
              key: 'assignTo',
              ...this.getColumnSearchProps('assignTo'),
            },
          ];
        return (
        <div>
          <Link to = "/add-defect">
        <Button
          type="primary"
          style={{
            marginBottom: 16,
          }}
        >
          Add New Defect
        </Button>
        </Link>
        <Table columns={columns} dataSource={data} />
        </div>
        );
    }
}

export default ViewDefectDetails
