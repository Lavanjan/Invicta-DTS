import React, { Component } from 'react'
import { connect } from 'react-redux';
import {fetchemployee,addemployee} from '../../components/redux/action/ActionEmployee';
import ViewEmployee from '../employee/ViewEmployee'
import AddEmployeeForm from '../employee/AddEmployeeForm'

export class employee extends Component {
    componentWillMount(){
        this.props.fetchemployee();
    }
      
    componentWillReceiveProps(nextProps) {
        if (nextProps.msg) {
          alert(nextProps.msg)
        }
        
      } 
    render() {
        return (
            <div>
                <ViewEmployee employees={this.props.employees} />
                <AddEmployeeForm addemployee={this.props.addemployee}/>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    employees: state.ReducerEmployee.employees,
    msg:state.ReducerEmployee.msg
  });
  
  const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchemployee: () => { dispatch(fetchemployee()) },
        addemployee:(employees) => { dispatch(addemployee(employees)) },       
    }
  }
export default connect(mapStateToProps,mapDispatchToProps)(employee)
