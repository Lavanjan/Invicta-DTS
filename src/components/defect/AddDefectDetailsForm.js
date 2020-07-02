import React, { Component } from 'react'
import { Drawer, Form, Col, Row, Select } from "antd";
import { Input, Button, Tag } from "antd";
import { PlusCircleOutlined, ClearOutlined } from '@ant-design/icons';
import { connect } from 'react-redux';
import { message } from 'antd';
import {adddefect} from '../redux/action/ActionDefect';
const { Option } = Select;
const { TextArea } = Input;
export class AddDefectDetailsForm extends Component {
    formRef = React.createRef();
  
      componentWillReceiveProps(nextProps) {

          if (nextProps.msg) { 
            message.loading('Action in progress..')
            .then(() => message.success(nextProps.msg))  
            
          }
          else if(nextProps.show){
            this.setState({
                    show:true
            }) 
          
          }  
        } 
    state = {
        show:false,
        defects:{},
        err:'err',
        defectId: 'DF001',
        defect: '',
        stepToRecreate: '',
        type: '',
        status: '',
        severity: '',
        priority: '',
        enteredBy: '',
        assignTo: '',
        foundIn: '',
        availableIn: ''
    }

    onClose = () => {
        this.setState({
            show: false
        })
        window.location.reload(); 
    };  

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value,

        });

    };
    handleTypeChange = value => {
        this.setState({ type: value });
    };
    handleStatusChange = value => {
        this.setState({ status: value });
    };
    handleSeverityChange = value => {
        this.setState({ severity: value });
    };
    handlePriorityChange = value => {
        this.setState({ priority: value });
    };
    handleEnteredByChange = value => {
        this.setState({ enteredBy: value });
    };
    handleAssignToChange = value => {
        this.setState({ assignTo: value });
    };
    handleFoundInChange = value => {
        this.setState({ foundIn: value });
    };
    handleAvailableInChange = value => {
        this.setState({ availableIn: value });
    };

    handleSubmit = (event) => {    
        this.setState({
            defects :{
                defectsId: this.state.defectId,
                defectsName: this.state.defect,
                stepToRecreate: this.state.stepToRecreate,
                type: this.state.type,
                status: this.state.status,
                severity: this.state.severity,
                priority: this.state.priority,
                enteredBy: this.state.enteredBy,
                assignTo: this.state.assignTo,
                foundIn: this.state.foundIn,
                availableIn: this.state.availableIn
            } 
        })    
      
        this.props.adddefect(this.state.defects)
        this.formRef.current.resetFields();
        window.location.reload();       
       
    }

    render() {
        return (
            <div>
                <Drawer
                    title="Add Defct Details"
                    width={720}
                    onClose={this.onClose}
                    visible={this.state.show}
                    bodyStyle={{ paddingBottom: 80 }}
                    placement='left'                   

                >
                    <Form layout="vertical" hideRequiredMark ref={this.formRef} name="add-defect" onFinish={this.handleSubmit}>
                        <Row gutter={16}>
                            <Col span={24}>                                
                                <Form.Item
                                    label="Defect ID"
                                    onChange={this.handleChange}
                                    name="defectIdLabel"
                                >
                                    <Input placeholder="DF001" disabled name="defectId" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    label="Defect"
                                    onChange={this.handleChange}
                                    name="defectLabel"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Input placeholder="Defect" name="defect" />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={24}>
                                <Form.Item
                                    name="stepToRecreateLabel"
                                    label="Step to Recreate"
                                    onChange={this.handleChange}
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <TextArea
                                        placeholder="Step to recreate......."
                                        autoSize={{ minRows: 3, maxRows: 5 }}
                                        name="stepToRecreate"
                                    />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row gutter={16}>
                            <Col span={12}>
                                <Form.Item
                                    label="Type"
                                    name="typeLabel"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Select value={this.state.type}   name="type" onChange={this.handleTypeChange}>
                                        <Option value="Front End">Front End</Option>
                                        <Option value="Back End">Back End</Option>
                                        <Option value="UI">UI</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Status"
                                    name="statusLabel"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Select value={this.state.status}   name="status" onChange={this.handleStatusChange}>
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
                                    label="Serverity"
                                    name="severityLabel"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}                                >
                                    <Select value={this.state.severity}  name="severity" onChange={this.handleSeverityChange}>
                                        <Option value="High">High</Option>
                                        <Option value="Medium">Medium</Option>
                                        <Option value="Low">Low</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Priority"
                                    name="priorityLabel"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Select value={this.state.priority} name="priority" onChange={this.handlePriorityChange}>
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
                                    label="Entered By"
                                    name="enteredByLabel"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Select value={this.state.enteredBy}   name="enteredBy" onChange={this.handleEnteredByChange}>
                                        <Option value="Sanjsijan">Sanjsijan</Option>
                                        <Option value="Lavanjan">Lavanjan</Option>
                                        <Option value="Sivapiriyan">Sivapiriyan</Option>
                                        <Option value="Gobika">Gobika</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Assign To"
                                    name="assignToLabel"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Select value={this.state.assignTo}   name="assignTo" onChange={this.handleAssignToChange}>
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
                                    label="Found In"
                                    name="foundInLabel"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Select value={this.state.foundIn}   name="foundIn" onChange={this.handleFoundInChange}>
                                        <Option value="Rel-1">Rel-1</Option>
                                        <Option value="Rel-2">Rel-2</Option>
                                        <Option value="Rel-3">Rel-3</Option>
                                        <Option value="Rel-4">Rel-4</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col span={12}>
                                <Form.Item
                                    label="Aailable In"
                                    name="availableInLabel"
                                    rules={[
                                        {
                                            required: true,
                                        },
                                    ]}
                                >
                                    <Select value={this.state.availableIn}   name="availableIn" onChange={this.handleAvailableInChange}>
                                        <Option value="Rel-1">Rel-1</Option>
                                        <Option value="Rel-2">Rel-2</Option>
                                        <Option value="Rel-3">Rel-3</Option>
                                        <Option value="Rel-4">Rel-4</Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row> 
                        <Row gutter={16}>
                                               
                        <Form.Item>
                            <Button type="danger" style={{ width: 100 ,marginLeft:453}}>
                                <ClearOutlined />
                                Clear
                        </Button>
                            &nbsp;
                        <Button type="primary" htmlType="submit" style={{ width: 100 }}>
                                <PlusCircleOutlined />  Submit
                        </Button>
                        </Form.Item>
                        
                        </Row>
                    </Form>
                </Drawer>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    defect: state.ReducerDefect.defect,
    msg:state.ReducerDefect.msg
  });
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        adddefect:(defect) => { dispatch(adddefect(defect)) },
        
    }
  }
export default connect(mapStateToProps,mapDispatchToProps) (AddDefectDetailsForm)
