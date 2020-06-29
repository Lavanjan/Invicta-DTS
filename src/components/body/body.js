import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import ViewDefectDetails from './../viewDefectDetails/ViewDefectDetails';
import AddDefectDetails from './../addDefectDetails/AddDefectDetails';
import EmployeeAllocation from './../employeeAllocation/EmplyeeAllocation'

export class body extends Component {
    render() {
        return (
            <div>
                {/* <ViewDefectDetails /> */}
                <Route exact path = "/" component = { ViewDefectDetails } />
                <Route path = "/add-defect" component = { AddDefectDetails } />
                <Route path = "/employee-allocation" component = { EmployeeAllocation } />
            </div>
        )
    }
}

export default body