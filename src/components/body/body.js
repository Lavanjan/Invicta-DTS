import React, { Component } from 'react'
import { Route } from 'react-router-dom';
import ViewDefectDetails from './../defect/ViewDefectDetails';
import AddDefectDetailsForm from './../defect/AddDefectDetailsForm';
import EmployeeAllocation from './../employeeAllocation/EmplyeeAllocation'
import AddNewProjects from './../addNewProjects';

import ManageProjects from './../addNewProjects/ManageProject';

import Employee from  './../employee/index'
import AddEmployeeForm from './../employee/AddEmployeeForm'
<<<<<<< HEAD
import UpdateEmployeeForm from './../employee/UpdateEmployeeForm'

import Defect from './../defect/index'
=======
import SignInForm from './../authentication/SignIn';
>>>>>>> fd661ea9284221293c9b05b3252f152b618ed3b2



export class body extends Component {
    render() {
        return (
            <div>
<<<<<<< HEAD
                <Route exact path = "/" component = { Defect } />
=======
                <Route exact path = "/home" component = { ViewDefectDetails } />
>>>>>>> fd661ea9284221293c9b05b3252f152b618ed3b2
                <Route path = "/add-defect" component = { AddDefectDetailsForm } />
                <Route path = "/employee-allocation" component = { EmployeeAllocation } />                
                <Route path="/add-projects" component={AddNewProjects} />
                <Route path = "/manage-project" component = {ManageProjects} />
                <Route path="/employee" component={Employee} />
                <Route path="/add-employee" component={AddEmployeeForm} />
                <Route path="/view-employee" component={ViewDefectDetails} />
                {/* <Route path="/sign-in" component = {SignInForm} /> */}
            </div>
        )
    }
}

export default body