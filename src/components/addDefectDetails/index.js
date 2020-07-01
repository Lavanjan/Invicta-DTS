import React, { Component } from 'react'
import { Typography } from 'antd';
import { Form, Input, Button, Select, message } from 'antd';
import { PageHeader } from 'antd';
import { PlusCircleOutlined, ClearOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import {adddefect} from '../redux/action/ActionDefect';
import AddDefectDetailsForm from '../addDefectDetails/AddDefectDetailsForm'


export class AddDefectDetails extends Component {

    componentWillReceiveProps(nextProps) {
        if (nextProps.msg) {
          alert(nextProps.msg)
        }
        
      }  
    render() {

        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    onBack={() => null}
                    title="Add New Defect"
                />                
                <AddDefectDetailsForm adddefect={this.props.adddefect}/>
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
        adddefect: (defect) => { dispatch(adddefect(defect)) },
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(AddDefectDetails);