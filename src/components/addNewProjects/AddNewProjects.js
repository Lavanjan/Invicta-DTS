import React, { Component } from "react";
import { Typography } from "antd";
import { Form, Input, Button, Select, message } from "antd";
import { PageHeader } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import { AppstoreAddOutlined } from "@ant-design/icons";

const success = () => {
  message.success("This is a success message");
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

const employees = ["Lavanjan", "Sivapiriyan", "Sansjigan", "Gobiha"];

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not validate email!",
    number: "${label} is not a validate number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};
export class AddNewProjects extends Component {
  // constructor(props) {
  //     super(props)
  state = {
    nameOfTheProject: "",
    employeeAllocation: [],
    description: "",
  };

  handleSubmit = (event) => {
    console.log(this.state.name);
    message.success("This is a success message");
    event.preventDefault();
  };
  render() {
    const { employeeAllocation } = this.state;
    const filteredOptions = employees.filter(
      (o) => !employeeAllocation.includes(o)
    );
    const { size } = this.state;

    return (
      <div>
        <Form
          onFinish={this.handleSubmit}
          {...layout}
          autoComplete="off"
          name="nest-messages"
          validateMessages={validateMessages}
        >
          <Form.Item
            name="nameOfTheProject"
            label="Name of the Project"
            value={this.state.nameOfTheProject}
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input placeholder="Name of the project" />
          </Form.Item>

          <Form.Item
            name="employeeAllocation"
            label="Employees"
            value={this.state.employeeAllocation}
            onChange={this.handleChange}
          >
            <Select
              mode="multiple"
              style={{ width: "100%" }}
              placeholder="Select Employees for this project"
              onChange={this.handleChange}
              allowClear={true}
            >
              {filteredOptions.map((data) => (
                <Select.Option key={data} value={data}>
                  {data}
                </Select.Option>
              ))}
            </Select>
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
              placeholder="Enter the description about project"
              autoSize={{ minRows: 7, maxRows: 5 }}
            />
          </Form.Item>
          <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 14 }}>
            <Button type="danger">
              <CloseCircleOutlined />
              Cancel
            </Button>
            &nbsp;
            <Button
              type="submit"
              htmlType="submit"
              icon={<AppstoreAddOutlined />}
            >
              Create
            </Button>
          </Form.Item>
        </Form>
      </div>
    );
  }
}

export default AddNewProjects;
