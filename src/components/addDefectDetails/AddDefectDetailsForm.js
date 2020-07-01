import React, { Component } from 'react'
import { Typography } from 'antd';
import { Form, Input, Button, Select,message} from 'antd';
import { PlusCircleOutlined, ClearOutlined } from '@ant-design/icons';
import { withRouter } from 'react-router-dom';


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

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not validate email!',
        number: '${label} is not a validate number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};

export class AddDefectDetailsForm extends Component {
    formRef = React.createRef();
    state = {
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
        const defects = {
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
        this.props.adddefect(defects);        
        this.formRef.current.resetFields();      
        
        
    }
    render() {
        return (
            <div>
                <Form {...layout} onFinish={this.handleSubmit} ref={this.formRef} name="add-defect" validateMessages={validateMessages}>
                    <Form.Item
                        label="Defect ID"
                        onChange={this.handleChange}
                        name="defectIdLabel"                        
                    >
                        <Input placeholder="DF001" disabled name="defectId" />
                    </Form.Item>
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
                    <Form.Item
                        label="Type"
                        name="typeLabel"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select value={this.state.type} style={{ width: 550 }} name="type" onChange={this.handleTypeChange}>
                            <Option value="Front End">Front End</Option>
                            <Option value="Back End">Back End</Option>
                            <Option value="UI">UI</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Status"
                        name="statusLabel"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select value={this.state.status} style={{ width: 550 }} name="status" onChange={this.handleStatusChange}>
                            <Option value="New">New</Option>
                            <Option value="Open">Open</Option>
                            <Option value="Fixed">Fixed</Option>
                            <Option value="Closed">Closed</Option>
                            <Option value="Re-open">Re-open</Option>
                            <Option value="Postpone">Postpone</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Serverity"
                        name="severityLabel"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select value={this.state.severity} style={{ width: 550 }} name="severity" onChange={this.handleSeverityChange}>
                            <Option value="High">High</Option>
                            <Option value="Medium">Medium</Option>
                            <Option value="Low">Low</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Priority"
                        name="priorityLabel"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select value={this.state.priority} style={{ width: 550 }} name="priority" onChange={this.handlePriorityChange}>
                            <Option value="High">High</Option>
                            <Option value="Medium">Medium</Option>
                            <Option value="Low">Low</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Entered By"
                        name="enteredByLabel"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select value={this.state.enteredBy} style={{ width: 550 }} name="enteredBy" onChange={this.handleEnteredByChange}>
                            <Option value="Sanjsijan">Sanjsijan</Option>
                            <Option value="Lavanjan">Lavanjan</Option>
                            <Option value="Sivapiriyan">Sivapiriyan</Option>
                            <Option value="Gobika">Gobika</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Assign To"
                        name="assignToLabel"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select value={this.state.assignTo} style={{ width: 550 }} name="assignTo" onChange={this.handleAssignToChange}>
                            <Option value="Sanjsijan">Sanjsijan</Option>
                            <Option value="Lavanjan">Lavanjan</Option>
                            <Option value="Sivapiriyan">Sivapiriyan</Option>
                            <Option value="Gobika">Gobika</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Found In"
                        name="foundInLabel"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select value={this.state.foundIn} style={{ width: 550 }} name="foundIn" onChange={this.handleFoundInChange}>
                            <Option value="Rel-1">Rel-1</Option>
                            <Option value="Rel-2">Rel-2</Option>
                            <Option value="Rel-3">Rel-3</Option>
                            <Option value="Rel-4">Rel-4</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item
                        label="Aailable In"
                        name="availableInLabel"
                        rules={[
                            {
                                required: true,
                            },
                        ]}
                    >
                        <Select value={this.state.availableIn} style={{ width: 550 }} name="availableIn" onChange={this.handleAvailableInChange}>
                            <Option value="Rel-1">Rel-1</Option>
                            <Option value="Rel-2">Rel-2</Option>
                            <Option value="Rel-3">Rel-3</Option>
                            <Option value="Rel-4">Rel-4</Option>
                        </Select>
                    </Form.Item>
                    <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 14 }}>
                        <Button type="danger" style={{ width: 100 }}>
                            <ClearOutlined />
                            Clear
                        </Button>
                        &nbsp;
                        <Button type="primary" htmlType="submit" style={{ width: 100 }}>
                            <PlusCircleOutlined />  Submit
                        </Button>


                    </Form.Item>
                </Form>
            </div>
        )
    }
}

export default withRouter(AddDefectDetailsForm)
