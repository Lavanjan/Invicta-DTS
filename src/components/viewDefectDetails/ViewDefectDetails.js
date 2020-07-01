import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { Table, Input, Button, Space, Tag } from "antd";
import Highlighter from "react-highlight-words";
import { SearchOutlined } from "@ant-design/icons";
import "antd/dist/antd.css";
import { Drawer, Form, Col, Row, Select, DatePicker } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import axios from "axios";

const { Option } = Select;

export class ViewDefectDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      searchedColumn: "",
      visible: false,
      data: [],
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
        ...this.getColumnSearchProps("type"),
      },
      {
        title: "Status",
        dataIndex: "status",
        key: "status",
        ...this.getColumnSearchProps("status"),
      },
      {
        title: "Severity",
        dataIndex: "severity",
        key: "severity",
        ...this.getColumnSearchProps("severity"),
      },
      {
        title: "Priority",
        dataIndex: "priority",
        key: "priority",
        ...this.getColumnSearchProps("priority"),
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
        title: "Edit",
        dataIndex: "edit",
        key: "edit",
        render: () => <a onClick={(this.showDrawer)}>Edit</a>,
      },
    ];
    return (
      <Fragment>
        <div>
          <Link to="/add-defect">
            <Button
              type="primary"
              style={{
                marginBottom: 16,
              }}
            >
              Add New Defect
            </Button>
          </Link>
          <Table columns={columns} dataSource={this.state.data} />
        </div>

        {/*  */}
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
                  <Input placeholder="Defect" />
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
                  <Select placeholder="Please select an Type">
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
                  <Select placeholder="Please choose the status">
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
                  <Select placeholder="Please choose the serverity">
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
                  <Select placeholder="Please choose the priority">
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
                  <Select placeholder="Please choose the entered by">
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
                  <Select placeholder="Please choose the assign to">
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
                  <Select placeholder="Please choose the found in">
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
                  <Select placeholder="Please choose the available in">
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
        {/*  */}
      </Fragment>
    );
  }
}

export default ViewDefectDetails;
