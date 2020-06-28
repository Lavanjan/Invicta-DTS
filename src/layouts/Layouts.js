import React, { Component } from "react";
import { Layout, Menu, Breadcrumb, Dropdown, Col } from "antd";
import "antd/dist/antd.css";
import "./../index.css";
import { Switch } from "react-router-dom";
import { SettingOutlined, DownOutlined, UserOutlined, UserAddOutlined, AppstoreAddOutlined, UserSwitchOutlined } from "@ant-design/icons";

import Body from "./../components/body/body";

const { Header, Content, Footer } = Layout;
const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
      <UserOutlined />&nbsp;&nbsp;Profile
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        rel="noopener noreferrer"
        href="/add-projects"
      >
        <AppstoreAddOutlined />&nbsp;&nbsp;Add New Project
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="#"
      >
        <UserAddOutlined />&nbsp;&nbsp;Add New Employee
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="#">
      <UserSwitchOutlined />&nbsp;&nbsp;Employee Allocation
      </a>
    </Menu.Item>
  </Menu>
);

export class Layouts extends Component {
  state = {
    current: "mail",
  };
  handleClick = (e) => {
    console.log("click ", e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <div className="sub">
              <Dropdown overlay={menu}>
                <a
                  className="ant-dropdown-link"
                  onClick={(e) => e.preventDefault()}
                >
                  <SettingOutlined />&nbsp;Configuration <DownOutlined />
                </a>
              </Dropdown>
              
            </div>
          </Header>
          <Content style={{ padding: "0 50px" }}>
            <Breadcrumb style={{ margin: "16px 0" }}>
              <Breadcrumb.Item>Invicta Defect Tracker System</Breadcrumb.Item>
            </Breadcrumb>
            <div className="site-layout-content">
              <Switch>
                <Body />
              </Switch>
            </div>
          </Content>
          <Footer style={{ textAlign: "center" }}>Invicta DTS ©2018</Footer>
        </Layout>
      </div>
    );
  }
}

export default Layouts;
