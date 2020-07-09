import React, { Component } from 'react'
import { Drawer, Form, Col, Row, Select, Typography, Statistic, Button } from "antd";

export class UpdateEmployeeForm extends Component {

  componentWillReceiveProps(nextProps) {

    if (nextProps.show) {
      this.setState({
        show: true
      })
    }
  }
  
  state = {
    show: false
  }
  render() {
    return (
      <div>
        <Drawer
          title="Update Defect Details"
          width={720}
          onClose={this.onClose}
          visible={this.state.show}
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
              <Button onClick={(e) => this.handleSubmit(e)} type="primary">
                Update
              </Button>
            </div>
          }
        >
        </Drawer>
      </div>
    )
  }
}

export default UpdateEmployeeForm
