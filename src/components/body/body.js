import React, { Component } from 'react'
import { Route } from 'react-router-dom';

import ViewDefectDetails from './../viewDefectDetails/ViewDefectDetails';
import AddDefectDetails from './../addDefectDetails/AddDefectDetails';
import AddNewProjects from './../addNewProjects/AddNewProjects';

export class body extends Component {
    render() {
        return (
            <div>
                {/* <ViewDefectDetails /> */}
                <Route exact path = "/" component = { ViewDefectDetails } />
                <Route path="/add-defect" component={AddDefectDetails} />
                <Route path="/add-projects" component={AddNewProjects} />
                
            </div>
        )
    }
}

export default body
