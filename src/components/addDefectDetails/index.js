import React, { Component } from 'react'
import { message } from 'antd';
import { PageHeader } from 'antd';
import { connect } from 'react-redux';
import {adddefect} from '../redux/action/ActionDefect';
import AddDefectDetailsForm from '../addDefectDetails/AddDefectDetailsForm'
import { withRouter } from 'react-router-dom';



export class AddDefectDetails extends Component {
  
    state={
      err:'err'
    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.msg === this.state.err) {   
          message.loading('Action in progress..', 2.5)       
          .then(() =>  message.error(nextProps.msg,2.5))
        }
        else{
          message.loading('Action in progress..')
          .then(() => message.success(nextProps.msg))


        }   
        
        this.props.history.push('/'); 
        window.location.reload();    
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

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(AddDefectDetails));