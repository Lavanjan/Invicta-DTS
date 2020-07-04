import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import ViewDefectDetails from './../viewDefectDetails/ViewDefectDetails';
import AddDefectDetails from './../addDefectDetails';
import EmployeeAllocation from './../employeeAllocation/EmplyeeAllocation'
import AddNewProjects from './../addNewProjects';
import ManageProjects from './../addNewProjects/ManageProject';


export class body extends Component {
    render() {
        return (
            <div>
                <Route exact path = "/" component = { ViewDefectDetails } />
                <Route path = "/add-defect" component = { AddDefectDetails } />
                <Route path = "/employee-allocation" component = { EmployeeAllocation } />                
                <Route path="/add-projects" component={AddNewProjects} />
                <Route path = "/manage-project" component = {ManageProjects} />
            </div>
        )
    }
}

export default body