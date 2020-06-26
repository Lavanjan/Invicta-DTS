import React, { Component } from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import "antd/dist/antd.css";
import "./../index.css";
import { Switch } from 'react-router-dom';

import Body from "./../components/body/body";

const { Header, Content, Footer } = Layout;

export class Layouts extends Component {
  render() {
    return (
      <div>
        <Layout className="layout">
          <Header>
            <div className="logo" />
            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
              <Menu.Item key="1">nav 1</Menu.Item>
              <Menu.Item key="2">nav 2</Menu.Item>
              <Menu.Item key="3">nav 3</Menu.Item>
            </Menu>
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
          <Footer style={{ textAlign: "center" }}>
            Invicta DTS ©2018 
          </Footer>
        </Layout>
      </div>
    );
  }
}

export default Layouts;
