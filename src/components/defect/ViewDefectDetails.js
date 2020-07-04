import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Table, Input, Button, Space, Tag } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined, SyncOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Drawer, Form, Col, Row, Select, Typography } from "antd";
import axios from "axios";
import AddDefectDetailsForm from './AddDefectDetailsForm'

const { Text } = Typography;
const { Option } = Select;

export class ViewDefectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      defectsId: "",
      defectsName: "",
      stepsToRecreate: "",
      type: "",
      status: "",
      severity: "",
      priority: "",
      enteredBy: "",
      foundIn: "",
      availableIn: "",
      high:"High",
      medium:"Medium",
      low:"low",

      searchText: "",
      searchedColumn: "",
      visible: false,
      data: [],
      loading: false,
      show:false
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.errors) {
      this.setState({ errors: nextProps.errors });
    }
    // const {
    //   defectsId,
    //   defectsName,
    //   stepsToRecreate,
    //   type,
    //   status,
    //   severity,
    //   priority,
    //   enteredBy,
    //   foundIn,
    //   availableIn,
    // } = nextProps.defects_task;
    
    // this.setState({
    //   defectsId,
    //   defectsName,
    //   stepsToRecreate,
    //   type,
    //   status,
    //   severity,
    //   priority,
    //   enteredBy,
    //   foundIn,
    //   availableIn,
    // });
  }

  componentDidMount() {
    const { dt_id } = this.props.match.params;
    this.props.getDefectDetails(dt_id);
  }

  onSubmit(e) {
    e.preventDefault();
    const updateDefects = {
      defectId: this.state.defectsId,
      defectsName: this.state.defectsName,
      stepsToRecreate: this.state.stepsToRecreate,
      type: this.state.type,
      status: this.state.status,
      severity: this.state.severity,
      priority: this.state.priority,
      enteredBy: this.state.enteredBy,
      foundIn: this.state.foundIn,
      availableIn: this.state.availableIn,
    };
  }
  create = (data) => {
    axios.post("http://localhost:5000/defects", data).then((res) => {
      console.log(res);
    });
  };

  getAll() {
    axios.get("http://localhost:5000/defects").then((res) => {
      // console.log(res.data);
      this.setState({
        data: res.data,
      });
    });
  }

  componentDidMount() {
    this.getAll();
  }

  showDrawer = () => {
    this.setState({
      visible: true,    
    });
  };

  showDrawerDefectform = () => {
    this.setState({      
      show: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false,
    });
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
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
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select());
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
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

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  render() {
    const columns = [
      {
        title: "DefectID",
        dataIndex: "defectsId",
        key: "defectsId",
        sorter: (a, b) => a.defectsId - b.defectsId,
        defaultSortOrder: "descend",
        sortDirections: ["descend", "ascend"],
        ...this.getColumnSearchProps("defectId"),
      },
      {
        title: "Defect",
        dataIndex: "defectsName",
        key: "defectsName",
        ...this.getColumnSearchProps("description"),
      },
      {
        title: "Type",
        dataIndex: "type",
        key: "type",
        filters: [
          {
            text: "Front End",
            value: "Front End",
          },
          {
            text: "Back End",
            value: "Back End",
          },
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.type.indexOf(value) === 0,
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        filters: [
          {
            text: "New",
            value: "New",
          },
          {
            text: "Open",
            value: "Open",
          },
          {
            text: "Fixed",
            value: "Fixed",
          },
          {
            text: "Closed",
            value: "Closed",
          },
          {
            text: "Re-open",
            value: "Re-open",
          },
          {
            text: "Postpone",
            value: "Postpone",
          },
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.status.indexOf(value) === 0,
        render:(value,record)=> {
          switch (record.status) {
              case "New": return <Tag color="geekblue">New</Tag>;
              case "Open": return <Tag color="orange">Medium</Tag>;
              case "Fixed": return <Tag color="green">Fixed</Tag>;
              case "Closed": return <Tag color="lime">Closed</Tag>;
              case "Re-open": return <Tag color="purple">Re-open</Tag>;
              case "Postpone": return <Tag color="cyan">Postpone</Tag>;

          }
      }  
        

        
      },
      {
        title: "Severity",
        dataIndex: "severity",
        key: "severity",
        filters: [
          {
            text: "High",
            value: "High",
          },
          {
            text: "Medium",
            value: "Medium",
          },
          {
            text: "Low",
            value: "Low",
          },
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.severity.indexOf(value) === 0,
        render:(value,record)=> {
          switch (record.severity) {
              case "High": return <Tag color="red">High</Tag>;
              case "Medium": return <Tag color="orange">Medium</Tag>;
              case "Low": return <Tag color="green">Low</Tag>;

          }
      }       
      },
      {
        title: "Priority",
        dataIndex: "priority",
        key: "priority",
        filters: [
          {
            text: "High",
            value: "High",
          },
          {
            text: "Medium",
            value: "Medium",
          },
          {
            text: "Low",
            value: "Low",
          },
        ],
        filterMultiple: false,
        onFilter: (value, record) => record.priority.indexOf(value) === 0,
        render:(value,record)=> {
          switch (record.priority) {
              case "High": return <Tag color="red">High</Tag>;
              case "Medium": return <Tag color="orange">Medium</Tag>;
              case "Low": return <Tag color="green">Low</Tag>;

          }
      } 
      },
      {
        title: "EnteredBy",
        dataIndex: "enteredBy",
        key: "enteredBy",
        ...this.getColumnSearchProps("enteredBy"),
      },
      {
        title: "Assign To",
        dataIndex: "assignTo",
        key: "assignTo",
        ...this.getColumnSearchProps("assignTo"),
      },
      {
        title: "View",
        dataIndex: "view",
        key: "view",
        render: () => <a onClick={this.showDrawer}>View</a>,
      },
    ];
    return (
      <Fragment>
        <div>
          <Link>
            <Button
              type="primary"
              style={{
                marginBottom: 16,
              }}
              onClick={(this.showDrawerDefectform)}
            >
              Add New Defect
            </Button>
          </Link>
          <Text style={{ marginLeft: "940px" }} mark>
            Total Defects: 20
          </Text>
          <Table columns={columns} dataSource={this.state.data} />
        </div>
        

        <Drawer
          title="Update Defect Details"
          width={720}
          onClose={this.onClose}
          visible={this.state.visible}
          bodyStyle={{ paddingBottom: 80 }}
          footer={
            <div
              style={{
                textAlign: "right",
              }}
            >
              <Button onClick={this.onClose} style={{ marginRight: 8 }}>
                Cancel
              </Button>
              <Button onClick={this.onClose} type="primary">
                Update
              </Button>
            </div>
          }
        >
          <Form layout="vertical" hideRequiredMark>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item>
                  <Tag color="#2db7f5">Defect ID : de11005</Tag>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
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
                  <Input placeholder="Defect" name="defectsName" />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="stepsToRecreate"
                  label="Steps To Recreate"
                  rules={[
                    {
                      required: true,
                      message: "please enter the steps to recreate",
                    },
                  ]}
                >
                  <Input.TextArea
                    name="stepsToRecreate"
                    rows={4}
                    placeholder="please enter the steps to recreate"
                  />
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Type"
                  value={this.state.type}
                  onChange={this.handleChange}
                  rules={[{ required: true, message: "Please select an Type" }]}
                >
                  <Select placeholder="Please select an Type" name="type">
                    <Option value="Front-End">Fontend</Option>  
                    <Option value="Back-End">Backend</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="status"
                  label="Status"
                  rules={[
                    { required: true, message: "Please choose the status" },
                  ]}
                >
                  <Select placeholder="Please choose the status" name="status">
                    <Option value="New">New</Option>
                    <Option value="Open">Open</Option>
                    <Option value="Fixed">Fixed</Option>
                    <Option value="Closed">Closed</Option>
                    <Option value="Re-open">Re-open</Option>
                    <Option value="Postpone">Postpone</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="serverity"
                  label="Serverity"
                  rules={[
                    { required: true, message: "Please choose the serverity" },
                  ]}
                >
                  <Select
                    placeholder="Please choose the serverity"
                    name="serverity"
                  >
                    <Option value="High">High</Option>
                    <Option value="Medium">Medium</Option>
                    <Option value="Low">Low</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="priority"
                  label="Priority"
                  rules={[
                    { required: true, message: "Please choose the priority" },
                  ]}
                >
                  <Select
                    placeholder="Please choose the priority"
                    name="priority"
                  >
                    <Option value="High">High</Option>
                    <Option value="Medium">Medium</Option>
                    <Option value="Low">Low</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="enteredBy"
                  label="Entered By"
                  rules={[
                    { required: true, message: "Please choose the entered by" },
                  ]}
                >
                  <Select
                    placeholder="Please choose the entered by"
                    name="enteredBy"
                  >
                    <Option value="Sanjsijan">Sanjsijan</Option>
                    <Option value="Lavanjan">Lavanjan</Option>
                    <Option value="Sivapiriyan">Sivapiriyan</Option>
                    <Option value="Gobika">Gobika</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="assignTo"
                  label="AssignTo"
                  rules={[
                    { required: true, message: "Please choose the assign to" },
                  ]}
                >
                  <Select
                    placeholder="Please choose the assign to"
                    name="assignTo"
                  >
                    <Option value="Sanjsijan">Sanjsijan</Option>
                    <Option value="Lavanjan">Lavanjan</Option>
                    <Option value="Sivapiriyan">Sivapiriyan</Option>
                    <Option value="Gobika">Gobika</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="foundIn"
                  label="Found In"
                  rules={[
                    { required: true, message: "Please choose the found in" },
                  ]}
                >
                  <Select
                    placeholder="Please choose the found in"
                    name="foundIn"
                  >
                    <Option value="Rel-1">Rel-1</Option>
                    <Option value="Rel-2">Rel-2</Option>
                    <Option value="Rel-3">Rel-3</Option>
                    <Option value="Rel-4">Rel-4</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="availableIn"
                  label="Available In"
                  rules={[
                    {
                      required: true,
                      message: "Please choose the available in",
                    },
                  ]}
                >
                  <Select
                    placeholder="Please choose the available in"
                    name="availableIn"
                  >
                    <Option value="Rel-1">Rel-1</Option>
                    <Option value="Rel-2">Rel-2</Option>
                    <Option value="Rel-3">Rel-3</Option>
                    <Option value="Rel-4">Rel-4</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Drawer>
        <AddDefectDetailsForm show={this.state.show} data={this.state.data}/>
        {/*  */}
      </Fragment>
    );
  }
}

export default ViewDefectDetails;
