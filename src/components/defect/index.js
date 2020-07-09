import React, { Component } from 'react'
import {Button, Col, Row, Statistic } from "antd";
import { connect } from 'react-redux';
import { message } from 'antd';
import { adddefect } from '../redux/action/ActionDefect';
import ViewDefect from './ViewDefectDetails'
import AddDefect from './AddDefectDetailsForm'
import {   
    FallOutlined,
    RiseOutlined,
    StockOutlined,
    BugOutlined, 
    RadarChartOutlined,
  } from "@ant-design/icons";

export class defect extends Component {
    constructor(props) {
        super(props);
        this.state = {     
          show:false,
          low:'',
          high:'',
          medium:'',
          newdef:'',
          data:''

        };
      } 

    componentWillReceiveProps(nextProps) {
        if (nextProps.msg) {
            message.loading('Action in progress..')
                .then(() => message.success(nextProps.msg))
                .then(() => {
                    this.setState({
                        show: false
                    })
                })
                .then(() => {
                    window.location.reload()
                })
        }        
    }

    showDrawerDefectform = () => {
        this.setState({
          show: true,
        });
      };
      getdata = (childData) => {
        this.setState({
            low: childData.low,
            high:childData.high,
            medium:childData.medium,
            newdef:childData.newdef,
            data:childData.data
        })
     }
    render() {
        return (
            <div>
                <Row gutter={8}>
          <Col span={3}>
            <Button
              type="primary"
              ghost
              style={{
                marginBottom: 16,
                marginTop: 10,
              }}
              onClick={this.showDrawerDefectform}
            >
              Add New Defect
            </Button>
          </Col>
          <Col span={6}>
            <Button
              danger
              onClick={this.clearFilters}
              style={{
                marginBottom: 16,
                marginTop: 10,
              }}
            >
              Clear filters
            </Button>
          </Col>
          <Col span={3}>
            <Statistic
              title="High Severity"
              style={{ textAlign: "center" }}
              value={this.state.high}
              valueStyle={{ color: "red", textAlign: "center" }}
              prefix={<RiseOutlined />}
            ></Statistic>
          </Col>
          <Col span={3}>
            <Statistic
              title="Medium Severity"
              style={{ textAlign: "center" }}
              value={this.state.medium}
              valueStyle={{ color: "orange", textAlign: "center" }}
              prefix={<StockOutlined />}
            ></Statistic>
          </Col>
          <Col span={3}>
            <Statistic
              title="Low Severity"
              style={{ textAlign: "center" }}
              value={this.state.low}
              valueStyle={{ color: "green", textAlign: "center" }}
              prefix={<FallOutlined />}
            ></Statistic>
          </Col>
          <Col span={3}>
            <Statistic
              title="New Defects"
              style={{ textAlign: "center" }}
              value={this.state.newdef}
              valueStyle={{ color: "blue", textAlign: "center" }}
              prefix={<RadarChartOutlined />}
            ></Statistic>
          </Col>
          <Col span={3}>
            <Statistic
              title="Total Defects"
              style={{ textAlign: "center" }}
              value={this.state.data.length}
              valueStyle={{ color: "magenta", textAlign: "center" }}
              prefix={<BugOutlined />}
            ></Statistic>
          </Col>
        </Row>
        <ViewDefect getdata={this.getdata} clearFilters={this.clearFilters}/>
        <AddDefect show={this.state.show} adddefect={this.props.adddefect} data={this.state.data}/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    defect: state.ReducerDefect.defect,
    msg: state.ReducerDefect.msg
});

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        adddefect: (defect) => { dispatch(adddefect(defect)) },

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(defect)
