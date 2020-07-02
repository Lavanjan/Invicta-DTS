import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import ViewDefectDetails from './../defect/ViewDefectDetails';
import AddDefectDetailsForm from './../defect/AddDefectDetailsForm';
import EmployeeAllocation from './../employeeAllocation/EmplyeeAllocation'
import AddNewProjects from './../addNewProjects';


export class body extends Component {
    render() {
        return (
            <div>
                {/* <ViewDefectDetails /> */}
                <Route exact path = "/" component = { ViewDefectDetails } />
                <Route path = "/add-defect" component = { AddDefectDetailsForm } />
                <Route path = "/employee-allocation" component = { EmployeeAllocation } />                
                <Route path="/add-projects" component={AddNewProjects} />
            </div>
        )
    }
}

export default body